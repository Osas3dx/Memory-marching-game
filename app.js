

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
let boxELs = document.querySelector('.li-box')
let module = document.querySelector('.modul-box')
let textHostle = document.querySelector('.textHostels')



hostelLists.forEach( hostelList =>{
    hostelList.addEventListener("click", (e)=>{
    module.style.display = "block"
    hostelListEls.forEach( hostelListEl =>{
        console.log(hostelListEl.childNodes[2])
    })
    let tarlist = e.target.id 
    if(hostelLists.length === hostelListEl.length){
        console.log(`W ${hostelLists.length} and ${hostelListEl.length}`)
    }
    console.log(hostelListEl.length)
    boxELs.textContent = tarlist + tarlist
    tarlist.addEventListener("click", (e)=>{
        console.log('what is the hell')
    })
        

    })
})

function fib(n){
    if(n <= 2) return 1;
    return fib(n -1) + fib(n-2);
}

console.log(fib(1))