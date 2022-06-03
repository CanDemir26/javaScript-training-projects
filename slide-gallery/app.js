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

var index = 0;
var slaytCount = models.length;

showSlide(index);

document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});


function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}
