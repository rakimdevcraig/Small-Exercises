let btn = document.querySelector('#clickme')


  btn.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor
    // console.log('color changed')
    let paragraph = document.querySelector('#color')
    paragraph.innerText = document.body.style.backgroundColor
    document.body.prepend(paragraph)
  })

