import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Members</h1>
      <div>
        <p><b>Vocal</b>: Bella Kim</p>
        <p><b>Electric Guitar</b>:	Jiyong Choi</p>
        <p><b>Bass</b>: Danielle Pak</p>
        <p><b>Keyboard</b>: Min Kim</p> 
        <p><b>Drum</b>: Kiyoon Kim</p>
      </div>
    </div>
  `,
  styles: ``
})
export class MemberComponent {

}
