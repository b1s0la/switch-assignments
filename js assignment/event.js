/*var btn = document.getElementById("btn");
//console.log(btn);

btn.addEventListener("click", function(e){
	//alert("horray")
	console.log(e);

});
var input = document.getElementsByName("nm")[0];
console.log(input);

input.addEventListener("focus", function(e){
	
	console.log(e);
});

input.addEventListener("focus", focusHandler);
	function focusHandler(e){
		console.log(e);
	}

var select = document.getElementsByTagName("select")[0];
console.log(select);
function changeHandler(e){
		console.log(e.target.value);
	}
select.addEventListener("change", changeHandler);

var body = document.getElementsByTagName("body")[0];
	console.log(body);

var color = document.getElementsByClassName("color")[0];
	console.log(color);

	function colorHandler(e){
		console.log(e.target.value);
		body.style.backgroundColor = e.target.value;
	}
	color.addEventListener("change", colorHandler);

	var table = document.getElementById("multiplication");
	console.log(table);

	var tcols = document.getElementsByTagName("col");
	//console.log(tcols);

	function tableHandler(e){
		//console.log(e);
		
		var t = e.target;
		console.log(t.nodeName);
		if (t.nodeName != "TD"){
			return;
		}
		var cName = (e.type == "mouseover" ? "active": "" )
		console.log(cName);
		t.parentNode.className = cName;
		console.log(tcols[t.cellIndex]);
		tcols[t.cellIndex].className = cName;
	}

	table.addEventListener("mouseover", tableHandler);
	table.addEventListener("mouseout", tableHandler);*/

// Create a reference to the ClubName select


var object = {
	'football': ['jersey', 'boot', 'ball'],
	'tennis': ['racket', 'tennisball'],
	'track': ['shoes', 'socks']

} 
function LoadPlayers(Ctrl) {
		var e = document.getElementById("clubName");
		var PlayersSelect = document.getElementById("Players");	
		
		// Get the selected Value
		var club = e.options[e.selectedIndex].value;
		
		// clear the Players list of all values
		 document.getElementById("Players").options.length = 0;
		 
		// Find the Club based on the name from the object
		for (var key in object) {
			if (key === club) {
				var _players = object[key];
				for (var i in object[key]) {
				  var opt = document.createElement("option");
				   opt.value = object[key][i];
				   opt.innerHTML = object[key][i]; // whatever property it has

				   // then append it to the select element
				   PlayersSelect.appendChild(opt);
				}
			};
		}
	}