function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
alert("Olá, Seja bem vindo" );
const inputName = document.getElementById('inputname');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (event) => {
event.preventDefault();

let p = document.createElement('p');
p.classList = ' d-flex text-wrap flex-wrap';
p.innerHTML = `<strong>${inputName.value}:</strong> ${textComment.value}`;
commentPost.appendChild(p);
inputName.value = '';
textComment.value = '';
inputName.focus();
});

