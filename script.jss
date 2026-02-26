const API_KEY = "237b7e6e406742a2a982207a1d4169ff";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

window.onload = function () {
    getTrendingMovies();
};

function getTrendingMovies() {
    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => displayMovies(data.results));
}

function searchMovie() {
    const query = document.getElementById("search").value;

    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(res => res.json())
        .then(data => displayMovies(data.results));
}

function displayMovies(movies) {
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    movies.forEach(movie => {
        if (movie.poster_path) {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");

            movieDiv.innerHTML = `
                <img src="${IMG_URL + movie.poster_path}" />
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.vote_average}</p>
            `;

            moviesDiv.appendChild(movieDiv);
        }
    });
}
