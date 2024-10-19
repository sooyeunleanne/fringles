import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class='footer-container'>
      <p>
      {{ translationService.getTranslation('footer.Inquiries') }}
        <a href="mailto:gayeunbella@gmail.com">gayeunbella&#64;gmail.com</a>
      </p>
      <p>
      {{ translationService.getTranslation('footer.Developer') }}
      </p>
    </div> 
  `,
  styleUrls: ['../../app.component.css', './footer.component.css']
})

export class FooterComponent {
  constructor(public translationService: TranslationService) {}
}
