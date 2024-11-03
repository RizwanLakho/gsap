

function page1Animation() {


var tl= gsap.timeline()


tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.15,
})
tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5,

})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5,

})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.5")
tl.from(".centerp2 img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})

    
}

function page2Animation() {
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:'body',
     
        start:"top 50%",
        end:'top -50%',
        scrub:2
    }
})

tl2.from(".services",{
   y:30,
    opacity:0,
   
})
tl2.from(".elem.left",{
    x:-300,
    opacity:0,
},"anim")

tl2.from(".elem.right",{
    x:300,
    opacity:0,
},"anim")
tl2.from(".elem.left1",{
    x:-300,
    opacity:0,
},"anim1")

tl2.from(".elem.right1",{
    x:300,
    opacity:0,
},"anim1")
}

page1Animation();
page2Animation();

