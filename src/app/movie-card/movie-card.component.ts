import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { MovieDetailsDialogComponent } from '../movie-details-dialog/movie-details-dialog.component';

/**
 * Component for displaying movie cards in a grid layout
 * Shows movie information and provides buttons for genre, director, details, and favorites
 * @example
 * ```html
 * <app-movie-card></app-movie-card>
 * ```
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  /** Array of movie objects retrieved from the API */
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Fetches all movies from the API and stores them in the movies array
   * Called during component initialization
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Opens a dialog displaying genre information
   * @param genre - The genre object containing name and description
   */
  openGenreDialog(genre: any): void {
    this.dialog.open(GenreDialogComponent, {
      data: genre,
      width: '400px',
    });
  }

  /**
   * Opens a dialog displaying director information
   * @param director - The director object containing name, bio, and birth year
   */
  openDirectorDialog(director: any): void {
    this.dialog.open(DirectorDialogComponent, {
      data: director,
      width: '400px',
    });
  }

  /**
   * Opens a dialog displaying detailed movie information
   * @param movie - The complete movie object
   */
  openMovieDetailsDialog(movie: any): void {
    this.dialog.open(MovieDetailsDialogComponent, {
      data: movie,
      width: '400px',
    });
  }

  /**
   * Toggles a movie's favorite status for the current user
   * @param movieId - The unique identifier of the movie
   */
  handleFavorite(movieId: string): void {
    // Implement your logic here
    console.log('Favorite clicked:', movieId);
  }

  /**
   * Checks if a movie is in the user's favorites list
   * @param movieId - The unique identifier of the movie
   * @returns True if the movie is a favorite, false otherwise
   */
  isFavorite(movieId: string): boolean {
    // Implement your logic here, for now just return false
    return false;
  }
}