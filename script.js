const API_KEY = "237b7e6e406742a2a982207a1d4169ff";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

window.onload = () => {
    loadTrending();
};

function loadTrending() {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);   // DEBUG
            displayMovies(data.results);
        })
        .catch(err => console.log("Error:", err));
}

function searchMovie() {
    const query = document.getElementById("search").value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(res => res.json())
        .then(data => displayMovies(data.results))
        .catch(err => console.log("Error:", err));
}

function displayMovies(movies) {
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    if (!movies) return;

    movies.forEach(movie => {
        if (movie.poster_path) {
            const div = document.createElement("div");
            div.classList.add("movie");

            div.innerHTML = `
                <img src="${IMG_URL}${movie.poster_path}">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.vote_average}</p>
            `;

            moviesDiv.appendChild(div);
        }
    });
}
