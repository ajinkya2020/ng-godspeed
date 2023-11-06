# ng-godspeed-transfer

An Angular-based component, which enables seamless transfer of items between two lists.

## Usage Example

Import `TransferModule` into your app module

```javascript
import { TransferModule } from 'ng-godspeed-transfer';
```

In the component's template, add the `gs-transfer` tag.
```javascript
<gs-transfer [leftListData]="leftListData" [rightListData]="rightListData"></gs-transfer>
```

## Sample Usage

### app.component.ts
```javascript
import { Component } from '@angular/core';
import { GsTransferData } from 'ng-godspeed-transfer/src/app/components/transfer/transfer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ng-godspeed-transfer';
  
  public leftListData: GsTransferData[] = [];
  public rightListData: GsTransferData[] = [];

  constructor() {
    for(let i=0; i<10; i++) {
      if(i !== 3 && i !== 5) {
        this.leftListData.push({
          key: i + 1,
          title: 'item' + String(i + 1),
          checked: false,
          disabled: i % 2 === 1 
        });
      } else {
        this.rightListData.push({
          key: i + 1,
          title: 'item' + String(i + 1),
          checked: i < 5 ? true : false,
          disabled: i % 2 === 0
        });
      }
    }
  }
}
```

### app.component.html
```javascript
<gs-transfer [leftListData]="leftListData" [rightListData]="rightListData"></gs-transfer>
```

### app.module.ts
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TransferModule } from 'ng-godspeed-transfer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransferModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
