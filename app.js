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
let btn = document.querySelectorAll("#button")
let hostelLists = document.querySelectorAll('.universtiy')
let hostelListEls = document.querySelectorAll(".randomInfor li")
let boxELs = document.querySelectorAll('.div-box')
let module = document.querySelector('.modul-box')
let textHostle = document.querySelector('.textHostels')
let moduleBack = document.getElementById('modul-box-back')

function goback(){
    
    module.style.display = "none"
}
moduleBack.addEventListener('click', goback)



hostelLists.forEach( hostelList =>{
    hostelList.addEventListener("click", ()=>{
    module.style.display = "block"
    let parentEl = hostelList.parentElement
    console.log(parentEl.childNodes[1])

    

    hostelListEls.forEach( hostelListEl =>{
        console.log(hostelListEl.childNodes)
        let childList=hostelListEl.childNodes[2]
        boxELs[0].textContent = parentEl.childNodes[4].textContent
        boxELs[1].innerHTML = `<a class="number" href="tel:+2349066919332">Call an Angent in ${parentEl.childNodes[4].textContent}</a><br><br>`
    })

    })
})
