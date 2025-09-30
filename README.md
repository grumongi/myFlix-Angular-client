# MyFlix Angular Client

A movie database application built with Angular and Angular Material, providing users with information about movies, directors, and genres. Users can register, log in, and manage their favorite movies.

## Live Demo

The application is deployed and available at: [https://grumongi.github.io/myFlix-Angular-client/](https://grumongi.github.io/myFlix-Angular-client/)

## Prerequisites

**Important: This project requires Node.js version 16.x for compatibility with Angular 10.**

### Install Node.js 16 using NVM:
```bash
nvm install 16
nvm use 16
```

Verify your Node.js version:
```bash
node --version  # Should show v16.x.x
```

## Features

- **User Authentication**: Register and login functionality
- **Movie Browsing**: View all movies in a responsive card layout
- **Movie Details**: View detailed information about movies, directors, and genres
- **Favorites Management**: Add/remove movies from favorites list
- **User Profile**: View and edit user profile information
- **Responsive Design**: Angular Material UI components with hover effects
- **Dialog Modals**: Interactive dialogs for movie details, genre info, and director bio

## Technology Stack

- **Frontend**: Angular 10.0.14
- **UI Framework**: Angular Material 10.2.7
- **Styling**: SCSS
- **HTTP Client**: Angular HttpClient
- **Authentication**: JWT tokens
- **Backend API**: Node.js/Express with MongoDB
- **Deployment**: GitHub Pages

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/grumongi/myFlix-Angular-client.git
cd myFlix-Angular-client
```

2. **Ensure you're using Node.js 16:**
```bash
nvm use 16
```

3. **Install dependencies:**
```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**Or run on port 1234:**
```bash
ng serve --port 1234
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```bash
ng build --prod
```

## Deployment

The app is configured for deployment to GitHub Pages:

```bash
ng build --prod --base-href=/myFlix-Angular-client/
npx angular-cli-ghpages --dir=dist/myFlix-Angular-client
```

## API Integration

This application connects to a custom movie API hosted at:
`https://cinema-center-api-2025-64a4a412d09b.herokuapp.com/`

### API Endpoints Used:
- `POST /users` - User registration
- `POST /login` - User authentication
- `GET /movies` - Fetch all movies
- `GET /users/:Username` - Get user profile
- `PUT /users/:Username` - Update user profile

## Project Structure

```
src/app/
├── components/
│   ├── welcome-page/
│   ├── user-registration-form/
│   ├── user-login-form/
│   ├── movie-card/
│   ├── user-profile/
│   ├── director-dialog/
│   ├── genre-dialog/
│   └── movie-details-dialog/
├── services/
│   └── fetch-api-data.service.ts
└── app-routing.module.ts
```

## Component Overview

- **WelcomePageComponent**: Landing page with login/register options
- **MovieCardComponent**: Displays movies in card layout with favorite functionality
- **UserRegistrationFormComponent**: User registration form
- **UserLoginFormComponent**: User authentication form
- **UserProfileComponent**: User profile management
- **Dialog Components**: Movie details, director info, and genre information modals

## Documentation

Generate TypeDoc documentation:

```bash
npm run docs
open docs/index.html
```

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Troubleshooting

### Node.js Version Issues
If you encounter build errors, ensure you're using Node.js 16:
```bash
nvm use 16
rm -rf node_modules package-lock.json
npm install
```

### CORS Issues
If you experience CORS errors during development, ensure your backend API allows requests from `http://localhost:4200` or `http://localhost:1234`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

Marie Muhire - [GitHub Profile](https://github.com/grumongi)

## License

This project was created as part of the CareerFoundry Full-Stack Web Development program.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.
