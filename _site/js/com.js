var timer1,timer2,timer3;
function slide(){ 
    var oImg = document.getElementById("imgSlide");
    var imgLength = oImg.getElementsByTagName("li")[0].offsetWidth;
    var tmp = 0;
    clearInterval(timer1);
    timer1 = setInterval(function(){
         /*
         *  处理chrome和ff切换tab的error！
         */
         clearInterval(timer2);
         clearInterval(timer3);
         var q = oImg.offsetLeft / imgLength;
         q = Math.floor(q);
         if(q > 5) q = 5;
         oImg.style["left"] = q*imgLength + "px";


         if(oImg.offsetLeft == -5*imgLength){
            clearInterval(timer3);
            if(oImg.offsetLeft > 0) oImg.style["left"] = "0px";
            timer2 = setInterval(function(){
                if(oImg.offsetLeft == 0){
                    clearInterval(timer2);
                }else {
                    oImg.style["left"] = oImg.offsetLeft + 250 + "px";
                }
            },30);
        }else {
            clearInterval(timer2);
            tmp = 0;
            timer3 = setInterval(function(){
                if(tmp == imgLength){
                    clearInterval(timer3);
                }
                else{
                    oImg.style["left"] = oImg.offsetLeft - 85 + "px";
                    tmp += 85;
                    //console.log(oImg.offsetLeft + " " + tmp);
                }
            },30);
        }
        //console.log("out "+oImg.offsetLeft);
        
        },3000);
}
var timer = [null,null];
function goSlide(self,dir,t){

    var s = dir * 25;
    clearInterval(timer[t]);
    timer[t] = setInterval(function(){
        if(dir == -1){
            if(self.offsetLeft == -250) clearInterval(timer[t]);
            else self.style["left"] = self.offsetLeft + s + "px";
        }else {
            if(self.offsetLeft == 0) clearInterval(timer[t]);
            else self.style["left"] = self.offsetLeft + s+"px";
        }
    },30);
}

function amaze(){
    var slide = document.getElementById("sideBar");
    var s = slide.getElementsByTagName("ul");
    s[0].onmouseover = function(){goSlide(s[0],-1,0);}
    s[0].onmouseout = function(){goSlide(s[0],1,0);}
    s[1].onmouseover = function(){goSlide(s[1],-1,1);}
    s[1].onmouseout = function(){goSlide(s[1],1,1);}


}


/*window.addEventListener('focus', slide);    
window.addEventListener('blur', function(){
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
});*/

