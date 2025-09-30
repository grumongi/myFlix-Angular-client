import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Dialog component for displaying genre information
 * Shows genre name and description
 */
@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrls: ['./genre-dialog.component.scss']
})
export class GenreDialogComponent implements OnInit {

  /**
   * Creates an instance of GenreDialogComponent
   * @param data - Genre information passed to the dialog
   * @param data.name - The genre name
   * @param data.description - The genre description
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      description: string;
    }
  ) { }

  /**
   * Angular lifecycle hook - runs after component initialization
   */
  ngOnInit(): void {
  }
}
