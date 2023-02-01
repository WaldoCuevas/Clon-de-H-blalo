import { Component, Input, OnInit } from '@angular/core';
import { IndexDBService } from 'src/app/services/index-db.service';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() id: any;

  details: any;

  @Input() showAdd: any;

  cardInfo: any;

  valor_filtros: string | undefined;

  constructor(
    private speechService: SpeechService,
    private indexDBService: IndexDBService
  ) {}

  async ngOnInit() {
    this.valor_filtros = `filter: saturate(${localStorage.getItem(
      'saturate'
    )}%) blur(${localStorage.getItem(
      'blur'
    )}px) brightness(${localStorage.getItem(
      'brightness'
    )}%) contrast(${localStorage.getItem('contrast')}%);`;
    this.cardInfo = await this.indexDBService.findById(parseInt(this.id));
  }

  hablar(input: string, html: any) {
    if (this.showAdd) {
      const parent = html.parentNode;
      const checked = parent.querySelector('.check').checked;
      checked
        ? (parent.querySelector('.check').checked = false)
        : (parent.querySelector('.check').checked = true);
    } else {
      this.speechService.hablar(input);
    }
  }

  async borrar(info: any) {
    await this.indexDBService.deleteById(info.id);
  }
}
