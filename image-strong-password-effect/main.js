const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const reg = /[a-z][A-Z][0-9]/ig;
    const result = input.match(reg);
    const length = input.length;
    if (result || length > 8) {
        background.style.filter = 'blur(0px)';
    }
});