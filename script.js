const buttonEl = document.querySelector('.open-modal');
const modalEl = document.querySelector('.modal');
const closerEl = document.querySelector('.closer');

buttonEl.addEventListener('click', () => {
    modalEl.classList.add('active')
    buttonEl.disabled = true;
})
closerEl.addEventListener('click' , () => {
    modalEl.classList.remove('active')
    buttonEl.disabled = false;
})