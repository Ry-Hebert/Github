let menuTog1 = document.querySelector('#ham-menu')
let menuTog2 = document.querySelector('#ham-menu-close')
let navTog = document.querySelector('#sm-menu-opt')

let pos3 = document.querySelector('#copyright')
pos3.textContent=`Copyright © ${new Date().getFullYear()} Ryan Hébert`

menuToggle = (x) =>
{
    if(x == 0)
    {
        menuTog1.classList.add('menuToggle')
        menuTog2.classList.remove('menuToggle')
        navTog.classList.remove('menuToggle')
        toggle = 1;
    }
    else
    {
        menuTog1.classList.remove('menuToggle')
        menuTog2.classList.add('menuToggle')
        navTog.classList.add('menuToggle')
        toggle = 0;
    }
}

menuTog1.addEventListener('click', () => menuToggle(0))
menuTog2.addEventListener('click', () => menuToggle(1))