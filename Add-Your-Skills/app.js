const skillsArea = document.getElementById('skillArea');
const input = document.getElementById('textarea');
const btn = document.getElementById('btn');
const btnDel = document.getElementById('btn-d')


btn.addEventListener('click', add)
btnDel.addEventListener('click', deleteAll)

function add(){
    if(input.value === ''){
        alert('Please Write Something')
    }else{
        const skill = document.createElement('p')
        skill.classList = "skill1 bg-primary d-inline mt-2";
        skill.innerText = input.value;
        skillsArea.appendChild(skill)
        input.value = "";
    }
}

skillsArea.addEventListener('click', function(e){
    if(e.target.classList.contains('skill1')){
        e.target.classList = 'skillR';
    }
})

function deleteAll (){
    var secim = confirm("Hepsini Kalıcı Olarak Silmek İstediğinize Emin Misiniz?");
    if (secim == true) {
        var deleted = document.querySelectorAll(".skill1");

        for(let i = 0; i<deleted.length; i++){
            deleted[i].classList='skillR';
        }
    }
}










