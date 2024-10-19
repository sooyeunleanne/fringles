import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header-container">
      <h1>Fringles</h1>
      <div class="router-container">
        <p (click)="scrollTo('member')">Members</p>
        <p (click)="scrollTo('about')">About</p>
        <p (click)="scrollTo('sponsor')">Sponsors</p>
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
