import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellVehicleComponent } from './sell-vehicle/sell-vehicle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sell', component: SellVehicleComponent },
  { path: '**', redirectTo: '' },
];
