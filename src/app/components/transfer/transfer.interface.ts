export interface GsTransferData {
  key: number;
  title: string;
  checked: boolean;
  disabled: boolean;
}

export interface CheckboxGroupChange {
  direction: 'left' | 'right';
  list: GsTransferData[];
}

export interface SelectedItemList {
  sourceList: GsTransferData[];
  targetList: GsTransferData[];
}