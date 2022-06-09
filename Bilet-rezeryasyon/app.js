// Sayfa içerisindeki öğeleri  seçelim.

const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount')
const select = document.getElementById('movie')
const seats =  document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

// Koltuk reserved değil ise koltuğu seçelim ve selected class'ı ekleyelim.
container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();
       


    }
})

// Seçilen koltukların toplam fiyatını, seçilen filme göre yeniden hesaplatalım.
select.addEventListener('change', function(e){
  calculateTotal();
});

// Toplam creti hesaplayalım.
function calculateTotal(){

    // Container içerisinden seçili koltukları alalım.
    const selectedSeats = container.querySelectorAll('.seat.selected')
// Seçilmiş koltukları ve tüm koltukları aktarmak için birer array oluşturalım.
    const selectedSeatsArr = [];
    const seatsArr = [];

    // ForEach metodu ile seçilmiş koltukları array içerisine aktaralım.
    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });

    // Aynı şekilde tüm koltukları da array içerisine aktaralım.
    seats.forEach(function(seat){
        seatsArr.push(seat);
    })

    // selectedSeatsIndex isminde bir let oluşturup seçili koltukların index bilgilerini map metodu ile seatsArr içerisinden alalım.
    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })

    // Seçili koltukların toplam ücretini koltuk sayısını movie value ile elde edip fiyat bilgisi kısmına yazalım.
    let selectedSeatCounted = selectedSeats.length;
    count.innerText = selectedSeatCounted;
    amount.innerText = selectedSeatCounted * select.value;

    // Seçilen koltukları local storage içerisine kaydedelim.
    saveToLocalStorage(selectedSeatIndex);
}

// Önceden localStorage içerisine kaydettiğimiz bilgileri alalım. 
function getFromLocalStorage(){
    // JSON formatında kaydettiğimiz index bilgilerini sayfada kullanabileceğimiz hale getirelim.
const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

// Kaydettiğimiz selected seats sayı bilgisi varsa ve 0'dan büyükse her bir seat'in index bilgisine bakalım.
// Index bilgisi -1'den büyükse o index numarasındaki elemana selected class'ı ekleyelim.
if(selectedSeats != null && selectedSeats.length > 0){
  seats.forEach(function(seat, index){
      if(selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
      }
  })
}

// localStorage'dan seçilen filmin index numarasını da almak için const oluşturalım.
const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

// Eğer filmin index numarası null değilse alalım.
if(selectedMovieIndex != null){
    select.selectedIndex = selectedMovieIndex;
}
}

// Seçilen koltuk ve film index numaralarını ayrı ayrı localStorage'a ekleyelim.
function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}