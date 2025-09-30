import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Component for displaying and editing user profile information
 * Allows users to view and update their personal details
 * @example
 * ```html
 * <app-user-profile></app-user-profile>
 * ```
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  /** User profile data object */
  user: any = {};

  constructor(
    private fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  /**
   * Retrieves the current user's profile information from the API
   */
  getUserProfile(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.user = resp;
    });
  }

  /**
   * Saves the updated user profile information to the API
   * Shows a success message via snackbar on completion
   */
  saveProfile(): void {
    this.fetchApiData.editUser(this.user).subscribe((resp: any) => {
      this.snackBar.open('Profile updated!', 'OK', { duration: 2000 });
    });
  }
}
