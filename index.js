Shery.mouseFollower();
Shery.makeMagnet('.magnet')

Shery.hoverWithMediaCircle('.hvr', { videos: ["./vids/vid-1.mp4", "./vids/vid-2.mp4", "./vids/vid-3.mp4"] });

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fleft-elem", {
    scrollTrigger: {
        trigger: ".fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power3
});


let sections = document.querySelectorAll('.fleft-elem')

Shery.imageEffect("#images", {
    style: 5,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: (prog) => {
                    setScroll(prog.progress + index)
                },
            })
        })
    },
});