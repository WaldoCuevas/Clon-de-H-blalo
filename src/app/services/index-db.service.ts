import { Injectable } from '@angular/core';
import { db } from '../db';

@Injectable({
  providedIn: 'root',
})
export class IndexDBService {
  constructor() {}

  imgData: any[] = [];

  public async addImgData(input: any) {
    await db.imgData.add(input);
  }

  public async getImgData() {
    const data = await db.imgData.toArray();
    return data;
  }

  public async findById(id: number) {
    const data = await db.imgData.get(id);
    return data;
  }

  public async deleteById(id: number) {
    await db.imgData.delete(id);
    let index = -1;
    this.imgData.forEach((item, i) => {
      if (item.id == id) {
        index = i;
      }
    });
    this.imgData.splice(index, 1);
  }
}
