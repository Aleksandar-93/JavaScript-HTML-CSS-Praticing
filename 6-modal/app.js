// select modal-btn,modal-overlay,close-btn
const openModelBtn = document.querySelector('.modal-btn');
const modelOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// listen for click events on modal-btn and close-btn

// when user clicks modal-btn add .open-modal to modal-overlay
openModelBtn.addEventListener('click', () =>{
    modelOverlay.classList.add('open-modal');
});

// when user clicks close-btn remove .open-modal from modal-overlay
closeBtn.addEventListener('click', () =>{
    modelOverlay.classList.remove('open-modal');
});