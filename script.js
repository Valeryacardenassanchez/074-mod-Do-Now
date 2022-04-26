


$("button").click(function() {
    let name = $(".question1").val();
    let faveMovie = $(".question2").val();
    let times = $(".question3").val();
    //Write code below!
   let total = times *8;
    $(".prediction").append(name + " your favorite movie is " + faveMovie + " and you will watch it " + times + " times.");

});