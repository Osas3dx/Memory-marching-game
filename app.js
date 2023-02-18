

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
// coding the time.
//showTime();

menuSlide();

