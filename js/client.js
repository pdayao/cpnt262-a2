'use strict';

//IMPORTANT!! DON"T REMOVE LINES 4-10!!!!
const form = document.querySelector('form');

const handleSubmit = function(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleSubmit);