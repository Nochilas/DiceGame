$(".title").on("mouseover", function(){
    $(".title").css("color", "red");
    });
$(".title").on("mouseout", function(){
    $(".title").css("color", "white");
    });

//Click on button generates two random numbers
$("button").on("click", function(){
    var n1 = Math.floor(Math.random() * 6 + 1);
    var newPath1 = `images/dice${n1}.png`;
    var n2 = Math.floor(Math.random() * 6 + 1);
    var newPath2 = `images/dice${n2}.png`;

    //Change the src path of img1 and img2
    $(".diceimg1").attr("src", newPath1);    
    $(".diceimg2").attr("src", newPath2);

    //Check the bigger number and declare winner or draw
    if(n1 > n2)
    $(".title").text("Winner: 1");
    else if(n2 > n1)
    $(".title").text("Winner: 2");
    else
    $(".title").text("Draw");
})