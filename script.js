const API_KEY = "237b7e6e406742a2a982207a1d4169ff";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Load trending movies when page opens
window.onload = function () {
    loadTrending();
};

function loadTrending() {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(error => console.log("Error:", error));
}

function searchMovie() {
    const query = document.getElementById("search").value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(error => console.log("Error:", error));
}

function displayMovies(movies) {
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    if (!movies) return;

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
