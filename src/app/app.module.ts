import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { WarehouseComponent } from './warehouse/warehouse.component'
import { config } from './config'
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { MatListModule } from '@angular/material/list';
import { FirestoreModule } from '@angular/fire/firestore'
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    WarehouseComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    FirebaseAppModule,
    FirestoreModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
