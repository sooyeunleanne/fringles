import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header-container">
      <h1>Fringles</h1>
      <div class="router-container">
        <p>
          Members
        </p>
        <p>
          About
        </p>
        <p>
          Sponsors
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

}
