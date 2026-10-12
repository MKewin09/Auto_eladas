import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideZonelessChangeDetection } from '@angular/core';
import { HomeComponent } from './app/home/home.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(HomeComponent, {
  providers: [provideZonelessChangeDetection(), [provideRouter(routes)]],
}).catch((err) => console.error(err));
