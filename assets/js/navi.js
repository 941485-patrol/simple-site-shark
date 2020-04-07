linkHome.addEventListener("click", ()=> {

    if (body.offsetWidth <= 850)
    {
        burger.click()

        myUl.style.transition = "none"
    }

    window.scrollTo(0,0)
    
})

linkAbout.addEventListener("click", ()=> {

    if (body.offsetWidth <= 850)
    {
        burger.click()

        myUl.style.transition = "none"
    }

    contentAbout.scrollIntoView(true)
    
})

linkWorks.addEventListener("click", ()=> {

    if (body.offsetWidth <= 850)
    {
        burger.click()

        myUl.style.transition = "none"
    }

    contentWorks.scrollIntoView(true)
    
})

linkContact.addEventListener("click", ()=> {

    if (body.offsetWidth <= 850)
    {
        burger.click()

        myUl.style.transition = "none"
    }

    contentContact.scrollIntoView(true)
    
})