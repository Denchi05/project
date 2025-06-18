// script.js
const orderBtn = document.querySelector('.order-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('#orderForm');
const nameInput = form.querySelector('input[name="name"]');
const phoneInput = form.querySelector('input[name="phone"]');
const consentCheckbox = form.querySelector('#consent');
const submitBtn = form.querySelector('.submit-btn');

// Показать модалку
orderBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // запрет скролла
});

// Скрыть модалку
closeBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
});

// Проверка условий для активации кнопки
function validateForm() {
  if (nameInput.value.trim() !== '' && phoneInput.value.trim() !== '' && consentCheckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Слушаем изменения
[nameInput, phoneInput, consentCheckbox].forEach(el => {
  el.addEventListener('input', validateForm);
  el.addEventListener('change', validateForm);
});

// Отправка формы (временно — просто закрываем окно)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
  alert("Спасибо за заказ!");
});