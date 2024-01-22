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
