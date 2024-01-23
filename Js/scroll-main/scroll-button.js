const page = document.querySelector('.category-list');

const leftBtn = document.querySelector('.left-btn');
leftBtn.addEventListener("click", () => {
    page.scrollTo({ left: 0, behavior: 'smooth'});
});

const rightBtn = document.querySelector('.right-btn');
rightBtn.addEventListener("click", () => {
    page.scrollTo({left : page.scrollWidth, behavior: 'smooth'});
});


const bannerPage = document.querySelector('.banner');

const bannerLeftBtn = document.querySelector('.banner-left-btn');
bannerLeftBtn.addEventListener("click", () => {
    bannerPage.scrollBy({ left: -bannerPage.offsetWidth, behavior: 'smooth'});
});

const bannerRightBtn = document.querySelector('.banner-right-btn');
bannerRightBtn.addEventListener("click", () => {
    bannerPage.scrollBy({left: bannerPage.offsetWidth, behavior: 'smooth'});
});

const movieFirstPage = document.querySelector('.movie-first-list');

const firstLeftBtn = document.querySelector('.movie-first-left-btn');
firstLeftBtn.addEventListener("click", () => {
    movieFirstPage.scrollBy({ left: -bannerPage.offsetWidth, behavior: 'smooth'});
});

const firstRightBtn = document.querySelector('.movie-first-right-btn');
firstRightBtn.addEventListener("click", () => {
    movieFirstPage.scrollBy({left: bannerPage.offsetWidth, behavior: 'smooth'});
});

const movieSecondPage = document.querySelector('.movie-second-list');

const secondLeftBtn = document.querySelector('.movie-second-left-btn');
secondLeftBtn.addEventListener("click", () => {
    movieSecondPage.scrollBy({ left: -bannerPage.offsetWidth, behavior: 'smooth'});
});

const secondRightBtn = document.querySelector('.movie-second-right-btn');
secondRightBtn.addEventListener("click", () => {
    movieSecondPage.scrollBy({left: bannerPage.offsetWidth, behavior: 'smooth'});
});