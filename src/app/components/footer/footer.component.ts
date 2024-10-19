import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class='footer-container'>
      <p>
        For more inquiries: Email us at 
        <a href="mailto:gayeunbella@gmail.com">gayeunbella&#64;gmail.com</a>
        </p>
    </div> 
  `,
  styleUrls: ['../../app.component.css', './footer.component.css']
})
export class FooterComponent {

}
