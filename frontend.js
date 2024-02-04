document.addEventListener('DOMContentLoaded', () => {
    const Navbar = document.querySelector('.Navbar');
    const Bar = document.querySelector('.bar');
    const Close =document.querySelector('.close')
if(Bar)
{
    Bar.addEventListener('click', () => {
        Navbar.classList.add('active');
    });

    Close.addEventListener('click', ()=>{
        Navbar.classList.remove('active');
    })

}
});
