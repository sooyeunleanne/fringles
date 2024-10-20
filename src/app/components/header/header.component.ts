import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header-container">
      <h1>{{ translationService.getTranslation('title') }}</h1>
      <div class="router-container">
        <p class='router-button' (click)="scrollTo('member')">{{ translationService.getTranslation('member.router') }}</p>
        <p class='router-button' (click)="scrollTo('about')">{{ translationService.getTranslation('about.router') }}</p>
        <p class='router-button' (click)="scrollTo('sponsor')">{{ translationService.getTranslation('sponsor.router') }}</p>

        <p class='translation-button' *ngIf="(translationService.currentLanguage$ | async) === 'kr'" (click)="changeLanguage('en')">🇨🇦 English</p>
        <p class='translation-button' *ngIf="(translationService.currentLanguage$ | async) === 'en'" (click)="changeLanguage('kr')">🇰🇷 한국어</p>
        </div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  constructor(public translationService: TranslationService) {}

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }
}
