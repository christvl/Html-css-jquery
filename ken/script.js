$( "#open" ).click(function() {
  document.getElementById("myNav").style.width = "100%";
});
$( "#close" ).click(function() {
   document.getElementById("myNav").style.width = "0%";
});

//Lightbox code
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>");
//add Image to overlay 
$overlay.append($image);

//add Overlay
    $("body").append($overlay)
  //add a caption
      $overlay.append($caption);
//Capture the click event on a link to an image
    $("#imageGallery a").click(function(event){
        event.preventDefault();
        var imageLocation = $(this).attr("href");
  //update overlay with the image linked in the link
      $image.attr("src", imageLocation );
      
      //Show the overlay.
       $overlay.show();
     //Get childs alt atribute and set caption
     var captionText = $(this).children("img").attr("alt");
      $caption.text(captionText);
  });
 
//When overlay is clicked
$overlay.click(function(){
  //hide overlay
  $(this).hide();
});
  