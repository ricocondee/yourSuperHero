const punisher = document.getElementById('punisher');
const daredevil = document.getElementById('daredevil');
const starlord = document.getElementById('starlord');
const modalP = document.getElementById('modal-punisher');
const modalD = document.getElementById('modal-daredevil');
const modalS = document.getElementById('modal-starlord');
const closeP = document.getElementById('modal-close-punisher');
const closeD = document.getElementById('modal-close-daredevil');
const closeS = document.getElementById('modal-close-starlord');

punisher.addEventListener('click', () => {
    modalP.classList.remove('hidden');
    modalP.classList.add('visible');
})

daredevil.addEventListener('click', () => {
    modalD.classList.remove('hidden');
    modalD.classList.add('visible');
})


starlord.addEventListener('click', () => {
    modalS.classList.remove('hidden');
    modalS.classList.add('visible');
})

closeP.addEventListener('click', () => {
    modalP.classList.remove('visible');
    modalP.classList.add('hidden');
})

closeD.addEventListener('click', () => {
    modalD.classList.remove('visible');
    modalD.classList.add('hidden');
})

closeS.addEventListener('click', () => {
    modalS.classList.remove('visible');
    modalS.classList.add('hidden');
})