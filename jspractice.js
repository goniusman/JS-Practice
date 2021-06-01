
// ################# tabs using js ##################
window.addEventListener('load', function(){
	const tabs = document.querySelectorAll('ul.nav-tabs > li');
	for(let i = 0; i < tabs.length; i++){
		tabs[i].addEventListener('click', something);
	}
	function something(event){
		event.preventDefault();
		var clickEvent = event.currentTarget;
		var anchor = event.target;
		document.querySelector("ul.nav-tabs li.active").classList.remove("active");
		document.querySelector(".tab-pane.active").classList.remove("active");
		var test = anchor.getAttribute('href');
		clickEvent.classList.add('active');
		document.querySelector(test).classList.add('active');
	}
});

/**
* Search keyword using javascript 
*/
if (questionsearch) {
	questionsearch.addEventListener("keyup", function(val) {
		var filterValue, input, listContain, list;
		input = val.target;
		filterValue = input.value.toUpperCase();
		listContain = document.getElementById("question-list");
		list = listContain.getElementsByClassName("question");

			for (let i = 0; i < list.length; i++) {
			const le = list[i];
			if (le.textContent.toUpperCase().indexOf(filterValue) > -1) {
			  list[i].parentElement.style.display = "block";
			} else {
			  list[i].parentElement.style.display = "none";
			}
		}
	});
}

// create a div and show anywhre for alert.
showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }


