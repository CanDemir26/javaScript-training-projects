//Araç modellerini,bilgilerini ve linkleri nesne şeklinde tanımlayalım.

var models = [
    {
        name : 'Bmw 418d',
        image : 'images/bmw.jpeg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    
    
    {
        name : 'Mercedes',
        image : 'images/mercedes.jpeg',
        link : 'http://www.arabalar.com.tr/mercedes/slc/2018/180-1-6-amg'
    },
    {
        name : 'Porsche',
        image : 'images/porsche.jpeg',
        link : 'http://www.arabalar.com.tr/porsche/cayman/2014/3-0'
    }
];

//Fotoğrafların sırayla gösterilmesi için index belirleyelim.

var index = 0;
// Model sayısının uzunluğunu tanımlayalım. Hesaplama yaparken işimize yarayacak.
var slaytCount = models.length;

//Index parametresini showSlide fonksiyonuna gönderelim.

showSlide(index);

// Önceki fotoğrafa geçmek için sayfaya eklediğimiz butonu kullanalım. Butona eventListener ekleyelim ve her tıklandığında index numarasını bir 
// azaltarak önceki fotoğrafa geçelim.
document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

// Sonraki fotoğrafa geçmek için sayfaya eklediğimiz bir diğer butonu kullanalım. Butona eventListener ekleyelim ve her tıklandığında index numarasını bir 
// arttırarak sonraki fotoğrafa geçelim.

document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

//showSlide fonksiyonu ile index parametresini kullanarak fotoğraflar hangi fotoğrafa geçeceğimizi belirlemek için
//slaytCount ile işlem yapalım.
function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }
//Sayfamızdaki araç bilgilerini içeren nesneleri çağıralım.
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}
