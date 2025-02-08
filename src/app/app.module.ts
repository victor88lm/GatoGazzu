import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home/home.component';
import { LucideAngularModule } from 'lucide-angular';

import { 
  Mail, 
  ClipboardList, 
  Cat, 
  ShoppingBasket 
} from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 

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
