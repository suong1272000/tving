import { data } from "../data/data.js";

const bannerData = data.data.bands[0];
const categoryData = data.data.bands[1];


//card 추가하기
// const bannerArr = bannerData.items.forEach((value) => {
//     function renderCard(){
//         const banner = document.querySelector('.banner')
//         banner.insertAdjacentHTML('beforeend',`
//         <div class="swiper-slide-box">
//                 <img class="banner-img" src="${value.imageUrl}" alt="배너이미지">
//                 <img class="title-img" src="${value.titleImageUrl}" alt="타이틀">
//                 <p>${value.description[0]}</p>
//                 <p>${value.description[1]}</p>
//         </div>
//         `)}
//     return renderCard()
// })

//card 추가하기
const categoryArr = categoryData.items.forEach((value) => {
    function renderCard(){
        const categoryList = document.querySelector('.category-list')
        categoryList.insertAdjacentHTML('beforeend',`
        <div class="category-list__list-slide">
        <img src="${value.imageUrl}" alt="">
        </div>
        `)}
    return renderCard()
})

const movieData = data.data.bands[4];
const moviesecData = data.data.bands[5];

//card 추가하기
const movieArr = movieData.items.forEach((value) => {
    function renderCard(){
        const movieFirstList = document.querySelector('.movie-first-list')
        movieFirstList.insertAdjacentHTML('beforeend',`
        <div class="swiper-slide-box">
            <img class="movie-img" src="${value.imageUrl}" alt="포스터이미지">
        </div>
        `)}
    return renderCard()
})

//card 추가하기
const movieSecArr = moviesecData.items.forEach((value) => {
    function renderCard(){
        const movieSecList = document.querySelector('.movie-second-list')
        movieSecList.insertAdjacentHTML('beforeend',`
        <div class="swiper-slide-box">
            <img class="movie-img" src="${value.imageUrl}" alt="포스터이미지">
        </div>
        `)}
    return renderCard()
})

