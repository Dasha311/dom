// Получаем элементы, с которыми будем взаимодействовать
const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");
const menuBtn = document.querySelector(".menu-btn"); // Исправлено на одиночный выбор элемента
const navigation = document.querySelector(".navigation"); // Исправлено на одиночный выбор элемента
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".slide"); // Исправлено на ".slide" для соответствия класса в HTML

// Добавляем слушатель события клика по иконке меню
menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');

    // Закрываем слайдбар при клике на другую область страницы
    document.addEventListener('click', function(event) {
        // Проверяем, что клик не произошел внутри nav и не на иконке меню
        if (!nav.contains(event.target) && event.target !== menuIcon) {
            nav.classList.remove('open');
        }
    });
});
