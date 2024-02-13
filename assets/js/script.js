const linkCategories = document.getElementById('link_categories');
const cardCategories = document.querySelector('.card-categories');
const hamburger = document.querySelector('.hamburger-wrapper');
const topbar = document.querySelector('.topbar');
const topbarLink = document.querySelectorAll('.topbar-link .nav-link');
const body = document.querySelector('#home');
const scrollTop = document.querySelector('.scroll-top');

hamburger.addEventListener('click', function() {
    topbar.classList.toggle('hide');
    body.classList.toggle('active');
});

topbarLink.forEach(link => {
    link.addEventListener('click', function() {
        topbar.classList.toggle('hide');
        body.classList.toggle('active');
    })
});

linkCategories.addEventListener('mouseover', function() {
    cardCategories.classList.add('show');
});

linkCategories.addEventListener('mouseout', function() {
    cardCategories.classList.remove('show');
});

cardCategories.addEventListener('mouseover', function() {
    cardCategories.classList.add('show');
});

cardCategories.addEventListener('mouseout', function() {
    cardCategories.classList.remove('show');
});

$(window).scroll(function() {
    let wScroll = $(this).scrollTop();

    if (wScroll > 400 ) {
        scrollTop.classList.remove('hide');
    }

    if (wScroll < 400 ) {
        scrollTop.classList.add('hide');
    }
});