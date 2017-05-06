//var wrap = document.getElementById("wrapper");
//alert("elo");
var msg= document.getElementById("message");
console.log(msg);

/*var second= document.getElementById("class");
console.log(second);


var prev = msg.previousElementSibling;
.contentEditable =  true
console.log({prev});

var change =  document.getElementById("but");

function toggler(){
	change.addEventListener('click', function(){
		//alert("his");
		if(!msg.isContentEditable){
			msg.contentEditable  = true;
			this.textContent  = "save";
		}
		
		else{
			msg.contentEditable  = false;
			
			this.textContent = "change";
		}
	});

}
toggler();
console.log(msg.isContentEditable);

var edits =  document.getElementsByClassName('edit');
    console.log(edits);
    function toggler2(){
        for (var i = 0; i < edits.length; i++) {
            //console.log(edits.item(i));
            edits.item(i).addEventListener('click', function(){
                //console.log(this.previousElementSibling);
                var msg = this.parentElement.previousElementSibling;

               if (!msg.isContentEditable) {
                     msg.contentEditable = true;
                     this.textContent = "save";
                 }
                 else{
                     msg.contentEditable = false;
                     this.textContent = "edit"
                 }
            });
        }
    }

   toggler2();


var obj =  new Date();
//console.log(obj.getDate);
console.log({obj});
msg.innerHTML = obj

 var e = new Date();
 console.log(e.setDate(0));

var m = new Date();
console.log(m.getHours(0));

var n = new Date();
console.log(n.toLocaleString(0));

var l = new Date();
console.log(l.toUTCString(0));




var dateNow = new Date();
var date2020  = new Date(2020, 0, 1);
console.log(dateNow);
console.log(date2020);

var days = Math.ceil((date2020 - dateNow) / (1000*60*60*24));


msg.innerHTML += " <p>Days to 2020 " + days +"</p> "

var obj =  new Date();

console.log({obj});

var name = prompt("enter ur name")


var hours = new Date();
console.log(hours.getHours());
var mins = new Date();
console.log(mins.getMinutes());

function getTime(){
    if(hours <= 12){
        alert("good morning ");

    }
    else if (hours > 13)

    else{
        alert("good afternoon ")
    }
}
getTime();  

function myClock(){


    var date = new Date();
    var hours = date.getHours();
    console.log(hours);
    var mins = date.getMinutes();
    var second = date.getSeconds();
    msg.innerHTML = hours+":"+mins+":"+second;


}
myClock();

setInterval('myClock()', 1000);


console.log(Math.round(9.5));
console.log(Math.floor(9.5));
console.log(Math.ceil(9.5456));
console.log(Math.abs(-9.5));

console.log(Math.cbrt(8));

function cubeRoot(){
    if (true) {}
}

function color(){
    var victor= Math.floor(Math.random() * 1000000) + 1;
//console.log(victor);
msg.style.backgroundColor = "#" + victor
}
color();

setInterval('color()', 500); */


