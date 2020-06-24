let toggleLightDark = document.getElementById("link-dark-light")
let nav = document.querySelector('nav')
let ham = document.querySelectorAll('span.ham')
toggleLightDark.querySelector('i').addEventListener("click", ()=>{
    var bulb = toggleLightDark.querySelector('i')
    if (bulb.classList[0] == 'far')
    {
        bulb.classList.remove('far', 'fa-lightbulb')
        bulb.classList.add('fas', 'fa-lightbulb')
        body.classList.toggle('darken')
        nav.classList.toggle('darken')
        myUl.classList.toggle('darken')
        body.offsetWidth < 768 ? myUl.classList.toggle('redden') : ''
        toTop.querySelector('img').src='assets/img/topwhite.png'
        ham.forEach(element => {
            element.style.backgroundColor='rgba(240,7,7,0.75)';
            element.classList.toggle('redden')
        });
    }
    else
    {
        bulb.classList.remove('fas', 'fa-lightbulb')
        bulb.classList.add('far', 'fa-lightbulb')
        body.classList.toggle('darken')
        nav.classList.toggle('darken')
        myUl.classList.toggle('darken')
        body.offsetWidth < 768 ? myUl.classList.toggle('redden') : ''
        toTop.querySelector('img').src='assets/img/top.png'
        ham.forEach(element => {
            element.style.backgroundColor='black';
            element.classList.toggle('redden')
        });
    }
})