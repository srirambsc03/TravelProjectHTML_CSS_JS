let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () =>{
  themeBtn.classList.toggle('fa-sun');

  if( themeBtn.classList.toggle('fas-sun')){
    document.body.classList.add('active');
  }
  else{
    document.body.classList.remove('active');
  }

}

// Words Starting..


var headersToAnimate = ["Hello Guys, Welcome to my website  🤩", "Best Website for Travel 😍", "How is My Travel Project 🥰"];
var startReversAnimationAfter = 500; //ms

function reverseAnimation(headerIndex){
  var i = headersToAnimate[headerIndex].length -1, delay = 0;
  for (; i >= 0 ; i--, delay++) {
    let string = headersToAnimate[headerIndex].substr(0, i);
    setTimeout('document.getElementById("Header").innerHTML = \'' + string + '\';', 100 * delay);
  }
  
   setTimeout(function(){ animateHeaders(headerIndex + 1)}, 100 * delay + startReversAnimationAfter);
}
function animateHeaders(headerIndex){
  var i =0;
  if(headerIndex ==  headersToAnimate.length){
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    let string = headersToAnimate[headerIndex][i]
    setTimeout('document.getElementById("Header").innerHTML += \'' + string + '\';', 100 * i);
  }
 
 setTimeout(function(){ reverseAnimation(headerIndex)}, 100 * i + startReversAnimationAfter);
}

animateHeaders(0)