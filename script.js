
const wrapper= document.querySelector('.wrapper');
const registerlink= document.querySelector('.register-link');
const loginlink= document.querySelector('.login-link');
const btnnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');
const barclose = document.querySelector('.bar');
const navigation = document.querySelector('.navigation');
const closebar = document.querySelector('.close-bar');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active')
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
});

btnnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})

if(barclose){
    barclose.addEventListener('click', ()=>{
        navigation.classList.add('active')
    })
    if(closebar){
        closebar.addEventListener('click', ()=>{
            navigation.classList.remove('active')
        })
    }
}