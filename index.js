let displayBody = document.body;
console.log (displayBody);

const input = document.getElementsByClassName('myInput');
console.log (input);

const button = document.getElementById('myButton');
console.log (button);

let listItems = document.getElementsByTagName('li');
console.log (listItems);

const clicked = () => {
    alert ('WoW, you did this!');
}

if (button) {
    button.onclick = clicked;
}

//this function didn't work when I tried to do it through classname, but when I changed to ID, it worked

const myInput = document.getElementById('input');

const entered = (event) => {
  console.log (event.target.value);
}

if (myInput){
  myInput.onchange = entered;
}