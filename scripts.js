document.addEventListener('DOMContentLoaded', function () {
  //MENÚ RESPONSIVE
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.style.display = (nav.style.display === 'block') ? '' : 'block';
    });
  }



  //SLIDER
  var slides = document.querySelectorAll('.slide');
  var idx = 0;
  function show(n) {
    slides.forEach(function (s, i) {
      s.classList.toggle('active', i === n);
    });
  }
  function next() {
    idx = (idx + 1) % slides.length;
    show(idx);
  }
  if (slides.length > 0) {
    show(0);
    setInterval(next, 5000);
  }

  //BOTONES SLIDER-para la pagina de quienes somos(hero)
  var prev = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  if (prev) prev.addEventListener('click', function () {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  });
  if (nextBtn) nextBtn.addEventListener('click', function () {
    idx = (idx + 1) % slides.length;
    show(idx);
  });

  //VALIDACIÓN FORMULARIO
  var form = document.getElementById('contact-form');
  if (form) {
    var err = document.getElementById('form-error');
    form.addEventListener('submit', function (e) {
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
      var valid = true;
      err.textContent = '';

      if (!name.value.trim()) valid = false;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) valid = false;
      if (!message.value.trim()) valid = false;

      if (!valid) {
        e.preventDefault();
        err.textContent = 'Rellena los campos correctamente.';
      }
    });
  }

  //FORMULARIO DE CONTACTO (REDIRECCIÓN A 404)
  const formContacto = document.getElementById('form-contacto');
  if (formContacto) {
    formContacto.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita envío real
      const boton = formContacto.querySelector('button[type="submit"]');
      boton.textContent = "Enviando...";
      boton.disabled = true;

      // Simula envío antes de redirigir
      setTimeout(() => {
        window.location.href = '404.html'; // Redirige al 404
      }, 1000);
    });
  }
});

//script de la animación de los números
const numeros = document.querySelectorAll('.numero');
let animado = false;

function animarNumeros() {
  const scrollTop = window.scrollY;
  const estadisticas = document.querySelector('.estadisticas');
  if (!estadisticas) return;

  const trigger = estadisticas.offsetTop - window.innerHeight;

  if (!animado && scrollTop > trigger) {
    numeros.forEach(numero => {
      const max = +numero.getAttribute('data-max');
      let count = 0;
      const incremento = max / 100;
      const interval = setInterval(() => {
        count += incremento;
        if (count >= max) {
          numero.textContent = max.toLocaleString();
          clearInterval(interval);
        } else {
          numero.textContent = Math.floor(count).toLocaleString();
        }
      }, 20);
    });
    animado = true;
  }
}

window.addEventListener('scroll', animarNumeros);

//este script es para que cambie automáticamente el año del footer cuando cambiemos de año
const footer = document.querySelector(".footer-bottom p");
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} ArQuimia. Todos los derechos reservados.`;
}

// ----- BOTÓN VOLVER ARRIBA -----
const backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.textContent = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});















// document.addEventListener('DOMContentLoaded',function(){
// var toggle=document.getElementById('nav-toggle');
// var nav=document.getElementById('nav');
// if(toggle&&nav)toggle.addEventListener('click',function(){nav.style.display=(nav.style.display==='block')?'':'block'});
// var slides=document.querySelectorAll('.slide');
// var idx=0;
// function show(n){slides.forEach(function(s,i){s.classList.toggle('active',i===n)})}
// function next(){idx=(idx+1)%slides.length;show(idx)}
// if(slides.length>0){show(0);setInterval(next,5000)}
// var prev=document.getElementById('prev');
// var nextBtn=document.getElementById('next');
// if(prev)prev.addEventListener('click',function(){idx=(idx-1+slides.length)%slides.length;show(idx)});
// if(nextBtn)nextBtn.addEventListener('click',function(){idx=(idx+1)%slides.length;show(idx)});
// var form=document.getElementById('contact-form');
// if(form){
// var err=document.getElementById('form-error');
// form.addEventListener('submit',function(e){
// var name=document.getElementById('name');
// var email=document.getElementById('email');
// var message=document.getElementById('message');
// var valid=true;err.textContent='';
// if(!name.value.trim())valid=false;
// if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))valid=false;
// if(!message.value.trim())valid=false;
// if(!valid){e.preventDefault();err.textContent='Rellena los campos correctamente.'}
// });
// }
// });

// const numeros = document.querySelectorAll('.numero');
// let animado = false;

// function animarNumeros() {
//   const scrollTop = window.scrollY;
//   const trigger = document.querySelector('.estadisticas').offsetTop - window.innerHeight;

//   if (!animado && scrollTop > trigger) {
//     numeros.forEach(numero => {
//       const max = +numero.getAttribute('data-max');
//       let count = 0;
//       const incremento = max / 100; // velocidad
//       const interval = setInterval(() => {
//         count += incremento;
//         if(count >= max) {
//           numero.textContent = max.toLocaleString();
//           clearInterval(interval);
//         } else {
//           numero.textContent = Math.floor(count).toLocaleString();
//         }
//       }, 20);
//     });
//     animado = true;
//   }
// }

// window.addEventListener('scroll', animarNumeros);

// const form = document.getElementById('form-contacto');
//   form.addEventListener('submit', function (e) {
//     e.preventDefault(); // evita el envío real
//     window.location.href = '404.html'; // redirige al 404
//   });