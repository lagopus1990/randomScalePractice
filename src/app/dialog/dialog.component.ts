import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}
}