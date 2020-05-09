import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-luxury-bathroom',
  templateUrl: './luxurybathroom.component.html',
  styleUrls: ['./luxurybathroom.component.css']
})
export class LuxuryBathroomComponent implements OnInit {

  private _albums: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 9; i++) {
      const src = '../assets/img/evento/banheiros/banheiro' + i + '.jpg';
      const caption = 'Imagem ' + i + ' de 9';
      const thumb = '../assets/img/evento/banheiros/thumb/banheiro' + i + '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }

  ngOnInit() {
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


}
