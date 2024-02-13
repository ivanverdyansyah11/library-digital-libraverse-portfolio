const linkCategories = document.getElementById('link_categories');
const cardCategories = document.querySelector('.card-categories');
const hamburger = document.querySelector('.hamburger-wrapper');
const topbar = document.querySelector('.topbar');
const body = document.querySelector('#home');

hamburger.addEventListener('click', function() {
    topbar.classList.toggle('hide');
    body.classList.toggle('active');
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

// $('.page-scroll').on('click', function(e) {
//     let href = $(this).attr('href');
//     let element = $(href);
//     $('html').scrollTop(element.offset().top - 118);
//     e.preventDefault();
// });