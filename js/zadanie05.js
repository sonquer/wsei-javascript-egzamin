let buttons = document.querySelectorAll('button');

for(let i = 0; i<buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', (element) => {
        let container = document.querySelector('#container');
        container.innerHTML = element.target.dataset['text'];
    });
}