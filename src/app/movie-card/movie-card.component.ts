import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { MovieDetailsDialogComponent } from '../movie-details-dialog/movie-details-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Method to fetch all movies
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Checks if a movie is a favorite
   * @param movieId ID of the movie to check
   * @returns True if the movie is a favorite, false otherwise
   */
  isFavorite(movieId: string): boolean {
    // Implement your logic here, for now just return false
    return false;
  }

  /**
   * Handler to add a movie to user favorites or to remove it
   * @param movieId The movie id to add or remove from or to favorites
   */
  handleFavorite(movieId: string): void {
    // Implement your logic here
    console.log('Favorite clicked:', movieId);
  }

  /**
   * Method to open the dialog with informations about a director
   * @param director The director informations object
   */
  openDirectorDialog(director: any): void {
    this.dialog.open(DirectorDialogComponent, {
      data: director,
      width: '400px',
    });
  }

  /**
   * Method to open the dialog with informations about a genre
   * @param genre The genre informations object
   */
  openGenreDialog(genre: any): void {
    this.dialog.open(GenreDialogComponent, {
      data: genre,
      width: '400px',
    });
  }

  /**
   * Method to open the dialog with informations about a movie
   * @param movie The movie informations object
   */
  openMovieDetailsDialog(movie: any): void {
    this.dialog.open(MovieDetailsDialogComponent, {
      data: movie,
      width: '400px',
    });
  }
}