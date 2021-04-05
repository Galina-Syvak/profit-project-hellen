var masPreview = document.getElementsByClassName('preview__item');
var masReviews = document.getElementsByClassName('reviews__item');
function previews(zm) {
    for ( i = 0; i < masReviews.length; i++) {
      (() => {
        const refs = {
          closeBtn: masReviews[i],
          openBtn: masPreview[i]
        };
        
        refs.closeBtn.addEventListener(toggleMenu);
      
        function toggleMenu() {
          refs.closeBtn.classList.toggle('is-close');
        }
      })();
    }
  
    (() => {
      const refs = {
        closeBtn: masReviews[zm],
        openBtn: masPreview[zm]
      };
      
      refs.openBtn.addEventListener(toggleMenu);
    
      function toggleMenu() {
        refs.openBtn.classList.toggle('is-open');
      }
    })();
}
