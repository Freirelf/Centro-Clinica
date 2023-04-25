window.addEventListener('scroll', onScroll)

function onScroll (){
  showNavOnScroll()
  showBackToTopButtonOnScroll()


}

function showNavOnScroll () {
  const navigation = document.getElementById('navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll () {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}



function openMenu() {
  document.body.classList.add('menu-expended')
}

function closeMenu() {
  document.body.classList.remove('menu-expended')
}

function cardOpen (){
  const openCard = document.querySelectorAll('.Card');
  
  openCard.forEach(function(open) {
    open.addEventListener('click', function() {
      open.classList.add('card-expended');
    });

  });
}

function closeCard() {
  const closeCard = document.querySelectorAll('.Card')

  closeCard.forEach(function(close) {
    close.addEventListener('click', function() {
      close.classList.remove('card-expended')
    })
  })
}
