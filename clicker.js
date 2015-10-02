//Clicker constructor++++++++++++++++++++++++++++++++++++++

function Counter() {
this.count = document.getElementById("counterButton").addEventListener("click", function(){
    number++;
    document.getElementById("numberOfClicks").innerHTML = number + " people love this page!";
	});
}

//Clicker instantiated as 'mycount'++++++++++++++++++++++++++++
var myCount = new Counter();
