const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);
let count = 0;

button.addEventListener('click', () => {
    count++;
    button.innerText = `Clicked ${count} times`;
});
