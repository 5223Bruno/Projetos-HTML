
const contactText = "Você pode entrar em contato comigo através do seguinte endereço de e-mail: Bruno1235223@gmail.com";
const contactElement = document.getElementById("contact-text");

function typeWriter(text, element) {
  let i = 0;
  const speed = 50;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

typeWriter(contactText, contactElement);

var button = document.querySelector('.button');
button.addEventListener('click', function() {
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var textElement = document.querySelector('.typing-text');
var textToType = 'Texto que será digitado';
var delayBetweenChars = 100; 

function typeText(element, text, delay) {
  var i = 0;
  var interval = setInterval(function() {
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, delay);
}

typeText(textElement, textToType, delayBetweenChars);

var parallaxElements = document.querySelectorAll('.parallax-element');

window.addEventListener('mousemove', function(e) {
  var x = e.clientX / window.innerWidth;
  var y = e.clientY / window.innerHeight;

  parallaxElements.forEach(function(element) {
    var speed = element.getAttribute('data-speed');
    var xOffset = (x - 0.5) * speed;
    var yOffset = (y - 0.5) * speed;
    element.style.transform = 'translate(' + xOffset + 'px, ' + yOffset + 'px)';
  });
});

var sections = document.querySelectorAll('.section');

function animateOnScroll() {
  sections.forEach(function(section) {
    var position = section.getBoundingClientRect();
    if (position.top - window.innerHeight <= 0) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
