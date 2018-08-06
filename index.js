import '/node_modules/bulma/bulma.sass';
import './main.sass';
import { lory } from 'lory.js';

document.addEventListener('DOMContentLoaded', function() {
  const multiSlides = document.querySelector('.js_multislides');
  const image = document.querySelector('.image.is-480x480 img');
  console.log(image);

  lory(multiSlides, {
    infinite: 4,
    slidesToScroll: 4
  });

  document.querySelectorAll('img').forEach(element => {
    element.addEventListener('click', ev => {
      image.src = ev.target.src;
    });
  });
});
