import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZlatneKovaniceComponent } from './zlatne-kovanice/zlatne-kovanice.component'; // Ensure this path is correct
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ZlatnePolugeComponent } from './zlatne-poluge/zlatne-poluge.component';
import { KursnaListaComponent } from './kursna-lista/kursna-lista.component';
import { GenericCenovnikComponent } from './generic-cenovnik/generic-cenovnik.component';

@NgModule({
  declarations: [
    AppComponent,
    ZlatneKovaniceComponent,
    ZlatnePolugeComponent,
    KursnaListaComponent,
    GenericCenovnikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
