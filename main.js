var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var prev_selected = cells[0];
cells[0].classList.add("selected");
var selected = document.getElementsByClassName("selected");
console.log(selected);

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(e) {
    	prev_selected.classList.remove("selected");
        e.target.classList.add("selected");
        prev_selected = e.target;
    });
}

var addEvent = function(value) {
	var selected = document.getElementsByClassName("selected");
	//var text = document.createTextNode(value);
	console.log(value);
	console.log(selected.innerText);
	selected.innerText = "value";

}

input.addEventListener("keyup", function(e) {
	if (e.keyCode === 13 && e.target.value !== ''){
		addEvent(e.target.value);
		e.target.value = '';
	}	
})


//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for (var i = 0; i < themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}