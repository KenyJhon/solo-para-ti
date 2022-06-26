let btnSi = document.getElementById('btnSi')
let btnNo = document.getElementById('btnNo')

btnSi.onclick = () => {
    alert('Eres genial, gracias por aceptarme Belen... <3')
    window.location = 'https://www.youtube.com/watch?v=3LSpFmja7Qk&ab_channel=armxndo'
}

btnNo.onclick = () => {
    var width = window.innerWidth
    var height = window.innerHeight

    let newWidth = (Math.random() * width)
    let newHeight = (Math.random() * height)

    btnNo.style.position = 'absolute'
    btnNo.style.left = newWidth + 'px'
    btnNo.style.top = newHeight + 'px'
}