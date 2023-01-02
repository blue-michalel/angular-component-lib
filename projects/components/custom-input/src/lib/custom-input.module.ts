import { NgModule } from '@angular/core';
import { CustomInputComponent } from './custom-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomInputComponent],
  imports: [CommonModule],
  exports: [CustomInputComponent],
})
export class CustomInputModule {}
