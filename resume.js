var section=document.querySelectorAll(" nav a");
var skill=document.querySelector(".my-skill");
var animationDone=false;

window.addEventListener("scroll",skillAnimation);
    
for(let x of section){
    if(x.id=="x" || x.id=="bar-icon"){
        continue;
    }
    x.addEventListener("click",scrollAnimation)
}

function skillAnimation(){
    if(skill.getBoundingClientRect().top>window.innerHeight){
        animationDone=false;
    }

    var coordinate=skill.getBoundingClientRect().top;
    if(!animationDone && coordinate<window.innerHeight){
        fillSkill();
        animationDone=true;
    }
}

function fillSkill(){
    var skills=document.querySelectorAll(".percent");
    for(let x of skills){
        let percent= x.getAttribute("data-per");
        let initialWidth=0;
        let skillInterval=setInterval(() => {
            if(initialWidth>percent){
                clearInterval(skillInterval);
                return;
            }
            initialWidth++;
            x.style.width=initialWidth+"%";
        }, 5);
        
    }
}





function scrollAnimation(e){
    e.preventDefault()
        let targetId= this.getAttribute("data-val");
        let target=document.querySelector(targetId)
        let targetbar=target.getBoundingClientRect().top;

        let interval=setInterval(function(){
            if(targetbar>0){
                if(targetbar <= 50){
                    clearInterval(interval)
                    return;
                }
                window.scrollBy(0,50);
                targetbar -= 50;
            }
            else{
                if(targetbar >= 50 ){
                    clearInterval(interval)
                    return;
                }
                targetbar += 50;
                window.scrollBy(0,-50);
            } 
            
        }, 50 );
}

