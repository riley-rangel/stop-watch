var $seconds = document.querySelector('#seconds')
var $start = document.querySelector('#start')
var time = 0

$start.addEventListener('click', function() {
  $seconds.textContent = 0
  setInterval(increment, 1000)
})

function increment() {
  time = time + 1
  $seconds.textContent = time
}
