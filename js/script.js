const card = document.querySelector('.card-inner')

card.addEventListener('mouseover', function () {
  card.classList.toggle('is-flipped')
})

card.addEventListener('mouseout', function () {
  card.classList.toggle('is-flipped')
})