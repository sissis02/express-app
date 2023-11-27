const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];


const getFavoriteMovie = (req, res) => {
    res.send('Welcome to my favorite movie list'); 
}; 

app.get("/", getFavoriteMovie); 


const getMoviesList = (req, res) => {
    res.status(200).json(movies);
}

app.get("/api/movies", getMoviesList); 


const getFilmById = (req, res) => {
    for (let i = 0; i < movies.length; i++) {
        if (req.params.id == movies[i].id) {
            res.status(200).json(movies[i].title); 
        } 
    };
    res.status(404).send('Not found'); 
};

app.get("/api/movies/:id", getFilmById); 


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});



