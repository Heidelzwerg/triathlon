import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffelanmeldungComponent } from './staffelanmeldung/staffelanmeldung.component';
import { EinzelanmeldungComponent } from './einzelanmeldung/einzelanmeldung.component';
import { StartNummerDruckenComponent } from './start-nummer-drucken/start-nummer-drucken.component';
import { UrkundeDruckenComponent } from './urkunde-drucken/urkunde-drucken.component';
import { AnmeldestandComponent } from './anmeldestand/anmeldestand.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffelanmeldungComponent,
    EinzelanmeldungComponent,
    StartNummerDruckenComponent,
    UrkundeDruckenComponent,
    AnmeldestandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
