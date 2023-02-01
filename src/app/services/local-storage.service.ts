import { Injectable } from '@angular/core';
import { DATA } from 'src/app/cards-info';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  pairsId: any[] = [];

  public setPairs(Data: any) {
    const string = JSON.stringify(Data);
    localStorage.setItem('pairs', string);
    this.pairsId = Data;
  }

  public isEmptyPairs() {
    return localStorage.getItem('pairs') ? false : true;
  }

  public getPairs() {
    const spairs: any = localStorage.getItem('pairs');
    const pairs: any = JSON.parse(spairs);
    return pairs;
  }
}
