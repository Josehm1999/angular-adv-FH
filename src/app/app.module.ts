import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [AppComponent, PagenotfoundComponent],
  imports: [BrowserModule,ComponentsModule, AppRoutingModule, PagesModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
