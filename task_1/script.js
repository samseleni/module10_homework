// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
// При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    const icon = document.querySelector('.bi-arrow-down-left-circle');
    const iconFill = document.querySelector('.bi-arrow-down-left-circle-fill');
    if (getComputedStyle(icon).display != 'none') {
        icon.style.display = 'none';
        iconFill.style.display = 'inline';
    } else {
        icon.style.display = 'inline';
        iconFill.style.display = 'none';
    } 
});