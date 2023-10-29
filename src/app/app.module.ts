import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { InputDirective } from './components/input/input.directive';
import { TemplateLoaderService } from './components/transfer/transfer.service';
import { HttpClientModule } from '@angular/common/http';
import { TransferListComponent } from './components/transfer/transfer-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputDirective,
    TransferComponent,
    TransferListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TemplateLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
