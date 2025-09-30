import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Component for displaying detailed movie information in a dialog
 * @example
 * ```typescript
 * this.dialog.open(MovieDetailsDialogComponent, {
 *   data: { title: 'Movie Title', description: 'Movie description' }
 * });
 * ```
 */
@Component({
  selector: 'app-movie-details-dialog',
  templateUrl: './movie-details-dialog.component.html',
  styleUrls: ['./movie-details-dialog.component.scss']
})
export class MovieDetailsDialogComponent implements OnInit {

  /**
   * Creates an instance of MovieDetailsDialogComponent
   * @param data - The movie data passed to the dialog
   * @param data.title - The movie title
   * @param data.description - The movie description
   * @param data.director - The movie director information
   * @param data.genre - The movie genre information
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      description: string;
      director: { name: string };
      genre: { name: string };
    }
  ) { }

  /**
   * Angular lifecycle hook - runs after component initialization
   */
  ngOnInit(): void {
  }
}
