import { Component } from '@angular/core';
import { GsTransferData } from './components/transfer/transfer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-components';
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
