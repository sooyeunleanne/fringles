import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [],
  template: `
    <div id='sponsor' class='section-container'>
      <h1>{{ translationService.getTranslation('sponsor.title') }}</h1>
      <div class='paragraph-container'>
        <p>Bob's Guitar Service</p>
        <a href='https://bobsguitarservice.com/'>https://bobsguitarservice.com/</a>
      </div>
    </div>
  `,
  styleUrls: []
})
export class SponsorComponent {
  constructor(public translationService: TranslationService) {}
}
