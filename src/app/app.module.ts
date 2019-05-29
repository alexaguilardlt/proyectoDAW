import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlcoholListComponent } from './alcohol-list/alcohol-list.component';
import { IndiceAlcoholComponent } from './indice-alcohol/indice-alcohol.component';
import { AlcoholService } from './services/alcohol.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { BotoneraComponent } from './botonera/botonera.component';

@NgModule({
  declarations: [
    AppComponent,
    AlcoholListComponent,
    IndiceAlcoholComponent,
    DisplayComponent,
    BotoneraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlcoholService],
  bootstrap: [AppComponent]
})
export class AppModule { }
