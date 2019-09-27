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