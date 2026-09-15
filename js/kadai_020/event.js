const clickBtn = document.getElementById('btn');

const textBtn = document.getElementById('text');

clickBtn.addEventListener('click', () => {
    textBtn.textContent = 'ボタンをクリックしました';
});