window.addEventListener('scroll',reveal);
  function reveal(){
    var reveals= document.querySelectorAll('.reveal');
    for (var i=0;i<reveals.length;i++){
      var windowheight=window.innerHeight;
      var revealtop=reveals[i].getBoundingClientRect().top;
      var revealpoint=150;
      if (revealpoint < windowheight - revealtop){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }
  window.addEventListener('scroll',reveall);
  function reveall(){
    var reveals= document.querySelectorAll('.reveall');
    for (var i=0;i<reveals.length;i++){
      var windowheight=window.innerHeight;
      var revealtop=reveals[i].getBoundingClientRect().top;
      var revealpoint=150;
      if (revealpoint < windowheight - revealtop){
        reveals[i].classList.add('active1');
      }
      else{
        reveals[i].classList.remove('active1');
      }
    }
  }
  const navel=document.querySelector('.navbar');
  window.addEventListener('scroll',()=>{
    if (window.scrollY >= 56){
      navel.classList.add('navbar-scrolled')
    }
    else if (window.scrollY < 56){
      navel.classList.remove('navbar-scrolled')
    }
  })