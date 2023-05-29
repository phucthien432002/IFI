var list = document.querySelector('#slider .list');
var items = document.querySelectorAll('#slider .list .item');
var dots = document.querySelectorAll('#slider .dots li');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var active = 0;
var countItem = items.length;
var autoRef = setInterval(() => {next.click()}, 5000);
next.onclick = function nextItem() {
    if (active + 1 >= countItem) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlide();
};

prev.onclick = function prevItem() {
    if (active - 1 < 0) {
        active = countItem - 1;
    } else {
        active = active - 1;
    }
    reloadSlide();
};

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlide();
    });
});

function reloadSlide() {
    items.forEach((item, index) => {
        if (index === active) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    var activeDot = document.querySelector('#slider .dots li.active');
    activeDot.classList.remove('active');
    dots[active].classList.add('active');
}

var proList = document.querySelector('#header .header-bar .navigation-placeholder .product-list');
var toolList = document.querySelector('#header .header-bar .navigation-placeholder .tool-box');
var supList = document.querySelector('#header .header-bar .navigation-placeholder .support-box');

var proMenu = document.querySelector('#header .header-bar .navigation-placeholder .product-list .dropdown-menu');
var toolMenu = document.querySelector('#header .header-bar .navigation-placeholder .tool-box .dropdown-menu');
var supMenu = document.querySelector('#header .header-bar .navigation-placeholder .support-box .dropdown-menu');

var dropCheck = document.querySelector('#header .header-bar .logo-placeholder .dropbtn');
var nav = document.querySelector('#header .header-bar .navigation-placeholder');



proList.onclick = function(){
    if(proMenu.classList.contains('active')){
        proMenu.classList.remove('active')
    } else {
        proMenu.classList.add('active')
    }
}
toolList.onclick = function(){
    if(toolMenu.classList.contains('active')){
        toolMenu.classList.remove('active')
    } else {
        toolMenu.classList.add('active')
    }
}
supList.onclick = function(){
    if(supMenu.classList.contains('active')){
        supMenu.classList.remove('active')
    } else {
        supMenu.classList.add('active')
    }
}
dropCheck.onclick = function() {
    if (nav.classList.contains('show')) {
      nav.classList.remove('show');
      proMenu.classList.remove('active');
      toolMenu.classList.remove('active');
      supMenu.classList.remove('active')
    } else {
      nav.classList.add('show');
    }
  };