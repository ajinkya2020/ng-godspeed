# ng-godspeed-transfer

An Angular-based component, which enables seamless transfer of items between two lists.
![ng-godspeed-transfer](https://github.com/ajinkya2020/ng-godspeed/blob/master/src/assets/ng-godspeed-transfer.PNG?raw=true)

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

### API

gs-transfer
| Property  | Description | Type |
| ---- | ------------- | -------|
| height  | Height for the transfer component. Defaults to 200 | px |
| width  | Width for the transfer component. Defaults to 500 | px |
| leftListData  | The source list | GsTransferData[] |
| rightListData  | The target list | GsTransferData[] |
| listTitles  | The list titles. Defaults to ['Source', ['Target'] | string[] |
| buttonText  | The button titles. Defaults to ['Add', 'Remove'] | string[] |

GsTransferData
| Property  | Description | Type |
| ---- | ------------- | -------|
| key  | Item key | number |
| title  | Item title | string |
| checked  | Item checked state | boolean |
| disabled  | Item disabled state | boolean |

