import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {
  result: string = 'Text from modal';

  constructor(public dialogRef: MatDialogRef<AddJokeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  OnCloseConfirm() {
    this.dialogRef.close(`Confirm with ${this.result}`);
  }

  OnCloseCancel() {
    this.dialogRef.close('Cancel');
  }

}
