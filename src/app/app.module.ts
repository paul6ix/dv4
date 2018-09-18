import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GeolocationService} from './geolocation.service';
import {DataService} from './data.service';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatToolbarModule,
  MatSlideToggleModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { TipsComponent } from './tips/tips.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
const router : Routes = [
  {path : '', component: ListComponent},
  {path:'tips',component:TipsComponent},
  {path:'tips/:id',component:TipsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TipsComponent,
  ],
  imports: [
    RouterModule.forRoot(router),
    HttpModule,
    FormsModule,
    BrowserModule,
    MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatIconModule, MatSelectModule,
    MatCardModule, MatInputModule, MatSliderModule, MatToolbarModule,MatSlideToggleModule, BrowserAnimationsModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
