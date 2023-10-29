import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CheckboxGroupChange, GsTransferData } from './transfer.interface';

@Component({
  selector: 'gs-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @Input() public height: number = 300;
  @Input() public width: number = 500;
  @Input() public listTitle: string[] = ['Source', 'Target'];
  @Input() public buttonText: string[] = ['Add', 'Remove'];
  @Input() public leftRenderList: TemplateRef<any> | undefined;
  @Input() public leftListData: GsTransferData[] = [];
  @Input() public rightListData: GsTransferData[] = [];

  constructor() {
    for(let i=0; i<10; i++) {
      this.leftListData.push({
        key: i + 1,
        title: 'item' + String(i + 1),
        checked: i < 5,
        disabled: i % 2 === 1 
      });
      this.rightListData.push({
        key: i + 1,
        title: 'item' + String(i + 1),
        checked: i < 5 ? true : false,
        disabled: i % 2 === 0
      });
    }
  }

  ngOnInit() { }

  public onCheckboxGroupChange(checkBoxGroup: CheckboxGroupChange) {
    console.log(checkBoxGroup);
  }
}
