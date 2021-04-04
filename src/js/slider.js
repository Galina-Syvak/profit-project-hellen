(() => {
    const refs = {
      openMenuBtn: document.querySelector('[btn-open]'),
      menuItem: document.querySelector('[reviews-item]'),
    //   menuIcon: document.querySelector('[data-icon]'),
    };
    
    refs.openMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menuItem.classList.toggle('is-close');
    //   refs.menuIcon.classList.toggle('is-open');
    //   refs.openMenuBtn.classList.toggle('is-open');
    }
})();
// var masPreview = document.getElementsByClassName('preview__item');
// var masReviews = document.getElementsByClassName('reviews__item');
// function previews(zm) {
//     // for ( i = 0; i < masReviews.length; i++) {
//     //     masReviews[i].style.display = 'none';
//     // }
//     masReviews[1].style.display = 'none';
// }
// function toggleClass() {
//     refs.menu.classList.toggle('is-open');
// }