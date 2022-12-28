// const Express= require("express")
// const app= new Express();



async  function mymovies()
{
  let movie=document.getElementById  ("search-movie").value
  let movieapi= await  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=a9b92193`);
  let moviesdata= await movieapi.json();
  let movies=moviesdata.Search;  
//    console.log(mymovies);

let divmovies=document.getElementById("movies");
for(const movie of movies) {
    divmovies.innerHTML+=
    `
     <div class="movie-details">
      <h5>${movie.Title.slice(0,20)}</h5>
     <img src=${movie.Poster} alt="">
     <h5>${movie.Year}</h5>
    </div>
   `
   
}
}

app.listen(1204)


