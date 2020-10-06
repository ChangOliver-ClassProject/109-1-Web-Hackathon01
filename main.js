var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var prev_selected = cells[0];
cells[0].classList.add("selected");
var selected = document.getElementsByClassName("selected");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(e) {
    	prev_selected.classList.remove("selected");
        e.target.classList.add("selected");
        prev_selected = e.target;
    });
    cells[i].appendChild(document.createElement("br"));
    cells[i].appendChild(document.createElement("h2"));
}

var addEvent = function() {
	var selected = document.getElementsByClassName("selected");
	selected[0].childNodes[2].innerText = input.value;
	selected[0].childNodes[2].style.color = color.value;
	input.value = '';
}

input.addEventListener("keyup", function(e) {
	if (e.keyCode === 13 && e.target.value !== ''){
		addEvent();
	}	
})


//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for (var i = 0; i < themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}