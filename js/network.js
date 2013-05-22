function dis(){
	var sp = document.getElementById("net_pic");
	var l = sp.getElementsByTagName("li");
	for(var i = 0;i < l.length;i ++){
		var p = l[i].getElementsByTagName("span")[0];
		l[i].onmouseover = function(obj){
			return function(){
			obj.style["display"] = "block";
			}
		}(p);
		l[i].onmouseout = function(obj){
			return function(){
			obj.style["display"] = "none";			
			}
		}(p);
	}
}



window.onload = function(){
    slide();
	dis();
}
