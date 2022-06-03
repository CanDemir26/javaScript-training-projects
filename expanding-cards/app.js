//Elemanlarımızı seçelim.
const panels = document.querySelectorAll('.panel');

//forEach metodu ile elemanlar üzerinde dolaşıp her birine event listener ekleyelim.
panels.forEach((panel) => {
panel.addEventListener('click',()=>{
    //fotoğrafa tıkladığımızda active klasını silip sonraki fotoğrafa ekleyelim.
    removeActiveClasses()
    panel.classList.add("active")
    
})
})

function removeActiveClasses(){
    panels.forEach((panel) =>{
        panel.classList.remove("active");
    })
}