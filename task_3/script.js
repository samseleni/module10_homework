// Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
// Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
// При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
// Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.
// Добавить в чат механизм отправки гео-локации.


const wsUrl = "wss://echo-ws-service.herokuapp.com";

const output = document.querySelector('.output');
const btnSend = document.querySelector('.j-btn-send');
const btnGeo = document.querySelector('.j-btn-geo');

let websocket;
let link;

// Функция вывода сообщений
function writeToScreen(message, messageClass = '') {
    let pre = document.createElement("p");
    if (messageClass != '') pre.classList.add(messageClass);
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
    output.scrollTop = output.scrollHeight - output.clientHeight;
}

// Функция, выводящая текст об ошибке получения геолокации
const error = () => {
    writeToScreen('Невозможно получить ваше местоположение');
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
   const latitude  = position.coords.latitude;
   const longitude = position.coords.longitude;
   link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
   writeToScreen(`<a href=${link} target="_blank">Местоположение</a>`);
}

websocket = new WebSocket(wsUrl);
websocket.onopen = function(evt) {
    console.log('Соединение установлено');
};
websocket.onmessage = function(evt) {
    writeToScreen(evt.data, "output-answer");
};
websocket.onerror = function(evt) {
    writeToScreen(
    '<span style="color: red;">ERROR:</span> ' + evt.data
    );
};

// Обработчик на кнопку отправки сообщения и получения эхо-ответа и вывода соответствующих сообщений в чат
btnSend.addEventListener('click', () => {
    let input = document.querySelector('input').value;
    writeToScreen(input);
    websocket.send(input);
    document.querySelector('input').value = '';
});

// Обработчик на кнопку получения и вывода в чат геолокации
btnGeo.addEventListener('click', () => {
    link = ''; 
    if (!navigator.geolocation) {
        writeToScreen('Geolocation не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

