const blockRed = document.querySelector('.block--red');
console.log(blockRed);

const blockBlue = document.querySelector('.block--blue');
console.log(blockBlue);

const blockGreen = document.querySelector('.block--green');
console.log(blockGreen);

const blockPink = document.querySelector('.block--pink');
console.log(blockPink);

const blockGray = document.querySelector('.block--gray');
console.log(blockGray);




blockRed.addEventListener('click', event =>{
    console.log('clicked');
    event.target.style.top = "-65px";
    setTimeout(function(){
        event.target.style.top = "";
    },500);
});

blockBlue.addEventListener('click', event =>{
    console.log('clicked');
    event.target.style.top = "-200px";
    setTimeout(function(){
        event.target.style.top = "";
    },500);
});

blockGreen.addEventListener('click', event =>{
    console.log('clicked');
    event.target.style.top = "-310px";
    setTimeout(function(){
        event.target.style.top = "";
    },500);
});

blockPink.addEventListener('click', event =>{
    console.log('clicked');
    event.target.style.top = "-425px";
    setTimeout(function(){
        event.target.style.top = "";
    },500);
});

blockGray.addEventListener('click', event =>{
    console.log('clicked');
    event.target.style.top = "-550px";
    setTimeout(function(){
        event.target.style.top = "";
    },500);
});


// block.forEach( ev =>{
//     ev.addEventListener('click', event =>{
//         console.log('clicked');
//         event.target.style.top = "-65px";
//         setTimeout(function(){
//             event.target.style.top = "";
//         },500);
//     })
// })