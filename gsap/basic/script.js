var tl = gsap.timeline();


tl.from("#div1 .box",{
    x:-1000,
    opacity:0, 
    duration:2,
    rotate:360,
    ease:Power1.easeInOut,
    backgroundColor:"red"

})


tl.from("#div2 .box",
    {
        x:-1000,
        duration:1,
        scrollTrigger: {
            trigger: '#div2',
            pin: true, // pin the trigger element while active
            start: 'top top', // when the top of the trigger hits the top of the viewport
            end: '+=500', // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            snap: {
                snapTo: 'labels', // snap to the closest label in the timeline
                duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
            }
        }
    }
)


tl.from("#div3 .box",
    {
        x:-1000,
        duration:2,

    }
)
