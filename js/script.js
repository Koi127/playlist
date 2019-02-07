/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var song = ["起风了","山外小楼夜听雨","浪人琵琶","假装"];

// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_link=["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550131258&di=5248135fe0cd7af6192fa3e5596eee6a&imgtype=jpg&er=1&src=http%3A%2F%2Fp1.music.126.net%2Fiq4BV_8ek1o6x02DbQdcLQ%3D%3D%2F109951163321421723.jpg", 
                 "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549536592899&di=dfe0d5877eb96aa9e09323d17daf2775&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fd42cb307b3dc2a372f6d31b6d0f0d019c90b57a3.png",
                 "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1120717953,729915289&fm=26&gp=0.jpg",
                 "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549536733892&di=9733d8ff26c8993d025c46835ed55a21&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2017%2F09%2F11%2F2624020717320638471_320x320.jpg"
                    
                    
];
var length=["5.15","4.16","3.45","4.27"];
var link=["https://www.youtube.com/embed/PRwVQfeYfkQ",
          "https://www.youtube.com/embed/4kE5G3ZCYL0",
          "https://www.youtube.com/embed/sbmzhqjZ-_k",
          "https://www.youtube.com/embed/V3pV9OiWwQ0"
];
var artist=["买辣椒也用劵","任然","胡66","陈雪凝"];




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
// song.forEach(function(songs) {
//     $("#songs").append(songs+"<br>");
// });
// images_link.forEach(function(image_links) {
//     $("#images").append("<img src='"+images_link+"'><br>");
// });
// length.forEach(function(lengths) {
//     $("#lengths").append(lengths+"<br>");
// });
// link.forEach(function(links) {
//     $("#links").append('<iframe src="'+links+'"></iframe>'+"<br>");
// });
// artist.forEach(function(artists) {
//     $("#artists").append(artists+"<br>");
// });





function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.

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

}

function displaySongInfo(){
    song.forEach(function(songs) {
        $("#songs").append(songs+"<br><div class='space'></div>");
    });
    images_link.forEach(function(image_links) {
        $("#images").append("<img class='size' src='"+images_link+"'><br> <div class='big'></div>");
    });
    length.forEach(function(lengths) {
        $("#lengths").append(lengths+"<br><div class='space'></div>");
    });
    link.forEach(function(links) {
        $("#links").append('<iframe class="size" src="'+links+'"></iframe>'+"<br><div class='big'></div>");
    });
    artist.forEach(function(artists) {
        $("#artists").append(artists+"<br><div class='space'></div>");
    });
}

function emptySongInfo(){
    // Use jQuery to empty all of the remaining divs
    $(".column").empty();


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    $("input").val('');
});

displaySongInfo();
