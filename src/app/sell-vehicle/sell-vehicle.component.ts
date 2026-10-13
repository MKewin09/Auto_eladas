import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sell-vehicle',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sell-vehicle.component.html',
  styleUrls: ['./sell-vehicle.component.css'],
})
export class SellVehicleComponent {
  vehicle = {
    brand: '',
    model: '',
    year: null,
    price: null,
    contactName: '',
    phone: '',
    email: '',
  };

  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files) {
      this.selectedFiles = Array.from(files);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('brand', this.vehicle.brand);
    formData.append('model', this.vehicle.model);
    formData.append('year', String(this.vehicle.year || ''));
    formData.append('price', String(this.vehicle.price || ''));
    formData.append('contact_name', this.vehicle.contactName);
    formData.append('phone', this.vehicle.phone);
    formData.append('email', this.vehicle.email);

    this.selectedFiles.forEach((file, index) => {
      formData.append(`photos[]`, file);
    });

    console.log('Prepared vehicle purchase inquiry FormData (not sent):', formData);
    alert(
      'Az ajánlatkérés nincs még összekötve a szerverrel, ezért az adatok nem kerültek elküldésre.',
    );
  }
}
