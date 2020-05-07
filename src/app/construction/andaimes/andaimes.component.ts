import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-andaimes',
  templateUrl: './andaimes.component.html',
  styleUrls: ['./andaimes.component.css']
})
export class AndaimesComponent implements OnInit {

  private _albums: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 2; i++) {
      const src = '../assets/img/construcao/andaimes/andaime' + i + '.jpg';
      // const caption = 'Image ' + i + ' caption here';
      const thumb = '../assets/img/construcao/andaimes/thumb/andaime' + 1 + '-thumb.jpg';
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
