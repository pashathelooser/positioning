const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const overlay = document.querySelector('#modalOverlay');
const progressFill = document.querySelector("#progressFill")

openBtn.addEventListener('click', function() {
    overlay.classList.add('active');

    progressFill.style.width = '0%';

    setTimeout(() => {
        progressFill.style.width = '90%';
    }, 100);
});

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('active');
});

