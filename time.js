
function showTime(){ 
    let today = new Date();
    let hourNow = today.getHours();
    let minNow = today.getMinutes();
    //let secNow = today.getSeconds();
    let greeting= document.querySelector('.date')
    
    //const amPm = hourNow >= 12 ?'PM' : 'AM';
    
    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0' : '')+n;
    }
    if (hourNow <= 12)  {
        greeting.innerHTML =`${hourNow}:${addZero(minNow)}:${addZero(secNow)} ${amPm}`
    } else if(hourNow < 18){
        greeting.innerHTML =`${hourNow}:${addZero(minNow)}:${addZero(secNow)} ${amPm}` 
    } else{
        greeting.innerHTML =`${hourNow}:${addZero(minNow)}:${addZero(secNow)} ${amPm} `
    }
    setTimeout(showTime, 1000);
}
//showTime();