

const menuSlide = () =>{
    const burger = document.querySelector(".burger");
    const  menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu ul li")
    burger.addEventListener('click', () =>{
        menu.classList.toggle('menu-active')
        menuLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = "";
                //menu.style.display = "none"
            
            } else{
                //menu.style.display = "block"
                link.style.animation = `menufade 0.5s ease forwards ${index / 7+ 0}s`
                console.log(index/7);
                    
            }
            
        });
        //burger animation
        burger.classList.toggle("toggle");
    })


}
const form = () =>{
    const  menu = document.querySelector(".menu");
    const requestEl = document.querySelector('.RequestEl')
    const formlayout = document.querySelector('.cover')
    const xOutForm = document.querySelector('.fa-x')
    //events 
    requestEl.addEventListener('click', requestForm)
    xOutForm.addEventListener('click', outTheForm)
    
    burger.toggleAttribute("false");
    
    // functions 
    function outTheForm(){
        formlayout.style.display = "none"
        console.log("i'm out")
    }
    function requestForm(){
        formlayout.style.display = "block"
        console.log("what are you diong")
    }
}
// coding the time.
//showTime();

menuSlide();
form();

