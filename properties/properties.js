const module = document.querySelector(".module");
const smallsizes = document.querySelectorAll("section ul li img");
const bigsize = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');


smallsizes.forEach(smallsize =>{
    smallsize.addEventListener("load", ()=>{    
        let div = document.createElement("div");
        let addclass = div.classList;
        addclass.add("proImg")
        div.appendChild(smallsize)
        console.log("i'm here")
    })
})

smallsizes.forEach(smallsize =>{
    smallsize.addEventListener("click", ()=>{
        module.classList.add("open");
        bigsize.classList.add("open");
        const smallsizespic = smallsize.getAttribute("data-original");
        bigsize.src = smallsizespic;
        const text = smallsize.alt;
        imgText.textContent = text
        console.log(smallsize.alt)
    })
})
module.addEventListener("click", (e) =>{
    if (e.target.classList.contains('module')){
        module.classList.remove('open');
        bigsize.classList.remove("open");
    }
})
