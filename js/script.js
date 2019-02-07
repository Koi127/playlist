/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var song = ["起风了","山外小楼夜听雨","浪人琵琶","假装"];

// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_link=[];
var length=[];
var link=["https://www.youtube.com/embed/PRwVQfeYfkQ","https://www.youtube.com/embed/4kE5G3ZCYL0","https://www.youtube.com/embed/sbmzhqjZ-_k","https://www.youtube.com/embed/V3pV9OiWwQ0"];
var artist=[];




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
song.forEach(function(songs) {
    $("#songs").append(songs+"<br>");
});
images_link.forEach(function(image_links) {
    $("#images").append("<img src=' " + images_link + " '> <br>");
});
length.forEach(function(lengths) {
    $("#lengths").append(lengths+"<br>");
});
link.forEach(function(links) {
    $("#links").append('<iframe src="'+links+'"></iframe>'+"<br>");
});
artist.forEach(function(artists) {
    $("#artists").append(artists+"<br>");
});


function emptySongInfo(){
    // Use jQuery to empty all of the remaining divs
    $(".column").empty();


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $("#add").click(function(){
        let songInput=$("#song").val();
        let imageInput=$("#image").val();
        let lengthInput=$("#length").val();
        let linkInput=$("#link").val();
        let artistInput=$("#artist").val();
        song.push(songInput);
        images_link.push(imageInput);
        length.push(lengthInput);
        link.push(linkInput);
        artist.push(artistInput);
        console.log(song);
        
    });
}

function displaySongInfo(){
    song.forEach(function(songs) {
        $("#songs").append(songs+"<br>");
    });
    images_link.forEach(function(image_links) {
        $("#images").append(image_links+"<br>");
    });
    length.forEach(function(lengths) {
        $("#lengths").append(lengths+"<br>");
    });
    link.forEach(function(links) {
        $("#links").append('<iframe src="'+links+'"></iframe>'+"<br>");
    });
    artist.forEach(function(artists) {
        $("#artists").append(artists+"<br>");
    });
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    $("input").val('');
});

displaySongInfo();
