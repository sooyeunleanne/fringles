import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div id='about' class="section-container">
      <h1>{{ translationService.getTranslation('about.title') }}</h1>
      <div class='paragraph-container'>
        <p>{{ translationService.getTranslation('about.paragraph') }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  constructor(public translationService: TranslationService) {}
}
