let modal = document.querySelector('.modal');
let button = document.querySelector('.shop');
let close = document.querySelector('.close');

button.onclick = function() {
  modal.classList.add('is-open');
}

close.onclick = function() {
  modal.classList.remove('is-open');
}