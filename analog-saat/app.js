// elemanlarımızı seçelim

const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

// akrep,yelkovan ve saniye elemanlarını Date methodu ile
//birleştirerek,elemanların kaç derecelik açıyla hareket edeceğini hesaplayalım.

function tikTak(){
    
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

    sec.style.transform = `translate(-50%)rotate(${180 + (second * 6)}deg)`
    min.style.transform = `translate(-50%)rotate(${180 + (minute * 6)}deg)`
    hours.style.transform = `translate(-50%)rotate(${180 + (hour * 30)}deg)`
}

setInterval(tikTak, 1000);
