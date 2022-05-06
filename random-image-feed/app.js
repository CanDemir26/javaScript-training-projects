const container = document.querySelector('.container') // Fotoğrafları içerisine ekleyeceğimiz container divini tanımlayalım.
const unsplashURL = 'https://source.unsplash.com/random/' // Fotoğrafları alacağımız URL adresini tanımlayalım.
const rows = 9 // Fotoğraf ekleyeceğimiz satır sayısını belirleyelim.

// For döngüsü ile URL'den her satırda 3 tane olacak şekilde fotoğrafları seçelim.
for(let i = 0; i<rows*3; i++){
    // Çekeceğimiz her fotoğraf için bir img elementi oluşturalım. 
    const img = document.createElement('img')
    // URL içerisinden getRandomSize fonksiyonu ile fotoğrafları arayıp bulalım.
    img.src = `${unsplashURL}${getRandomSize()}`
    // Oluşturduğumuz img elementlerini container içerisine ekleyelim.
    container.appendChild(img)
}


function getRandomNumber(){
    // 300px olan fotoğrafları ayıklamak math.floor methodunu kullanalım.
    return Math.floor(Math.random()*10) + 300
}
// 300x300 px olacak şekilde fotoğrafları seçelim.
function getRandomSize() {
    return`${getRandomNumber()}x${getRandomNumber()}`
}

