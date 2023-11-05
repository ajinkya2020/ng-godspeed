export interface GsTransferData {
  key: number;
  title: string;
  checked: boolean;
  disabled: boolean;
}

export interface GsCheckboxGroupChange {
  direction: 'left' | 'right';
  list: GsTransferData[];
}

export interface GsSelectedItemList {
  sourceList: GsTransferData[];
  targetList: GsTransferData[];
}