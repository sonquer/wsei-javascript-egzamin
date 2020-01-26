document.addEventListener('DOMContentLoaded',()=>{
    // 1
    function getTagsOfElements(list){
        var a=[];
        list.forEach((el)=> a.push(el.tagName))
        return a;
    }
    console.log(getTagsOfElements(document.querySelectorAll('.sample_class')));
    
    // 2
    function getClassesOfElement(element){
        var a = [];
        element.classList.forEach(c=>a.push(c));
        return a;
    }
    console.log(getClassesOfElement(document.querySelector('#sample_id')));

    // 3
    function getInnerTextsOfElements(elements){
        var a=[];
        elements.forEach(e=>a.push(e.innerText));
        return a;
    }
    console.log(getInnerTextsOfElements(document.querySelectorAll('.sample_class_2 li')));

    // 4
    function getAddressesOfElements(elements){
        var a=[];
        elements.forEach(e=>a.push(e.getAttribute('href')));
        return a;
    }
    console.log(getAddressesOfElements(document.querySelectorAll('a')));

    // 5
    children = document.querySelectorAll('.sample_class_3 > *');
    console.log(getTagsOfElements(children));
});