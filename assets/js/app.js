document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById("body").classList.toggle("overflow-hidden");
});






//completar
/*
var currentScroll = window.pageYOffset || document.body.scrolltop;
var lastScrollTop = 0;
window.addEventListener("color", function(){
  var currentS
croll = window.pageYOffset || document.body.scrolltop;
}, false);
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset || document.body.scrolltop;
  if (currentScroll > lastScrollTop){
    console.log("down");
  }else{
    console.log("up");
  }
  lastScrollTop = currentScroll;
})
*/
