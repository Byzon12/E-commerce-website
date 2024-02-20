document.addEventListener('DOMContentLoaded', () => {
    const Navbar = document.querySelector('.Navbar');
    const Bar = document.querySelector('.bar');
    const Close =document.querySelector('.close')
    var MainImage= document.getElementById("mainImg")
    var smallImage = document.getElementsByClassName("smallImg")

    smallImage[0].addEventListener('click', ()=>{
        MainImage.src =smallImage[0].src
       
    })
    smallImage[1].addEventListener('click', ()=>{
        MainImage.src =smallImage[1].src
       
    })
    smallImage[2].addEventListener('click', ()=>{
        MainImage.src =smallImage[2].src
       
    })
    smallImage[3].addEventListener('click', ()=>{
        MainImage.src =smallImage[3].src
       
    })
   
   
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
