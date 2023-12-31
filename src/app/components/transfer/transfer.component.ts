import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { GsSelectedItemList, GsCheckboxGroupChange, GsTransferData } from './transfer.interface';

@Component({
  selector: 'gs-transfer',
  template: `
    <div
      class="taransfer-main-div"
      [style.height.px]="height"
      [style.width.px]="width"
    >
      <gs-transfer-list
        [height]="height"
        [title]="listTitles[0]"
        [listDirection]="'left'"
        [itemList]="leftListData"
        (onCheckBoxStateChange)="onCheckboxGroupChange($event)"
      ></gs-transfer-list>
      <div class="transfer-button-group">
        <button class="transfer-button" [disabled]="!selectedItemList.sourceList.length" (click)="transferLeftItems()">
          <span>{{ buttonText[0] }}</span>
          <span class="transfer-icon-right">></span>
        </button>
        <button class="transfer-button" [disabled]="!selectedItemList.targetList.length" (click)="transferRightItems()">
          <span class="transfer-icon-left"><</span>
          <span>{{ buttonText[1] }}</span>
        </button>
      </div>
      <gs-transfer-list
        [height]="height"
        [title]="listTitles[1]"
        [listDirection]="'right'"
        [itemList]="rightListData"
        (onCheckBoxStateChange)="onCheckboxGroupChange($event)"
      ></gs-transfer-list>
    </div>
  `,
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @Input() public height: number = 200;
  @Input() public width: number = 500;
  @Input() public listTitles: string[] = ['Source', 'Target'];
  @Input() public buttonText: string[] = ['Add', 'Remove'];
  @Input() public leftListData: GsTransferData[] = [];
  @Input() public rightListData: GsTransferData[] = [];
  public selectedItemList: GsSelectedItemList = { sourceList: [], targetList: [] };

  constructor() { }

  ngOnInit() { }

  public onCheckboxGroupChange(checkBoxGroup: GsCheckboxGroupChange) {
    console.log(checkBoxGroup);
    if(checkBoxGroup.direction === 'left') {
      this.selectedItemList.sourceList = checkBoxGroup.list;
    } else if(checkBoxGroup.direction === 'right') {
      this.selectedItemList.targetList = checkBoxGroup.list;
    }
  }

  public transferLeftItems() {
    this.selectedItemList.sourceList.map((item: GsTransferData) => item.checked = false);
    this.rightListData.push(...this.selectedItemList.sourceList);
    this.selectedItemList.sourceList.map((selectedItem: GsTransferData) => {
      let sliceIdx: number = this.leftListData.findIndex((sourceItem: GsTransferData) => (sourceItem === selectedItem));
      if(sliceIdx !== -1) this.leftListData.splice(sliceIdx, 1);
    })
    this.selectedItemList.sourceList = [];
  }
  
  public transferRightItems() {
    this.selectedItemList.targetList.map((item: GsTransferData) => item.checked = false);
    this.leftListData.push(...this.selectedItemList.targetList);
    this.selectedItemList.targetList.map((selectedItem: GsTransferData) => {
      let sliceIdx: number = this.rightListData.findIndex((sourceItem: GsTransferData) => (sourceItem === selectedItem));
      if(sliceIdx !== -1) this.rightListData.splice(sliceIdx, 1);
    })
    this.selectedItemList.targetList = [];
  }
}
