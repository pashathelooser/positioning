const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const overlay = document.querySelector('#modalOverlay');

openBtn.addEventListener('click', function() {
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('active');
});