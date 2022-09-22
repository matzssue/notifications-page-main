const markall = document.getElementById('mark')
const number = document.getElementById('number')
const notifications = document.querySelectorAll('div.noti')
const message = document.getElementById('message')
const notimsg = document.getElementById('msga')
const wrapper = document.getElementById('wrapper')


window.onload = function() {
    number.innerHTML = notifications.length
} 


notifications.forEach(elem => {
    elem.addEventListener('click', function onClick(event) {
    elem.style.backgroundColor = 'white'
    elem.querySelector('.reddot').style.display = 'none'
            })
        })

markall.addEventListener('click', markItAll)        

function markItAll() {
  notifications.forEach(elem => {
    elem.style.backgroundColor = 'white'
    elem.querySelector('.reddot').style.display = 'none'
    number.innerHTML = 0
  })
}

function numberOfNotifications() {
    let result = 0 
    for(i = 0; i < notifications.length; i++) {
        if(notifications[i].style.backgroundColor === 'white') {
            result = result + 1
        }
        else {result}
    }
       return number.innerHTML = notifications.length - result

    }

wrapper.addEventListener('click', numberOfNotifications)