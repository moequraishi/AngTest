import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material Dependencies
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './material-module';

// HTTP Service
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

// Form Control
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Components - Views
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
