import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header-container">
      <h1>Fringles</h1>
      <div class="router-container">
        <p class='router-button' (click)="scrollTo('member')">Members</p>
        <p class='router-button' (click)="scrollTo('about')">About</p>
        <p class='router-button' (click)="scrollTo('sponsor')">Sponsors</p>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
