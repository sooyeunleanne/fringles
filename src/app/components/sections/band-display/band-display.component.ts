import { Component } from '@angular/core';

@Component({
  selector: 'app-band-display',
  standalone: true,
  imports: [],
  template: `
    <div class='band-display-container'>
      <span class='stage-square'></span>
      <span class='stage-circle'></span>

      <span class='light-triangle'></span>
      <span class='light-circle'></span>


      <div class='band-wrapper'>
        <img class='drummer' src='../../../../assets/images/drummer.png'>
        <img class='bass' src='../../../../assets/images/bass.png'>
        <img class='keyboard-player' src='../../../../assets/images/keyboard-player.png'>
        <img class='keyboard' src='../../../../assets/images/keyboard.png'>
        <img class='elec' src='../../../../assets/images/elec.png'>
        <img class='vocal' src='../../../../assets/images/vocal.png'>
      </div>
    </div>
  `,
  styleUrls: ['./band-display.component.css']
})
export class BandDisplayComponent {
}
