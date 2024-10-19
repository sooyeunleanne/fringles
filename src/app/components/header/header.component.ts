import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header-container">
      <h1>Fringles</h1>
      <div class="router-container">
        <p class='router-button' (click)="scrollTo('member')">{{ translationService.translate('members.router') }}</p>
        <p class='router-button' (click)="scrollTo('about')">About</p>
        <p class='router-button' (click)="scrollTo('sponsor')">Sponsors</p>
<!-- 
        <p *ngIf="translationService.currentLanguage === 'en'">한국어</p>
        <p *ngIf="translationService.currentLanguage === 'ko'">English</p> -->
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

  toggleLanguage() {
    const newLang = this.translationService.currentLanguage === 'en' ? 'ko' : 'en';
    this.translationService.switchLanguage(newLang);
  }
}
