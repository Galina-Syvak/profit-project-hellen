var masPreview = document.getElementsByClassName('preview__item');
var masReviews = document.getElementsByClassName('reviews__item');
var zz = 5;
function previews(zm) {
  if (zm < 7 ) {
    for ( i = 0; i < masReviews.length; i++) {
      masReviews[i].style.opacity = "0";
      masReviews[i].style.position = "absolute";
    }
    masReviews[zm].style.opacity = "1";
    masReviews[zm].style.position = "relative";
    zz = zm;
  }
  if (zm === 8) {
    for ( i = 0; i < masReviews.length; i++) {
      masReviews[i].style.opacity = "0";
      masReviews[i].style.position = "absolute";
    }
    zz = zz - 1;
    if (zz > 0) {
      masReviews[zz].style.opacity = "1";
      masReviews[zz].style.position = "relative";
    }
    if (zz === 0) {
      masReviews[zz].style.opacity = "1";
      masReviews[zz].style.position = "relative";
    }
    if (zz < 0) {
      zz = 6;
      masReviews[zz].style.opacity = "1";
      masReviews[zz].style.position = "relative";
    }
  }
  if (zm === 9) {
    for ( i = 0; i < masReviews.length; i++) {
      masReviews[i].style.opacity = "0";
      masReviews[i].style.position = "absolute";
    }
    zz = zz + 1;
    if (zz < 6) {
      masReviews[zz].style.opacity = "1";
      masReviews[zz].style.position = "relative";
    }
    if (zz === 6) {
      masReviews[zz].style.opacity = "1";
      masReviews[zz].style.position = "relative";
    }
    if (zz > 6) {
      zz = 0;
      masReviews[zz].style.opacity = "1";
      masReviews[zz].style.position = "relative";
    }
  }
}