import Dexie, { Table } from 'dexie';
import { DATA } from './cards-info';

export interface imgData {
  id?: number;
  title: string;
  img: string;
  delete?: boolean;
}

export class AppDB extends Dexie {
  imgData!: Table<imgData, number>;
  data = DATA;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      imgData: '++id',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await db.imgData.bulkAdd(this.data);
  }
}

export const db = new AppDB();
