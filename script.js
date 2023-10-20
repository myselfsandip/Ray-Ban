// Animation on main

Shery.imageEffect("#back", {style: 5,config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"aspect":{"value":2.148190063788902},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey: true,})

// Animation on h1

let elems = document.querySelectorAll(".elem");
elems.forEach((elem)=>{
let h1s = elem.querySelectorAll("h1");
let index = 0;
let animating = false;
document.querySelector("#main").addEventListener("click",()=>{
    if(!animating){
        animating = true;
        gsap.to(h1s[index],{
            top:"-100%",
            ease: Expo.easeInOut,
            duration:1,
            onComplete:function(){
                gsap.set(this._targets[0],{
                    top:"100%"
                });
                animating = false;
            }
        });
        if(h1s.length-1===index){
            index=0;
        }else{
            index++;
        }
        gsap.to(h1s[index],{
            top:"-=100%",
            ease: Expo.easeInOut,
            duration:1
        });
    }
})
})
