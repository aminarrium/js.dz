function myImg() {
    let elem = document.getElementById('img_1'); 
    let style = getComputedStyle(elem); 
    if (style.display === 'none') {
      document.getElementById('img_1').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('img_1').style.display='none';
    }
  }