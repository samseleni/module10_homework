//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const widthDevice = window.screen.width;
    const heightDevice = window.screen.height;
    const widthInner = window.innerWidth;
    const heightInner = window.innerHeight;
    const widthClient = document.documentElement.clientWidth;
    const heigthClient = document.documentElement.clientHeight;
    alert(`Размер экрана устройства: ${widthDevice}*${heightDevice};
        Размер экрана с учетом области прокрутки: ${widthInner}*${heightInner};
        Размер экрана без учета полосы прокрутки: ${widthClient}*${heigthClient}.`);
})

