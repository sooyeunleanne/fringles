import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [],
  template: `
    <div class='section-container'>
      <h1>Sponsors</h1>
      <div class='paragraph-container'>
        <p>Bob's Guitar Service</p>
        <a href='https://bobsguitarservice.com/'>https://bobsguitarservice.com/</a>
      </div>
    </div>
  `,
  styleUrls: [ '../../../app.component.css']
})
export class SponsorComponent {

}
