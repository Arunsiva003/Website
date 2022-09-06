const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav=document.getElementById(navId);
    if(toggle || nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

function changebg(color){
    document.body.style.background='bgchange';
}





showMenu('toggleId','menu');


//Active and remove active

const navlink = document.querySelectorAll('.na_link');
navlink.forEach(n=>n.classList.remove('active'))
function linkAction(){
    //navmenu.classList.remove('show');//to remove active underline
    navlink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navmenu = document.getElementById("menu");
    navmenu.classList.remove('show');

}

navlink.forEach(n => n.addEventListener('click',linkAction))