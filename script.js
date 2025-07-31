function generateColor(){
  const randomColor = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = `#${randomColor}`
  document.querySelector('.color').innerHTML = `#${randomColor}`
}

document.querySelector('.generate').addEventListener('click', generateColor)