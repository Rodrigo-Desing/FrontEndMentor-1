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