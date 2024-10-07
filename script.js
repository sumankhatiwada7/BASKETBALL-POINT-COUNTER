let counthome=0
let countaway=0
let homeel=document.getElementById("home-el")
let awayel=document.getElementById("away-el")
function point(points){

counthome+=points
   homeel.textContent=counthome
   
}
function point1(point1){
    countaway+=point1
    awayel.textContent=countaway
    
}

