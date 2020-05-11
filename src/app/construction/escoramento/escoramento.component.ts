import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-escoramento',
  templateUrl: './escoramento.component.html',
  styleUrls: ['./escoramento.component.css']
})
export class EscoramentoComponent implements OnInit {
  _albums: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 10; i++) {
      const src = '../assets/img/construcao/escoramento/escoramento' + i + '.jpg';
      const caption = 'Imagem ' + i + ' de 10';
      const thumb = '../assets/img/construcao/escoramento/thumb/escoramento' + i + '-thumb.jpg';
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
