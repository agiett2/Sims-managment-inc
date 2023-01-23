import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SleepDisordersComponent } from './components/sleep-disorders/sleep-disorders.component';
import { SleepStudyComponent } from './components/sleep-study/sleep-study.component';
import { SmiFacilityComponent } from './components/smi-facility/smi-facility.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EegComponent } from './components/eeg/eeg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    SleepDisordersComponent,
    SleepStudyComponent,
    SmiFacilityComponent,
    RegistrationComponent,
    EegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
