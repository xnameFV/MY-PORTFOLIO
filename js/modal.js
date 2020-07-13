let modal = document.getElementById('modal'),
    modalClose = modal.querySelector('.modal .modal__close'),
    openStyle = 'modal-open';

function setupModal() {
    modalClose.onclick = e => {
        closeModal();
    }

    window.onclick = e => {
        if (e.target == modal) 
            closeModal();
    }
}


function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove(openStyle);
}

function openModal() {
    modal.style.display = 'block';
    document.body.classList.add(openStyle);
}