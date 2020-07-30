const ufoLight = document.querySelector('#ufoLight');
const airBubbles = document.querySelector('#airBubbles');
const ghostIn = document.getElementById('ghostIn');
const ghostOut = document.getElementById('ghostOut');
const mouth = document.getElementById('mouth');
const eyes = document.getElementById('g-eyes');
const ufo = document.getElementById('wholeUfo')

function lightOn() {
  setTimeout(() => {
    ghostIn.style.display = 'block';
    eyes.style.animation = 'eyes-top 0.5s linear forwards .5s';
    ufo.style.animation = 'eyes-top 1s linear alternate infinite ';

    ghostOut.style.animation = 'ghost-top 1s ease-in-out alternate infinite 1s';
    airBubbles.style.animation = 'ghost-top 1s ease-in-out alternate infinite 1s';
    setTimeout(() => {
      ufoLight.style.display = 'block';
    }, 500);
    setTimeout(() => {
      mouth.style.opacity = '1';
      airBubbles.style.opacity = '1';
    }, 1000);
  }, 3510);
}
lightOn();
