import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransferComponent } from './transfer.component';
import { TransferListComponent } from './transfer-list.component';

@NgModule({
  declarations: [
    TransferComponent,
    TransferListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [TransferComponent],
  providers: [],
})
export class TransferModule { }
