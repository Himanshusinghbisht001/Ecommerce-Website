// gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline();

t1.from(".subheader p" , {
    opacity : 0 ,
    x : -100 , 
    duration : 1 , 
});

t1.from(".subheader .signs .sign" , {
    opacity : 0 , 
    y : -20 , 
    duration : 1 , 
    stagger : 0.2 ,
});

const t2 = gsap.timeline();

t2.from(".headerTextContainer h1" , {
   opacity : 0 ,
    x : -100 , 
    duration : 1 ,
});

t2.from(".headerTextContainer .navBar" , {
    opacity : 0 ,
    x : 200 , 
    duration : 1 , 
    stagger : 0.5 ,

});

t2.from(".mainLeftHeading p" , {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.3 
});

t2.from(".mainLeftHeading h1" , {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3 
});

gsap.from(".mainRight img" , {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 2 ,
    stagger: 0.3     
});