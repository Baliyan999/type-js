// $('document').ready(function(){
//     var typed = new Typed('#typed',{
//         stringsElement: '#typed-strings',
//         backspeed: 40,
//         typeSpeed: 40
//     })
// })


let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 40, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 20, // Скорость удаления
    backDelay: 3000,
    // showCursor: false,
    loop: true // Указываем, повторять ли анимацию
});



// $(".element").typed({
//     typeSpeed: 0, // Скорость печати
//     backSpeed: 0, // Скорость удаления
//     startDelay: 0, // Задержка перед стартом анимации
//     backDelay: 500, // Пауза перед удалением 
//     loop: false, // Повтор (true или false)
//     loopCount: false, // Число повторов, false = бесконечно
//     showCursor: true, // Отображение курсора
//     attr: null, // Атрибут
//     callback: function(){ } // Функция вызываемая после окончания работы плагина
// });