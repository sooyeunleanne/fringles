import {Component} from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BandDisplayComponent } from "./components/sections/band-display/band-display.component";
import { AboutComponent } from "./components/sections/about/about.component";
import { MemberComponent } from "./components/sections/member/member.component";
import { SponsorComponent } from "./components/sections/sponsor/sponsor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BandDisplayComponent, AboutComponent, MemberComponent, SponsorComponent],
  template: `
    <div>
      <app-header/>
      <app-band-display/>
      <app-member/>
      <app-about/>
      <app-sponsor/>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
