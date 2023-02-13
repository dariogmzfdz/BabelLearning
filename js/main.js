const userBtn = document.getElementById('userBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('userModal');
const infoModal = document.getElementById('userInfoModal');
const editBtn = document.getElementById('editBtn');
const backBtn = document.getElementById('backBtn');

console.log(userBtn);

userBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

editBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    infoModal.style.display = 'block';
});

backBtn.addEventListener('click', () => {
    infoModal.style.display = 'none';
    modal.style.display = 'block';
});

