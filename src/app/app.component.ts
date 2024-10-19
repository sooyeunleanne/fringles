import {Component} from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BandDisplayComponent } from "./components/sections/band-display/band-display.component";
import { AboutComponent } from "./components/sections/about/about.component";
import { MemberComponent } from "./components/sections/member/member.component";
import { SponsorComponent } from "./components/sections/sponsor/sponsor.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [ HeaderComponent, BandDisplayComponent, AboutComponent, MemberComponent, SponsorComponent, FooterComponent],
  template: `
    <div>
      <app-header/>
      <app-band-display/>
      <app-member/>
      <app-about/>
      <app-sponsor/>
      <app-footer/>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
