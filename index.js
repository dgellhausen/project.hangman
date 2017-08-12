$(document).ready(function() {
  $("#object2, #object3, #object4, #object5, #object6, #object7, #object8").hide()
var abool = true;
var bbool = true;
var cbool = true;
var dbool = true;
var ebool = true;
var fbool = true;
var gbool = true;
var hbool = true;
var ibool = true;
var jbool = true;
var kbool = true;
var lbool = true;
var mbool = true;
var nbool = true;
var obool = true;
var pbool= true;
var qbool = true;
var rbool = true;
var sbool = true;
var tbool = true;
var ubool = true;
var vbool = true;
var wbool = true;
var xbool = true;
var ybool = true;
var zbool = true;
var win = 0;
var userchoice = [];
var wrongChoice = 0;
var cssMan = ["#object2", "#object3", "#object4", "#object5", "#object6", "#object7", "#object8"]

var word;
var words = ['pantry', 'beast', 'computer', 'spaghetti', 'library'];
var wordselected = words[Math.floor(Math.random()*5)];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
       'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lives = 10;



if(wordselected == "pantry"){
  word=['p', 'a', 'n', 't', 'r', 'y'];
  if(win == word.length){
    alert("youw win");
  }
}else if(wordselected == "beast"){
  word=['b', 'e', 'a', 's', 't'];
}else if(wordselected == "computer"){
   word=['c', 'o', 'm', 'p', 'u', 't', 'e', 'r'];
}else if(wordselected == "spaghetti"){
  word=['s', 'p', 'a', 'g', 'h', 'e', 't', 't', 'i'];
}else if(wordselected == "library"){
  word=['l', 'i', 'b', 'r', 'a', 'r', 'y'];
}


function loselives(){
  lives = lives - 1;
  $( "#amountlives" ).empty();
  $( "#amountlives" ).append("Lives: " + lives);
  $("#object8j").show()
  if(lives == 0){
    alert("Game Over");
  }
}


function winner() {
for (var i = 0; i < userchoice.length; i++) {
  if (userchoice.length === word.length) {
    alert("winner");
    return window.location.reload();
    }
  }
}

function showcssman() {

}


$( "#amountlives" ).append("Lives: " + lives);

// $( "#message-board" ).append(`<li class='message-box'><span class='name'> `+ name+ `: </span>`+message+`</li>`);
//   });
//
// });

//$(".flex-container").append(`<div id='item1' class='flex-item'><h3 id='item10'><center>`+ alphabet[0] +`</center></h3></div>`);
// for(var i = 0; i < alphabet.length; i++ ) {
//     console.log('<div class="div">' + alphabet[i])
// }


  for (var i = 0; i < word.length; i++) {
    $(".flex-container").append(`<div class = `+word[i]+` id='flex-item'><h3 class='item10'><center>`+ word[i] +`</center></h3></div>`);
    // console.log(word.length);
     completedWord = word.length;
  }

console.log("this is completeWord " + completedWord);
console.log("this is word " + word);
console.log("this is userchoice " + userchoice);



  $( "#buttona" ).click(function() {
    if(abool === true){
    $( ".a" ).css( "color", "black" );
    userchoice.push('a')
    console.log(userchoice);
    winner()
    if (!word.includes("a")) {
      loselives()
    $(".wordsused").append(`<h3><center>A</center></h3>`);
  }else if (word.includes("a")){
    win + 1;
  }
    else if(abool === false){
      return null;
    }
    abool = false;
  }
});
  $( "#buttonb" ).click(function() {
    if(bbool === true){
    $( ".b" ).css( "color", "black" );
    userchoice.push('b')
    console.log(userchoice);
    winner();
    if (!word.includes("b")) {
      loselives();
      $(".wordsused").append(`<h3><center>B</center></h3>`);
    }else if (word.includes("b")){
      win + 1;
    }

    else if(bbool === false){
      return null;
    }
    bbool = false;
  }
});
  $( "#buttonc" ).click(function() {
    if(cbool === true){
    $( ".c" ).css( "color", "black" );
    userchoice.push('c')
    console.log(userchoice);
    winner()
    if (!word.includes("c")) {
      loselives();
      $(".wordsused").append(`<h3><center>C</center></h3>`);
    }else if (word.includes("c")){
      win + 1;
    }
    cbool = false;
  }else if(cbool === false){
    return null;
  }

});
  $( "#buttond" ).click(function() {
    if(dbool === true){
    $( ".d" ).css( "color", "black" );
    userchoice.push('d')
    console.log(userchoice);
    winner()
    if (!word.includes("d")) {
      loselives();
      $(".wordsused").append(`<h3><center>D</center></h3>`);
    }else if (word.includes("d")){
      win + 1;
    }
    dbool = false;
  }else if(dbool === false){
    return null;
  }
});
  $( "#buttone" ).click(function() {
    if(ebool === true){
    $( ".e" ).css( "color", "black" );
    userchoice.push('e')
    console.log(userchoice);
    winner()
    if (!word.includes("e")) {
      loselives();
      $(".wordsused").append(`<h3><center>E</center></h3>`);
    }else if (word.includes("e")){
      win + 1;
    }
    ebool = false;
  }else if(ebool === false){
    return null;
  }
});
  $( "#buttonf" ).click(function() {
    if(fbool === true){
    $( ".f" ).css( "color", "black" );
    if (!word.includes("f")) {
      loselives();
      $(".wordsused").append(`<h3><center>F</center></h3>`);
    }else if (word.includes("f")){
      win + 1;
    }
    fbool = false;
  }else if(fbool === false){
    return null;
  }
});
  $( "#buttong" ).click(function() {
    if(gbool === true){
    $( ".g" ).css( "color", "black" );
    if (!word.includes("g")) {
      loselives();
      $(".wordsused").append(`<h3><center>G</center></h3>`);
    }else if (word.includes("g")){
      win + 1;
    }
    gbool = false;
  }else if(gbool === false){
    return null;
  }
});
  $( "#buttonh" ).click(function() {
    if(hbool === true){
    $( ".h" ).css( "color", "black" );
    if (!word.includes("h")) {
      loselives();
      $(".wordsused").append(`<h3><center>H</center></h3>`);
    }else if (word.includes("h")){
      win + 1;
    }
    hbool = false;
  }else if(hbool === false){
    return null;
  }
});
  $( "#buttoni" ).click(function() {
    if(ibool === true){
    $( ".i" ).css( "color", "black" );
    if (!word.includes("i")) {
      loselives();
      $(".wordsused").append(`<h3><center>I</center></h3>`);
    }else if (word.includes("i")){
      win + 1;
    }
    ibool = false;
  }else if(ibool === false){
    return null;
  }
});
  $( "#buttonj" ).click(function() {
    if(jbool === true){
    $( ".j" ).css( "color", "black" );
    if (!word.includes("j")) {
      loselives();
      $(".wordsused").append(`<h3><center>J</center></h3>`);
    }else if (word.includes("j")){
      win + 1;
    }
    jbool = false;
  }else if(jbool === false){
    return null;
  }
});
  $( "#buttonk" ).click(function() {
    if(kbool === true){
    $( ".k" ).css( "color", "black" );
    if (!word.includes("k")) {
      loselives();
      $(".wordsused").append(`<h3><center>K</center></h3>`);
    }else if (word.includes("k")){
      win + 1;
    }
    kbool = false;
  }else if(kbool === false){
    return null;
  }
});
  $( "#buttonl" ).click(function() {
    if(lbool === true){
    $( ".l" ).css( "color", "black" );
    if (!word.includes("l")) {
      loselives();
      $(".wordsused").append(`<h3><center>L</center></h3>`);
    }else if (word.includes("l")){
      win + 1;
    }
    lbool = false;
  }else if(lbool === false){
    return null;
  }
});
  $( "#buttonm" ).click(function() {
    if(mbool === true){
    $( ".m" ).css( "color", "black" );
    if (!word.includes("m")) {
      loselives();
      $(".wordsused").append(`<h3><center>M</center></h3>`);
    }else if (word.includes("m")){
      win + 1;
    }
    mbool = false;
  }else if(mbool === false){
    return null;
  }
});
  $( "#buttonn" ).click(function() {
    if(nbool === true){
    $( ".n" ).css( "color", "black" );
    if (!word.includes("n")) {
      loselives();
      $(".wordsused").append(`<h3><center>N</center></h3>`);
    }else if (word.includes("n")){
      win + 1;
    }
    nbool = false;
  }else if(nbool === false){
    return null;
  }
});
  $( "#buttono" ).click(function() {
    if(obool === true){
    $( ".o" ).css( "color", "black" );
    if (!word.includes("o")) {
      loselives();
      $(".wordsused").append(`<h3><center>O</center></h3>`);
    }else if (word.includes("o")){
      win + 1;
    }
    obool = false;
  }else if(obool === false){
    return null;
  }
});
  $( "#buttonp" ).click(function() {
    if(pbool === true){
    $( ".p" ).css( "color", "black" );
    if (!word.includes("p")) {
      loselives();
      $(".wordsused").append(`<h3><center>P</center></h3>`);
    }else if (word.includes("p")){
      win + 1;
    }
    pbool = false;
  }else if(pbool === false){
    return null;
  }
});
  $( "#buttonq" ).click(function() {
    if(qbool === true){
    $( ".q" ).css( "color", "black" );
    if (!word.includes("q")) {
      loselives();
      $(".wordsused").append(`<h3><center>Q</center></h3>`);
    }else if (word.includes("q")){
      win + 1;
    }
    qbool = false;
  }else if(qbool === false){
    return null;
  }
});
  $( "#buttonr" ).click(function() {
    if(rbool === true){
    $( ".r" ).css( "color", "black" );
    if (!word.includes("r")) {
      loselives();
      $(".wordsused").append(`<h3><center>R</center></h3>`);
    }else if (word.includes("r")){
      win + 1;
    }
    rbool = false;
  }else if(rbool === false){
    return null;
  }
});
  $( "#buttons" ).click(function() {
    if(sbool === true){
    $( ".s" ).css( "color", "black" );
    userchoice.push('s')
    console.log(userchoice);
    winner()
    if (!word.includes("s")) {
      loselives();
      $(".wordsused").append(`<h3><center>S</center></h3>`);
    }else if (word.includes("s")){
      win + 1;
    }
    sbool = false;
  }else if(sbool === false){
    return null;
  }
});
  $( "#buttont" ).click(function() {
    if(tbool === true){
    $( ".t" ).css( "color", "black" );
    userchoice.push('t')
    console.log(userchoice);
    winner()
    if (!word.includes("t")) {
      loselives();
      $(".wordsused").append(`<h3><center>T</center></h3>`);
    }else if (word.includes("t")){
      win + 1;
    }
    tbool = false;
  }else if(tbool === false){
    return null;
  }
});
  $( "#buttonu" ).click(function() {
    if(ubool === true){
    $( ".u" ).css( "color", "black" );
    if (!word.includes("u")) {
      loselives();
      $(".wordsused").append(`<h3><center>U</center></h3>`);
    }else if (word.includes("u")){
      win + 1;
    }
    ubool = false;
  }else if(ubool === false){
    return null;
  }
});
  $( "#buttonv" ).click(function() {
    if(vbool === true){
    $( ".v" ).css( "color", "black" );
    if (!word.includes("v")) {
      loselives();
      $(".wordsused").append(`<h3><center>V</center></h3>`);
    }else if (word.includes("v")){
      win + 1;
    }
    vbool = false;
  }else if(vbool === false){
    return null;
  }
});
  $( "#buttonw" ).click(function() {
    if(wbool === true){
    $( ".w" ).css( "color", "black" );
    if (!word.includes("w")) {
      loselives();
      $(".wordsused").append(`<h3><center>W</center></h3>`);
    }else if (word.includes("w")){
      win + 1;
    }
    wbool = false;
  }else if(wbool === false){
    return null;
  }
});
  $( "#buttonx" ).click(function() {
    if(xbool === true){
    $( ".x" ).css( "color", "black" );
    if (!word.includes("c")) {
      loselives();
      $(".wordsused").append(`<h3><center>X</center></h3>`);
    }else if (word.includes("x")){
      win + 1;
    }
    xbool = false;
  }else if(xbool === false){
    return null;
  }
});
  $( "#buttony" ).click(function() {
    if(ybool === true){
    $( ".y" ).css( "color", "black" );
    if (!word.includes("y")) {
      loselives();
      $(".wordsused").append(`<h3><center>Y</center></h3>`);
    }else if (word.includes("y")){
      win + 1;
    }
    ybool = false;
  }else if(ybool === false){
    return null;
  }
});
  $( "#buttonz" ).click(function() {
    if(zbool === true){
    $( ".z" ).css( "color", "black" );
    if (!word.includes("z")) {
      loselives();
      $(".wordsused").append(`<h3><center>Z</center></h3>`);
    }else if (word.includes("z")){
      win + 1;
    }
    zbool = false;
  }else if(zbool === false){
    return null;
  }
});



});
