import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA } from 'src/app/cards-info';
import { Imagen } from 'src/app/Models/imagen';
import { ImagenService } from 'src/app/services/imagen.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit {

  constructor(
    public localStorageService: LocalStorageService,
    private router: Router
  ) {}

  model: any = {};

  public data = DATA;

  ngOnInit(): void {

    if (!this.localStorageService.isEmptyData()) {
      this.localStorageService.imgData = this.localStorageService.getData();
    }
  }

  submit() {
    const inputs: any = document.querySelectorAll('.check') as unknown;
    let selected: any = [];
    inputs.forEach((input: any) => {
      const value = input.checked;
      const title = input.parentNode.querySelector('h2');
      const img = input.parentNode.parentNode.querySelector('img');
      console.log({ title: title.innerHTML, img: img.src });
      if (value && selected.length < 2) {
        selected.push({ title: title.innerHTML, img: img.src });
      }
    });
    this.localStorageService.setPairs(selected);
    this.router.navigate(['/game']);
  }
  
}
