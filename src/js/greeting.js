window.addEventListener('load', () => {
    document.querySelector('.song').play();
    animationTimeline();
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("first")[0];
    // const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    // hbd.innerHTML = `<span>${hbd.innerHTML
    //     .split("")
    //     .join("</span><span>")}</span>`;

    // const ideaTextTrans = {
    //     opacity: 0,
    //     y: -20,
    //     rotationX: 5,
    //     skewX: "15deg"
    // }

    // const ideaTextTransLeave = {
    //     opacity: 0,
    //     y: 20,
    //     rotationY: 5,
    //     skewX: "-15deg"
    // }

    // timeline
    const tl = new TimelineMax();

    tl.to(".main_feature", 2, {
        visibility: "visible"
    })
    //sdf
    .from(".first", 2, {
        opacity: 0      
    })
    //3.5s pause, fade-out to opacity=0 by 0.7
    .to(".first", 0.7,{
        opacity: 0,
    }, "+=3.5")    
    .to(".first", 0, {
        display: "none"
    })

    .from(".second", 2, {
        opacity: 0,
        y: 10
    })
    .to(".second", 0.7, {
            opacity: 0,
            y: 10,
        }, "+=3.5"
    )
    .to(".second", 0.1, {
        display: "none"
    })

    //the sky looked like this .....
    .from(".third", 0.7, {
        opacity: 0,
        y: 10
    })
    
    .from(".fourth", 1, {
        // scale: 0.2,
        opacity: 0,
        rotation: 360,
    })
    .to(".third",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
     .to(".third", 0.1, {
         display: "none"
    })
    .to(".fourth", 0.7, {
            opacity: 0,
        }, "+=2"
    )
    .to(".fourth", 0.1, {
        display: "none"
    })

    .from(".fifth", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".sixth", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .to(".fifth",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .to(".sixth", 0.7, {
            opacity: 0,
            y: 10,
        }, "+=2"
    )
    .to(".fifth", 0.7, {
        display: "none"
    })
    .to(".sixth", 0.7, {
        display: "none"
    })

    .from(".seventh", 0.7, {
        opacity: 0,
        y: 10,
        visibility: "visible"
    })
    .from(".eigth", 0.6, {
        scale: 0.2,
        opacity: 0,
        visibility: "visible"
    })
    .to(".seventh", 0.7, {
            opacity: 0,
        }, "+=2"
    )
    .to(".seventh", 0.1, {
        display: "none"
    })
    .to(".eigth", 0.7, {
            opacity: 0,
        }, "+=2"
    )
    .to(".eigth", 0.1, {
        display: "none"
    })

    .from(".ninth", 0.7, {
        opacity: 0
    })
    .to(".ninth", 0.7, {
            opacity: 0,
            // y: 10,
        }, "+=3"
    )
    .to(".ninth", 0.1, {
        display: "none"
    })

    .from(".tenth", 0.7, {
        opacity: 0
    })
    .to(".tenth", 0.7, {
        display: "none"
    })
    .from(".eleven", 0.7, {
        opacity: 0
    })
    .from(".twelve", 0.7, {
        opacity: 0,
        visibility: "visible"
    })
    .to(".eleven", 0.7, {
            opacity: 0,
            // y: 10,
        }, "+=3"
    )
    .to(".eleven", 0.1, {
        display: "none"
    })
    .to(".twelve", 0.7, {
        display: "none"
    })
    .from(".thirteen", 0.7, {
        opacity: 0,
        y: 10
    })
    
    // Restart Animation on click
    // const replyBtn = document.getElementById("replay");
    // replyBtn.addEventListener("click", () => {
    //     tl.restart();
    //     // document.querySelector('.song').play();
    // });
}
