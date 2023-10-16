import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { GsTransferData } from './transfer.interface';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @Input() public height: number = 300;
  @Input() public width: number = 500;
  @Input() public buttonText: string[] = ['Add', 'Remove'];
  @Input() public leftRenderList: TemplateRef<any> | undefined;
  @Input() public leftListData: GsTransferData[] = [];
  @Input() public rightListData: GsTransferData[] = [];


  constructor() {
    for(let i=0; i<10; i++) {
      this.leftListData.push({
        key: i + 1,
        title: 'item' + String(i + 1),
        checked: i < 5 ? true : false
      });
      this.rightListData.push({
        key: i + 1,
        title: 'item' + String(i + 1),
        checked: i < 5 ? true : false
      });
    }
  }

  ngOnInit() {
     
  }
}
