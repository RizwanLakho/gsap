window.addEventListener("wheel",function(dats)
{
   if(dats.deltaY>0){
    gsap.to(".marque",{
        Transform:"translateX(-200%)",
        duration:4,
        repeat:-1,
        ease:"none"
    })
    gsap.to(".marque img",{
        rotate:180,
       })
   }
   else{
    gsap.to(".marque",{
        Transform:"translateX(0%)",
        duration:4,
        repeat:-1,
        ease:"none"
    })
    gsap.to(".marque img",{
        rotate:0,
    })
   }
}) 


