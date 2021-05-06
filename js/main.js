


let technicsItemBtn = document.querySelectorAll('.technics-item__btn');
let order = document.querySelector('.order');
let orderBlockBtn = document.querySelector('.order-block__btn');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
const header = document.querySelector(".header");
const returnRotate = document.querySelector(".return");
const navLinks = document.querySelectorAll('.menu__list-link');
const menu = document.querySelector('.menu');
const headerImg = document.querySelectorAll('.header__img');
const headerWrapper = document.querySelector('.header__wrapper');
const menuList = document.querySelector('.menu__list');
const container = document.querySelector('.container');
const headerMobile = document.querySelector('.header-mobile');

headerMobile.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
	headerMobile.classList.toggle('header-mobile--active');
	if (menu.classList.contains('menu--active')) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = '';
	}
})
navLinks.forEach(navLink => {
	const href = navLink.getAttribute('href');
	const section = document.querySelector(href);
	const offset = 50 + 40; // nav and offset

	navLink.addEventListener('click', (e) => {
		// get body position
		const bodyRect = document.body.getBoundingClientRect().top;
		// get section position relative
		const sectionRect = section.getBoundingClientRect().top;
		// subtract the section from body
		const sectionPosition = sectionRect - bodyRect;
		// subtract offset
		const offsetPosition = sectionPosition - offset;
		e.preventDefault();

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
		menu.classList.toggle('menu--active');
		headerMobile.classList.toggle('header-mobile--active');
		document.body.style.overflow = ''
	})
})


/*---------header-scroll---------*/
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 50) {
		header.classList.add("header__activ");
	} else {
		header.classList.remove("header__activ");
	}
})
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 200) {
		returnRotate.classList.add("return__active");
	} else {
		returnRotate.classList.remove("return__active");
	}
})
returnRotate.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
})

technicsItemBtn.forEach(elem => {
	elem.addEventListener('click', (event) => {
		order.classList.add('order--active');
		order.style.display = 'block'
		body.style.overflow = 'hidden'
	})
})
orderBlockBtn.addEventListener('click', closeOverlay)

/*---------MODAL+Validation---------*/

document.addEventListener('click', (event) => {
	if (event.target === overlay) {
		closeOverlay()
	}
})
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeOverlay()
	}
})
function closeOverlay() {
	order.classList.remove('order--active');
	order.style.display = 'none';
	body.style.overflow = '';
}

let form = document.querySelector('.order-form');
let validateBtn = form.querySelector('.order-form__submit');
let firstname = form.querySelector('#firstname');
let phone = form.querySelector('#phone')
let email = form.querySelector('#email')
let textarea = form.querySelector('#textarea')

let im = new Inputmask('+7(999) 999-99-99');
im.mask(phone);

let validateName = false;
let validatePhone = false;
let validateText = false;

let a = `<input type="hidden" name="project_name" value="Услуги спецтехники">
        <input type="hidden" name="admin_email" value="tanievv@mail.ru">
        <input type="hidden" name="email_from" value="manipul@manipulyator-ekskavator.ru">
        <input type="hidden" name="form_subject" value="Сообщение с сайта">`
checkFirstName()
checkvalidateText()
checkvalidatePhone()
form.insertAdjacentHTML('afterbegin', a);

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkFirstName()
	checkvalidateText()
	checkvalidatePhone()
	if (!validateName) {
		firstname.previousElementSibling.style.display = 'block';
		firstname.style.border = '2px solid red';
		firstname.style.boxShadow = '0px 0px 20px rgba(255, 0, 0, 0.8)';
	}
	if (!validateText) {
		textarea.previousElementSibling.style.display = 'block';
		textarea.style.border = '2px solid red';
		textarea.style.boxShadow = '0px 0px 20px rgba(255, 0, 0, 0.8)';
	}
	if (!validatePhone) {
		phone.previousElementSibling.style.display = 'block';
		phone.style.border = '2px solid red';
		phone.style.boxShadow = '0px 0px 20px rgba(255, 0, 0, 0.8)';
	}

	if (validateName && validatePhone && validateText) {
		form.submit();
		form.reset();
	}
})

function checkFirstName() {
	firstname.addEventListener('input', () => {
		if (firstname.value) {
			firstname.previousElementSibling.style.display = '';
			firstname.style.border = '';
			firstname.style.boxShadow = '';
			validateName = true;
		} else {
			validateName = false;
		}
	})
	return validateName
}
function checkvalidateText() {
	textarea.addEventListener('input', () => {
		if (textarea.value) {
			textarea.previousElementSibling.style.display = '';
			textarea.style.border = '';
			textarea.style.boxShadow = '';
			validateText = true;
		} else {
			validateText = false;
		}
	})
	return validateText
}
function checkvalidatePhone() {
	phone.addEventListener('input', () => {
		if (phone.value) {
			phone.previousElementSibling.style.display = '';
			phone.style.border = '';
			phone.style.boxShadow = '';
			validatePhone = true;
		} else {
			validatePhone = false;
		}
	})
	return validatePhone
}

/*---------SWIPER---------*/

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	autoplay: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 1,
	spaceBetween: 20,
	// Navigation arrows
	breakpoints: {
		826: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 3,
		}
	}
});
