var masPreview = document.getElementsByClassName('preview__item');
var masReviews = document.getElementsByClassName('reviews__item');
function previews(zm) {
  for ( i = 0; i < masReviews.length; i++) {
    masReviews[i].style.opacity = "0";
    masReviews[i].style.position = "absolute";
  }
  masReviews[zm].style.opacity = "1";
  masReviews[zm].style.position = "relative";
}