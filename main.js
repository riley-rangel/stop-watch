var $seconds = document.querySelector('#seconds')
var $start = document.querySelector('#start')
var time = 0
var status = 'off'

$start.addEventListener('click', function() {
  if (status === "off") {
    status = "on"
    $start.textContent = "Stop"
    $start.style.backgroundColor = "#f44336"
    counter = setInterval(increment, 1000)
  }
  else {
    status = "off"
    $start.textContent = "Start"
    $start.style.backgroundColor = "#2196f3"
    clearInterval(counter)
  }
})

function increment() {
  time = time + 1
  $seconds.textContent = time
}
