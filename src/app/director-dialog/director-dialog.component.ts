import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Dialog component for displaying director information
 * Shows director name, biography, and birth year
 */
@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrls: ['./director-dialog.component.scss']
})
export class DirectorDialogComponent implements OnInit {

  /**
   * Creates an instance of DirectorDialogComponent
   * @param data - Director information passed to the dialog
   * @param data.name - The director's name
   * @param data.bio - The director's biography
   * @param data.birthYear - The director's birth year
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      bio: string;
      birthYear: number;
    }
  ) { }

  /**
   * Angular lifecycle hook - runs after component initialization
   */
  ngOnInit(): void {
  }
}
