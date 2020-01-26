document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button-1').addEventListener('click', () => {
        var li = document.createElement("li");
        li.innerHTML = 'Chleb';
    
        document.querySelector('#shopping-list').appendChild(li);
    });
    
    document.getElementById('button-2').addEventListener('click', () => {
        let list = document.querySelector('#shopping-list');
        list.removeChild(list.lastElementChild);
    });
    
    document.getElementById('button-3').addEventListener('click', () => {
        let list = document.querySelector('#shopping-list');
        let element = list.children[1].cloneNode(true);
        document.querySelector('#shopping-list').appendChild(element);
    });
});