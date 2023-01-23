import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EegComponent } from './components/eeg/eeg.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SleepDisordersComponent } from './components/sleep-disorders/sleep-disorders.component';
import { SleepStudyComponent } from './components/sleep-study/sleep-study.component';
import { SmiFacilityComponent } from './components/smi-facility/smi-facility.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'eeg', component: EegComponent },
 { path: 'registration', component: RegistrationComponent },
 { path: 'sleep-disorders', component: SleepDisordersComponent },
 { path: 'sleep-study', component: SleepStudyComponent },
 { path: 'eeg', component: EegComponent },
 { path: 'smi-facility', component: SmiFacilityComponent },
 { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
