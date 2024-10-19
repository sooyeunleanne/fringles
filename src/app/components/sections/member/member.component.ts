import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  template: `
    <div id='member' class='section-container'>
      <h1>Members</h1>
      <div class='paragraph-container'>
        <p><b>Vocal</b>: Bella Kim</p>
        <p><b>Electric Guitar</b>:	Jiyong Choi</p>
        <p><b>Bass</b>: Danielle Pak</p>
        <p><b>Keyboard</b>: Min Kim</p> 
        <p><b>Drum</b>: Kiyoon Kim</p>
      </div>
    </div>
  `,
  styleUrls: ['./member.component.css', '../../../app.component.css']
})
export class MemberComponent {

}
