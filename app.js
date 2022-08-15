const starNumbers = document.querySelectorAll('.star.number');

const stars = document.querySelector('.stars');

const onlyStar = document.querySelector('.stars .star');

const allStars = document.querySelectorAll('.stars .star');

const submit = document.querySelector('.submit');

const mainStart = document.querySelector('#main');
const mainEnd = document.querySelector('#main-end');

const result = document.querySelector('.result');

for (let starNumber of starNumbers){

  starNumber.addEventListener('click', function(){

    removeSelectedClassFromAll();

    removeAllStars();

    starNumber.classList.toggle('selected');

    let rate = starNumber.innerText;

    stars.classList.remove('invisible');

    for (let i=0; i<(rate); i++){

    stars.appendChild(onlyStar.cloneNode(true));

    }
    submit.addEventListener('click', function(){thanksWindow(rate)});
  })


}

// submit.addEventListener('click', function(){thanksWindow()});


function removeSelectedClassFromAll(){
  for (let starNumber of starNumbers){
    starNumber.classList.remove('selected');
  }
}

function removeAllStars(){
  while(stars.firstChild){
    stars.removeChild(stars.firstChild);
  }
}

function thanksWindow(rate){
  
  mainStart.classList.add('non-visible');
  result.innerText = `You selected ${rate} of 5`;
  mainEnd.classList.remove('non-visible');
}








