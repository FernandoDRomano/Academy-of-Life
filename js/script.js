/*=============================================
			CONFIGURACIONES GENERALES
=============================================*/

//MOSTRAR Y ESCONDER EL MENU MOVIL
let iconoMenu = document.querySelector('#cabezeraID .fa-bars');
let iconoCerrar = document.querySelector('#menuMovil .fa-times');
let menuMovil = document.getElementById('menuMovil');
let opcionesDelMenuMovil = document.querySelectorAll('#menuMovil .menuDeNavegacionMovil li a');

function mostrarMenuMovil(){
	menuMovil.style.display = 'block';
	menuMovil.style.left = '0';
	menuMovil.style.opacity = '1';
}

function ocultarMenuMovil(){
	menuMovil.style.left = '-50rem';
	menuMovil.style.opacity = '0';
	menuMovil.style.display = 'none';
}

if(iconoMenu){
	iconoMenu.addEventListener('click', (e)=>{
		e.preventDefault();
		mostrarMenuMovil();
	});
}

if(iconoCerrar){
	iconoCerrar.addEventListener('click', (e)=>{
		e.preventDefault();
		ocultarMenuMovil();
	});
}

if(opcionesDelMenuMovil){
	opcionesDelMenuMovil.forEach((opcion) => {
		opcion.addEventListener('click', (e)=>{
			ocultarMenuMovil();
		})
	});
}



//MOSTRAR Y OCULTAR LAS RESPUESTAS A LAS PREGUNTAS EN EL ENTORNO DE ESCRITORIO
let preguntas = document.querySelectorAll('#faqEscritorioID .preguntas li');
let respuestas = document.querySelectorAll('#faqEscritorioID .respuestas div');

if (preguntas) {
	preguntas.forEach((pregunta) =>{
		pregunta.addEventListener('click', (e)=>{
			ocultarTodasLasRespuestas();
			agregarClaseActive(pregunta);		
			mostrarRespuestaALaPregunta(pregunta);
		});
	});
}

function mostrarRespuestaALaPregunta(pregunta){
	if(pregunta){
		let respuesta = document.querySelector('#faqEscritorioID .respuestas #' + pregunta.getAttribute('data-respuesta'));
		respuesta.classList.replace('d-none', 'd-block');
	}
}

function ocultarTodasLasRespuestas(){
	if (respuestas) {		
		respuestas.forEach((resp) => {
			quitarClaseActive();
			resp.classList.remove('d-block');
			resp.classList.add('d-none');
		});
	}
}

function agregarClaseActive(pregunta){
	if(pregunta){
		pregunta.firstElementChild.classList.add('active');
		pregunta.lastElementChild.classList.add('active');
		pregunta.lastElementChild.classList.remove('fa-chevron-right');
		pregunta.lastElementChild.classList.add('fa-chevron-left');
	}
}

function quitarClaseActive(){
	if(preguntas){
		preguntas.forEach((pregunta) =>{
			pregunta.firstElementChild.classList.remove('active');
			pregunta.lastElementChild.classList.remove('active');
			pregunta.lastElementChild.classList.remove('fa-chevron-left');
			pregunta.lastElementChild.classList.add('fa-chevron-right');
		});
	}
}

//REPRODUCIR LOS VIDEOS
let videos = document.querySelectorAll('.cursos .curso .multimedia video');

if(videos){
	videos.forEach((video) => {
		video.addEventListener('click', (e)=>{
			//PAUSO TODOS LOS VIDEOS, EN CASO DE QUE SE ESTE REPRODUCIENDO UNO ANTERIORMENTE
			pausarTodosLosVideos();
			//REPRODUZCO EL VIDEO
			reproducirVideo(video);
		})
	});
}

function pausarTodosLosVideos(){
	if(videos){
		videos.forEach((video)=>{
			video.pause();
		});
	}
}

function reproducirVideo(video){
	if(video){
		//MUESTRO LOS CONTROLES
		video.setAttribute('controls', true);
	}
}

/*
	FUNCIONES AL HACER SCROLL
*/
let color = "#043248";
let barraDeNavegacion = document.getElementById('cabezeraID');
let scrollUP = document.getElementById('scrollUP');

window.onscroll = () => {
	//PARA CAMBIAR DE COLOR LA BARRA DE NAVEGACIÓN
	if(barraDeNavegacion){
		if(window.scrollY > 50){
			barraDeNavegacion.style.backgroundColor = color;
		}else{
			barraDeNavegacion.style.backgroundColor = 'rgba(0,0,0, .1)';
		}
	}

	//PARA HACER APARECER Y DESAPARECER EL SCROLL UP
	if(scrollUP){
		if(window.scrollY > 300){
			scrollUP.style.display = 'block';
		}else{
			scrollUP.style.display = 'none';
		}
	}
}

/*
	REALIZAR EL DESPLAZAMIENTO ENTRE LOS ENLACES DE LA MISMA PÁGINA
*/
let enlacesMenu = document.querySelectorAll('.menuDeNavegacion li a');
//Obtengo la altura de la barra de navegación
if(barraDeNavegacion){
	let alturaBarra = barraDeNavegacion.getBoundingClientRect().height;
}

if(enlacesMenu){
	enlacesMenu.forEach((enlace) => {
		enlace.addEventListener('click', (e)=>{
			e.preventDefault();
			//Obtengo el id que tiene la propiedad href el enlace
			let ancla = enlace.getAttribute('href').substring(1);
			//Busco el elemento por el id
			let elemento = document.getElementById(ancla);
			//Obtengo la posicion del elemento buscado
			let posicion = elemento.offsetTop;
			
			//realizo el desplazamiento y le resto la altura de la barra de navegacion
			window.scrollTo(0, posicion - alturaBarra)
	
		})
	});
}

if(opcionesDelMenuMovil){
	opcionesDelMenuMovil.forEach((enlace) => {
		enlace.addEventListener('click', (e)=>{
			e.preventDefault();
			//Obtengo el id que tiene la propiedad href el enlace
			let ancla = enlace.getAttribute('href').substring(1);
			//Busco el elemento por el id
			let elemento = document.getElementById(ancla);
			//Obtengo la posicion del elemento buscado
			let posicion = elemento.offsetTop;
			
			//realizo el desplazamiento y le resto la altura de la barra de navegacion
			window.scrollTo(0, posicion - alturaBarra)
			console.log(alturaBarra)
		})
	});
}