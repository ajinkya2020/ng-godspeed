import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CheckboxGroupChange, GsTransferData } from "./transfer.interface";

@Component({
  selector: 'gs-transfer-list',
  template: `
    <div class="transfer-list-div" [style.height.px]="height">
      <div class="transfer-list-title">
        {{ title }}
      </div>
      <div [style.height.px]="height - 33" class="transfer-list">
        <ul (change)="onCheckboxGroupChange()">
          <li *ngFor="let item of itemList">
            <input type="checkbox" [(ngModel)]="item.checked" [disabled]="item.disabled"/> {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./transfer.component.scss']
})
export class TransferListComponent {
  @Input() height: number = 300;
  @Input() title: string = '';
  @Input() listDirection: CheckboxGroupChange['direction'] = 'left';
  @Input() itemList: GsTransferData[] = [];
  @Output() onCheckBoxStateChange = new EventEmitter<CheckboxGroupChange>();

  constructor() { }

  ngOnInit() {
    this.onCheckboxGroupChange();
  }

  public onCheckboxGroupChange() {
    this.onCheckBoxStateChange.emit({
      direction: this.listDirection,
      list: this.itemList.filter((item: GsTransferData) => { return item.checked })
    });
  }
}