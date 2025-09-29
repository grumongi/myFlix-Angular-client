import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any = {};

  constructor(
    private fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.user = resp;
    });
  }

  saveProfile(): void {
    this.fetchApiData.editUser(this.user).subscribe((resp: any) => {
      this.snackBar.open('Profile updated!', 'OK', { duration: 2000 });
    });
  }
}
