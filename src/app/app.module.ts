import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home/home.component';
import { LucideAngularModule } from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';

import { 
  Mail, 
  ClipboardList, 
  Cat, 
  ShoppingBasket 
} from 'lucide-angular';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    NgOptimizedImage,

    LucideAngularModule.pick({ 
      Mail, 
      ClipboardList, 
      Cat, 
      ShoppingBasket 
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
