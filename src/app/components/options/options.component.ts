import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  title: string = 'OPCIONES';
  saturate_value: number | string | null = localStorage.getItem('saturate');
  blur_value: number | string | null = localStorage.getItem('blur');
  brightness_value: number | string | null = localStorage.getItem('brightness');
  contrast_value: number | string | null = localStorage.getItem('contrast');

  constructor() {
  }

  ngOnInit(): void {
    this.settings();
  }

  settings(): void {
    const i_contrast = (document.querySelector('#input-contrast') as HTMLInputElement);
    const i_brightness = (document.querySelector('#input-brightness') as HTMLInputElement);
    const i_blur = (document.querySelector('#input-blur') as HTMLInputElement);
    const i_saturate = (document.querySelector('#input-saturate') as HTMLInputElement);

    
    const img = (document.querySelector('.imagen') as HTMLImageElement);
    img.style.cssText = `filter: saturate(${localStorage.getItem('saturate')}%) blur(${localStorage.getItem('blur')}px) brightness(${localStorage.getItem('brightness')}%) contrast(${localStorage.getItem('contrast')}%);`;

    i_saturate.addEventListener('change', (): void => {

      localStorage.setItem('saturate', i_saturate.value);
      img.style.cssText = `filter: saturate(${localStorage.getItem('saturate')}%) blur(${localStorage.getItem('blur')}px) brightness(${localStorage.getItem('brightness')}%) contrast(${localStorage.getItem('contrast')}%);`;

    });
    i_contrast.addEventListener('change', (): void => {

      localStorage.setItem('contrast', i_contrast.value);
      img.style.cssText = `filter: saturate(${localStorage.getItem('saturate')}%) blur(${localStorage.getItem('blur')}px) brightness(${localStorage.getItem('brightness')}%) contrast(${localStorage.getItem('contrast')}%);`;

    });
    i_blur.addEventListener('change', (): void => {

      localStorage.setItem('blur', i_blur.value);
      img.style.cssText = `filter: saturate(${localStorage.getItem('saturate')}%) blur(${localStorage.getItem('blur')}px) brightness(${localStorage.getItem('brightness')}%) contrast(${localStorage.getItem('contrast')}%);`;

    });
    i_brightness.addEventListener('change', (): void => {

      localStorage.setItem('brightness', i_brightness.value);
      img.style.cssText = `filter: saturate(${localStorage.getItem('saturate')}%) blur(${localStorage.getItem('blur')}px) brightness(${localStorage.getItem('brightness')}%) contrast(${localStorage.getItem('contrast')}%);`;

    });

  }

}