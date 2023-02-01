import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexDBService } from 'src/app/services/index-db.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit {
  constructor(
    public localStorageService: LocalStorageService,
    public indexDBService: IndexDBService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.indexDBService.imgData = await this.indexDBService.getImgData();
  }

  submit() {
    const inputs: any = document.querySelectorAll('.check') as unknown;
    let selected: any = [];
    inputs.forEach((input: any) => {
      const value = input.checked;
      const title = input.parentNode.querySelector('h2');
      const img = input.parentNode.parentNode.querySelector('img');
      //console.log({ id: title.id, title: title.innerHTML, img: img.src });
      if (value && selected.length < 2) {
        selected.push(title.id);
      }
    });
    this.localStorageService.setPairs(selected);
    this.router.navigate(['/game']);
  }
}
