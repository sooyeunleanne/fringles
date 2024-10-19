import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about-container">
      <h1>About Us</h1>
      <div>
        <p>Fringles is a newly formed Korean youth band. With a passion for music and a heart for service, the band aims to fundraise for donation purposes, using their talent to support various charitable causes. Fringles plans to perform at different charity events, spreading joy and hope through their music while making a positive impact in their community and beyond.</p>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
