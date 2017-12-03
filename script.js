//Create an array of movie objects that consist of a title, rating and Boolean value based on whether the movie was watched. The information for each movie object will be printed.

var movies = [
    {
        title: "Lean On Me",
        rating: 7.4,
        hasWatched: true  
    },
    {
        title: "Home Alone",
        rating: 7.5,
        hasWatched: true
    },
    {
        title: "Independence Day: Resurgence",
        rating: 5.3,
        hasWatched: false
    }
];  

//Following to be refactored; not DRY but works
for(var i = 0; i < movies.length; i++){
    var result = "I have ";
    if(movies[i].hasWatched === true){
        result += "watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars";
        console.log(result);
    } else {
        result += "not watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars";
        console.log(result);
    }
}