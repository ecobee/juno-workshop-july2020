# Exercise 1: Building a movie card component

For our first exercise, you'll be building out a click-through movie details card component that displays additional information for a given film.

![movie details page](../docs/assets/movie_detail.png)

## Details

### User story

As developers, we're often presented with user stories that define the requirements for a new feature. Your user story is as follows:

**As a user, I would like to be able to click on a movie on the homepage and see a pop-up card with full movie details**

### Acceptance criteria

User stories typically come with a set of acceptance criteria, which should be met in order for the feature to be considered complete (but a reminder, you don't necessarily **have** to complete all of it for the purposes of our exercise). Your acceptance criteria for this feature is:

- [ ] On click of a movie card on the homepage, make a GET request to `GET /movie/{movie_id}` endpoint to get movie details ([documentation here](https://developers.themoviedb.org/3/movies/get-movie-details))
- [ ] Movie detail card component should display poster, release date, length, description, genre, title, rating, IMDb link
