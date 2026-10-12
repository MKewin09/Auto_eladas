import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  };

  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files) {
      this.selectedFiles = Array.from(files);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('brand', this.vehicle.brand);
    formData.append('model', this.vehicle.model);
    formData.append('year', String(this.vehicle.year || ''));
    formData.append('price', String(this.vehicle.price || ''));

    this.selectedFiles.forEach((file, index) => {
      formData.append(`photos[]`, file);
    });

    console.log('Prepared FormData for Laravel backend:', formData);
    alert('Hirdetés sikeresen elküldve képekkel együtt!');
  }
}
