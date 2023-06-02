const imageSources = [
  'img/cat1.jpeg',
  'img/cat2.jpeg',
  'img/cat3.jpeg',
  'img/cat4.jpeg',
  'img/cat5.jpeg',
  'img/cat6.jpeg',
  'img/cat7.jpeg',
  'img/cat8.jpeg',
  'img/cat9.jpeg',
  'img/cat10.jpeg',
  'img/cat11.jpeg',
  'img/cat12.jpeg',
  'img/cat13.jpeg',
  'img/cat14.jpeg',
  'img/cat15.jpeg',
  'img/cat16.jpeg',
  'img/cat17.jpeg',
  'img/cat18.jpeg',
  'img/cat19.jpeg',
  'img/cat20.jpeg',
];

const button = document.getElementById('myButton');

button.addEventListener('click', myFunction);

let currentIndex = 0;

function myFunction () {
    const image = document.getElementById('myImage');
    currentIndex++;

    if (currentIndex >= imageSources.length) {
      currentIndex = 0;
    }

    image.src = imageSources[currentIndex];
};

document.body.appendChild(button);