import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperationConfirmationDialogData } from './operation-confirmation-dialog-data';

@Component({
  selector: 'c3r-operation-confirmation-dialog',
  templateUrl: './operation-confirmation-dialog.component.html',
  styleUrls: ['./operation-confirmation-dialog.component.scss']
})
export class OperationConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<OperationConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OperationConfirmationDialogData,
  ) {}

  onYesClick()
  {
    if (this.data.onYesClick)
      this.data.onYesClick();
  }

  onNoClick()
  {
    if (this.data.onNoClick)
      this.data.onNoClick();
  }
}
