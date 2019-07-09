// Your code goes here

/*  
    [ ] `mouseover`
	[ ] `keydown`
    [ ] `wheel`
	[ ] `drag / drop`
	[ ] `load`
	[ ] `focus`
	[ ] `resize`
	[ ] `scroll`
	[ ] `select`
    [ ] `dblclick`
*/


// mouseover event

const navLink = document.querySelectorAll('.nav-link');
console.log(navLink);

navLink.forEach(item =>{
    item.addEventListener('mouseover', ev =>{
        ev.target.style.fontSize = '2rem';
    });
    

});

// mouseleave event
navLink.forEach(item =>{
    item.addEventListener('mouseleave', ev =>{
        console.log('mouse left');
        ev.target.style.fontSize = "";
    });
});

// click event
const logo = document.querySelector('.logo-heading');
console.log(logo);
logo.addEventListener('click', ev =>{
    console.log('clicked');
    ev.target.style.color = "crimson";
    ev.target.style.fontWeight = "oblique";
    setTimeout(function(){
        console.log('reset')
        ev.target.style.color = "";
        ev.target.style.fontWeight = "";
    }, 500);
});



// dragstart
const funBus = document.querySelector('.intro img');
console.log(funBus);

funBus.addEventListener('dragstart', ev =>{
    console.log('drag');
    ev.target.style.opacity = 1;
});

// dragend
funBus.addEventListener('dragend', ev =>{
    console.log('dragged')
    ev.target.style.opacity = "";
});

//load event
window.addEventListener('load', ev =>{
    document.querySelector('.main-navigation').style.backgroundColor = "dodgerblue";
    setTimeout(function(){
        document.querySelector('.main-navigation').style.backgroundColor = "";
    },1000);

});


// scroll
window.addEventListener("scroll", function(){
    const allParas = document.querySelectorAll("p");
    allParas.forEach(function(ev){
        ev.style.color = "pink";
    });
});


// keydown

window.addEventListener('keydown', function(event){
    document.querySelectorAll("h2").forEach(ev =>{
        ev.style.color = "salmon";
    });
});


// keyup

window.addEventListener('keyup', event =>{
    document.querySelectorAll("h2").forEach(ev =>{
        ev.style.color = "";
    });
});

// "dblclick"
const images =  document.querySelectorAll(".img-content");
images.forEach(event =>{
    event.addEventListener("dblclick", ev3 =>{
        ev3.target.style.border = "10px solid green";
     });
});


