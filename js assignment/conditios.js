/*var msg = document.getElementById("message");
console.log(msg);
var name = prompt("what is your name");

var output = "Welcome" + name;
if (name==""){
	output="add ur name"
}
else {
	output="Welcome" + name;
}
msg.textContent = output;



var msg = document.getElementById("message");
var num = prompt("give me a number", 10);

if (typeof num != "num") {
	output = "enter a number"
}
else{
	for (var i = 2, output = 1; i <= num; i++) {
		output *= i;
	}
}
msg.textContent = num + "! =" + output;



var msg = document.getElementById("message");
var num = prompt("bank details");
while (num.length < 8){
	num = "0" + num;
}
msg.textContent = num;*/



var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var items = nums.length;
/*console.log(items);*/
var total = 0;
for(var i = 0; i < items; i++){
	total += nums[i];
}
/*console.log(total);*/
var mean = total / items;
alert(mean);
