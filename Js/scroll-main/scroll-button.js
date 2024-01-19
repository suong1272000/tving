const page = document.querySelector('.category-list');

const leftBtn = document.querySelector('.left-btn');
leftBtn.onclick = () => {
    page.scrollTo({ left: 0, behavior: 'smooth'});
}
const rightBtn = document.querySelector('.right-btn');
rightBtn.onclick = () => {
    page.scrollTo({left : page.scrollWidth, behavior: 'smooth'});
}

const banner = document.querySelector('.swiper-wrap');

const bannerLeftBtn = document.querySelector('.banner-left-btn');
bannerLeftBtn.onclick = () => {
    banner.scrollTo({ left: 0, behavior: 'smooth'});
}
const bannerRightBtn = document.querySelector('.banner-right-btn');
bannerRightBtn.onclick = () => {
    banner.scrollTo({ left: , behavior: 'smooth'});
}
