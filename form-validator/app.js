// Form içerisinde kontrol etmek istediğimiz elementleri tanımlayalım.
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("re-password");

//Yanlış doldurulan yada boş kalan input bölümleri varken submit olunduğunda kullanıcıyı uyarmak için bir error fonksiyonu tanımlayalım.

function error(input, message) {
    // Kullanıcıyı uyarmak için input kenarlarını kırmızı renge çevirelim.
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    //İnputun hemen altına hata mesajı ekleyelim.
    div.innerText = message;
    div.className = "invalid-feedback";
}
//Girilen input değeri şartları karşılıyorsa input kenarlarını yeşil yapmak için success fonksiyonu tanımlayalım.
function success(input) {
    input.className = "form-control is-valid";
}
// Girilen email adresinin formatını kontrol etmek için bu fonksiyonu kullanalım. 
function checkEmail(input) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, "Hatalı bir mail adresi");
    }
}

//Input alanının boş olup olmadığını kontrol edelim. Eğer boş ise kullanıcıyı uyaralım.
function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === "") {
            error(input, `${input.id} Is required`);
        } else {
            success(input);
        }
    });
}
// Input değerlerini aşağıda belirlediğimiz kurallar ile karşılaştıralım.
function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} En az ${min} olmalı`);
    } else if (input.value.length > max) {
        error(input, `${input.id} En fazla ${max} olmalı`);
    } else {
        success(input);
    }
}
// Password ve repassword girdilerini karşılaştıralım. Aynı değillerse kullanıcıyı uyaralım.
function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, "Parolalar eşleşmiyor");
    }
}
// Fonksiyonları,parametreleri ve form kurallarını belirleyelim.
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, repassword]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 12);
    checkPasswords(password, repassword);
});
