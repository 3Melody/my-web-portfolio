let sections = document.querySelectorAll('section');
const sec1 = document.getElementById('sec1');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        
        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
};

window.addEventListener("load",function(){
    sec1.classList.add('show-animate');
})