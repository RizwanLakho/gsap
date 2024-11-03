var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var img = document.querySelector("#img")
 var textCursor =document.querySelector("h4")

 textCursor.style.display= "none";

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        
    })
})

img.addEventListener("mouseenter",function(){
    textCursor.style.display= "flex";

    gsap.to(cursor,{
        scale:2,
    })
 })

 img.addEventListener("mouseleave",function(){
    textCursor.style.display= "none";
    gsap.to(cursor,{
        scale:1,
    })
 })