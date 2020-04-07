let burger = document.getElementById("burger")

let myUl = document.getElementsByTagName("ul")[0]

let myUlWrapper = document.getElementsByClassName("ul-wrapper")[0]

let linkHome = document.getElementById("link-home")

let linkAbout = document.getElementById("link-about")

let contentAbout = document.querySelector(".about")

let linkWorks = document.getElementById("link-works")

let contentWorks = document.querySelector(".works")

let linkContact = document.getElementById("link-contact")

let contentContact = document.querySelector(".contact")

let imagess = document.getElementsByClassName("img")

let customModal = document.getElementById("custom-modal")

let customModalImage = document.getElementById("custom-modal-image")

let modalClose = document.getElementById("modal-close")

let body = document.body

window.addEventListener("resize", ()=> {

    burger.classList.remove("open")

    myUl.classList.remove("anim-ul")
    
    myUlWrapper.classList.remove("anim-ul")

})

window.onclick = (event)=>{
    if(event.target == myUlWrapper && body.offsetWidth <= 850)
    {
        burger.click()

    }

    if(event.target == customModal)
    {
        customModal.style.display = "none"
    }
}

modalClose.addEventListener("click", ()=>{

    customModal.style.display = "none"

})

for(var i = 0; i<imagess.length; i++)
{
    imagess[i].addEventListener('click', function() {

        customModal.style.display = "block"

        customModalImage.setAttribute("src", this.getAttribute("src"))

    })
}