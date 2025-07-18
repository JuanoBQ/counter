document.getElementById("suma").addEventListener("click",function(){
    const contador = document.getElementById("contador")
    contador.textContent = parseInt(contador.textContent) + 1
    if (contador.textContent>=10) contador.style.color = "blue"
    else if(contador.textContent<10) contador.style.color = "black"
})

document.getElementById("resta").addEventListener("click",function(){
    const contador = document.getElementById("contador")
    contador.textContent = parseInt(contador.textContent) - 1
    if (contador.textContent>=10) contador.style.color = "blue"
    else if(contador.textContent<10) contador.style.color = "black"
})

document.getElementById("cero").addEventListener("click",function(){
    const contador = document.getElementById("contador")
    contador.textContent = 0
    contador.style.color = "black"
})

