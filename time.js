
function showTime(){ 
    let today = new Date();
    let hourNow = today.getHours();
    let minNow = today.getMinutes();
    let secNow = today.getSeconds();
    let greeting= document.querySelector('.date')

    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0' : '')+n;
    }
    if (hourNow <= 12)  {
        greeting.innerHTML = hourNow +":" + addZero(minNow)+":"+addZero(secNow)+ " Good Morning"
    } else if(hourNow < 18){
        greeting.innerHTML = hourNow +":" + addZero(minNow)+":"+addZero(secNow)+ " Afternoon"        
    } else{
        greeting.innerHTML = hourNow +":" + addZero(minNow)+":"+addZero(secNow)+ " Good Evening"
    }
    setTimeout(showTime, 1000);
}
showTime();