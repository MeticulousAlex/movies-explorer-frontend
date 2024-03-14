# Movie-explorer (frontend) ![Static Badge](https://img.shields.io/badge/version-1.0-green)


## Technologies
- JS
- HTML
- CSS
- Webpack
- ReactJS
- OOP
- BEM 

## Features

- User registration and login
- Validation of forms
- Mobile/Tablet/Desktop compability
- Data is fetched from third-party and my own APIs
- Film search of 100 films through the search-bar
- Save/remove films from favorite
- Preview of the film is shown, as the film cover is clicked

## Documentation

### Register/Login

In order to access the service and user's or enter an account management page, account must be created first, otherwise navigational links won't display.

To create an account click **Register** on the main page in the top-right corner. On the page that opens, fill in your credentials (name, email, password) and submit the form or click the link below the form and authorize if you already have one.

After authorization you will be redirected to the movie-search service.

User is automatically authorized using cookies during the week after the last login/registration.

### Movie-search

If it is the first time you authorize yourself the film list will be blank until the first search through the search-bar, you can also toggle the ***short-films*** button to search only for films with duration under 60min for your current query.

The following times you visit the service, your previous query will be filled in the search-bar and query settings will be restored as well as the films found by this query will be displayed below.

### Like/Dislike films

On the page ***movie-search*** there are like buttons at each of the found film-cards which, when clicked, add chosen film to the ***favorite films*** page or remove when clicked once more.

### Favorite films

This page presents all of user's saved films. There is also implemented a search-bar to find specific films from saved ones. The film-cards of a ***favorite films*** page have a remove button instead of like button, which removes the a chosen film from your favorites.

### Account management

Account is accessed through the button in the top-right corner (desktop) or in the bottom of the side menu (mobile/tablet). 

On the account page user can log-out or change email and username.

## Project Links

- Movies-explorer service: https://alex.movie-explorer.nomoredomainsmonster.ru
- Back-end part of this project: https://github.com/MeticulousAlex/movies-explorer-api

## Feedback

If you found this project interesting or you have any comments, feel free to write me back to aleksandr.smelov.web@gmail.com. 

