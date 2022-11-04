import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImagenService } from 'src/app/services/imagen.service';


@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
})
export class AddImageComponent implements OnInit {

  @ViewChild('imagenInputFile', { static: false }) imagenFile: any;

  imagen: any;
  imagenMin: any;

  constructor(
    private imagenService: ImagenService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  onFileChange(event: any) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  onUpload(): void {
    this.spinner.show();
    this.imagenService.upload(this.imagen).subscribe(
      {
        next: (data) => {
          alert('Datos: ' + data);
          this.spinner.hide();
          this.router.navigate(['/galery']);
        }, error: (err) => {
          alert('Error: ' + err);
          this.spinner.hide();
          this.reset();
        },
      }

    );
  }

  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }





}
  /*
constructor(
private ImagenService: LocalStorageService,
private router: Router,
private spinner: NgxSpinnerService,
) {}

ngOnInit(): void {}

submit(formData: any, imgInput: any) {
const file = imgInput.files[0];
const reader: any = new FileReader();
reader.readAsDataURL(file);
reader.onloadend = (e: any) => {
formData.form.value.img = e.target.result;
//console.log(formData.form.value);
this.localStorageService.addImgData(formData.form.value);
this.router.navigate(['/galery']);
};
}
*/
