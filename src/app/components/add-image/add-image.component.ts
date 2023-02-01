import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexDBService } from 'src/app/services/index-db.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
})
export class AddImageComponent implements OnInit {
  constructor(private indexDBService: IndexDBService, private router: Router) {}

  ngOnInit(): void {}

  submit(formData: any, imgInput: any) {
    const file = imgInput.files[0];
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async (e: any) => {
      formData.form.value.img = e.target.result;
      formData.form.value.delete = true;
      //console.log(formData.form.value);
      await this.indexDBService.addImgData(formData.form.value);
      this.router.navigate(['/galery']);
    };
  }
}
