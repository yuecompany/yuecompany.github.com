
function slide(){ 
    var oImg = document.getElementById("imgSlide");
    var timer1,timer2,timer3,tmp;
    clearInterval(timer1);
    timer1 = setInterval(function(){ 
        clearInterval(timer2);
        clearInterval( timer3);
        tmp = 0;
        timer2 = setInterval(function(){ 
            oImg.style["left"] = oImg.offsetLeft - 85 + "px";
            tmp -= 85;
            if(-850 == tmp) clearInterval(timer2);
        },30);
        if(oImg.offsetLeft == -4250) { 
           clearInterval(timer3);
           clearInterval(timer2);
           timer3 = setInterval(function( ){ 
                oImg.style["left"] = oImg.offsetLeft + 250 + "px";
                console.log(oImg.style["left"]+" "+oImg.offsetLeft);
                if(oImg.style["left"] == "0px") clearInterval(timer3);
           },40);
            
        } 
    },3000);
}

window.onload = slide;
