import { KeyValuePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'pi-snackbarpanel',
  templateUrl: './snackbarpanel.component.html',
  styleUrl: './snackbarpanel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, KeyValuePipe],
})
export class SnackbarPanelComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarPanelComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: ServerError,
  ) {}
}

export interface ServerError {
  title: string;
  errors: Map<string, string[]>;
}
