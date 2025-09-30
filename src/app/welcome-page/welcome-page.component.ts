import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * Welcome page component that serves as the landing page
 * Provides options for user registration and login via dialogs
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  /**
   * Creates an instance of WelcomePageComponent
   * @param dialog - Angular Material dialog service for opening modals
   */
  constructor(public dialog: MatDialog) { }

  /**
   * Angular lifecycle hook - runs after component initialization
   */
  ngOnInit(): void {
  }

  /**
   * Opens the user registration dialog modal
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the user login dialog modal
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }
}