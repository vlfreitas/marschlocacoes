import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-bathroom',
  templateUrl: './banheiros.component.html',
  styleUrls: ['./banheiros.component.css']
})
export class BathroomComponent implements OnInit {

  private _albums: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 2; i++) {
      const src = '../assets/img/construcao/banheiros/banheiro' + i + '.jpg';
      // const caption = 'Image ' + i + ' caption here';
      const thumb = '../assets/img/construcao/banheiros/thumb/banheiro' + 1 + '-thumb.jpg';
      const album = {
        src: src,
        // caption: caption,
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
