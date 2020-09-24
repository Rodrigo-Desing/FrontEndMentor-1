function menuResponsive() {
	let bars = document.querySelector('.menu-bar__icon'),
		menu = document.querySelector('.main-menu'),
		aux = true;

	bars.addEventListener('click',()=> {
		if(aux){
			menu.classList.toggle('main-menu--open')
			bars.setAttribute('src','img/icon-close.svg')
			aux = false;
		}else{
			menu.classList.remove('main-menu--open')
			bars.setAttribute('src','img/icon-hamburger.svg')
			aux = true;
		}
	});	  
}

function activeNav() {
	let link = document.querySelectorAll('.main-menu__link');

	link.forEach(element =>{
		element.addEventListener('click',event =>{
			link.forEach( link =>{
				link.classList.remove('main-menu__link--active');
			})
			event.target.classList.add('main-menu__link--active');
		})
	})
}
activeNav();
menuResponsive();


function slider() {
	let cards = document.querySelectorAll('.experiences__card'),
		counts =  document.querySelector('.counts'),
		count, text,firstCount = true;	

	

	cards.forEach((element,index) =>{
		if (firstCount) {
			text = ` <div class="count count--active" id="${index}"> </div>`;
			counts.innerHTML += text;
			firstCount = false;
		}else{
			text = ` <div class="count" id="${index}"> </div>`;	
			counts.innerHTML += text;
		}
		count = document.querySelectorAll('.count');
	})	

	count.forEach( element =>{

		element.addEventListener('click', event =>{

			cards.forEach( card =>{
				card.classList.remove('experiences__card--open');
			})
			let index2;

			count.forEach( e=>{
				e.classList.remove('count--active');
			})

			cards.forEach( (element,index) =>{
				index2 = new String(index);
				if (event.target.id == index2) {
					element.classList.add('experiences__card--open');
					event.target.classList.add('count--active');
				}


			})

		})
	})


}
slider();