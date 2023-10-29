export interface GsTransferData {
  key: number;
  title: string;
  checked: boolean;
  disabled: boolean;
}

export interface CheckboxGroupChange {
  direction: string; //left, right
  list: GsTransferData[];
}

export interface templateComponent {
  id: any;
  component: any;
}