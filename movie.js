const APIKEY = "94e963c18f8ddefe1adcdf5a288e8ebd";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

// 1. get data from URL
// 2. And Then the data's name is response
// 3. Change to JSON type
// 4. console
const now_playingURL =
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=" +
  APIKEY +
  "&language=en-US&page=1";
const now_playing = document.getElementById("now-playing");
fetch(now_playingURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      // console.log(element.backdrop_path);
      // console.log(element.name);
      // console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

      let name = document.createElement("h4");
      name.innerText = element.name;
      let rate = document.createElement("span");
      rate.innerText = "SCORE: " + element.vote_average;

      moviediv.appendChild(backdrop);
      moviediv.appendChild(name);
      moviediv.appendChild(rate);

      movie.appendChild(moviediv);
      now_playing.appendChild(movie);
    });
  });

//2
const top_ratedURL =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=" +
  APIKEY +
  "&language=en-US&page=1";
const top_rated = document.getElementById("top-rated");
fetch(top_ratedURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      // console.log(element.backdrop_path);
      // console.log(element.name);
      // console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

      let name = document.createElement("h4");
      name.innerText = element.name;
      let rate = document.createElement("span");
      rate.innerText = "SCORE: " + element.vote_average;

      moviediv.appendChild(backdrop);
      moviediv.appendChild(name);
      moviediv.appendChild(rate);

      movie.appendChild(moviediv);
      top_rated.appendChild(movie);
    });
  });
//3
const upcomingURL =
  "https://api.themoviedb.org/3/tv/airing_today?api_key=" +
  APIKEY +
  "&language=en-US&page=1";
const upcoming = document.getElementById("upcoming");
fetch(upcomingURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      // console.log(element.backdrop_path);
      // console.log(element.name);
      // console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

      let name = document.createElement("h4");
      name.innerText = element.name;
      let rate = document.createElement("span");
      rate.innerText = "SCORE: " + element.vote_average;

      moviediv.appendChild(backdrop);
      moviediv.appendChild(name);
      moviediv.appendChild(rate);

      movie.appendChild(moviediv);
      upcoming.appendChild(movie);
    });
  });

//4
const popularURL =
  "https://api.themoviedb.org/3/tv/latest?api_key=" +
  APIKEY +
  "&language=en-US";
const popular = document.getElementById("popular");
fetch(popularURL, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.name);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);

      let name = document.createElement("h4");
      name.innerText = element.name;
      let rate = document.createElement("span");
      rate.innerText = "SCORE: " + element.vote_average;

      moviediv.appendChild(backdrop);
      moviediv.appendChild(name);
      moviediv.appendChild(rate);

      movie.appendChild(moviediv);
      popular.appendChild(movie);
    });
  });
