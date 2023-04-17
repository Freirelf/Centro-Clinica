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
