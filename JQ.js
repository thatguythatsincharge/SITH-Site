$(document).ready(function(){
    // for movie_single.ejs
    (.characterItem).hover(function(){
        $(this)document.getElementById("characterList").append('<iframe id="preveiwFrame" src="<%= currentMovie.character_links[i] %>" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>');
    }, function(){
        $(this).remove("preveiwFrame");
    });
});
