import { Routes } from '@angular/router';
import { WeatherComponent } from './@components/weather/weather.component';
import { PracticeComponent } from './@components/practice/practice.component';
import { Weather2Component } from './@components/weather2/weather2.component';



export const routes: Routes = [
  {path:'weather',component:WeatherComponent},
  {path:'practice',component:PracticeComponent},
  {path:'weatherAPI',component:Weather2Component},


];
