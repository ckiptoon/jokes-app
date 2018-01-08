import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatDialogModule]
})
export class MaterialModule { }
