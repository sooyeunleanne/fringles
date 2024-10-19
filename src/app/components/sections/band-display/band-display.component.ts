import { Component } from '@angular/core';
@Component({
  selector: 'app-band-display',
  standalone: true,
  imports: [],
  template: `
    <div id='band-display' class='band-display-container'>
      <span class='band stage-square'></span>
      <span class='band stage-circle'></span>

      <span class='band light-triangle'></span>
      <span class='band light-circle'></span>


      <div class='band band-wrapper'>
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
