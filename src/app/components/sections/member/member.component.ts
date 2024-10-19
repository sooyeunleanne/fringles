import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  template: `
    <div id='member' class='section-container'>
      <h1>{{ translationService.getTranslation('member.title') }}</h1>
      <div class='paragraph-container'>
        <p><b>{{ translationService.getTranslation('member.Vocal') }}</b>: {{ translationService.getTranslation('member.Bella Kim') }}</p>
        <p><b>{{ translationService.getTranslation('member.Electric Guitar') }}</b>: {{ translationService.getTranslation('member.Jiyong Choi') }}</p>
        <p><b>{{ translationService.getTranslation('member.Bass Guitar') }}</b>: {{ translationService.getTranslation('member.Danielle Pak') }}</p>
        <p><b>{{ translationService.getTranslation('member.Keyboard') }}</b>: {{ translationService.getTranslation('member.Min Kim') }}</p> 
        <p><b>{{ translationService.getTranslation('member.Drum') }}</b>: {{ translationService.getTranslation('member.Kiyoon Kim') }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  constructor(public translationService: TranslationService) {}
}
