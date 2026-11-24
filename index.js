const form = document.getElementById("form")
let colors = []

form.addEventListener("submit",(e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const dataObject = Object.fromEntries(formData)

    dataObject.color = dataObject.color.slice(1)

    fetch(`https://www.thecolorapi.com/scheme?hex=${dataObject.color}&mode=${dataObject.mode}`)
        .then(res => res.json())
        .then(data => {
            colors = data.colors
            renderColors(colors)
        })

})

 function renderColors(color){
     for(let i = 0; i < color.length; i++){
         document.getElementById(`con-${i + 1}`).style.background = `#${color[i].hex.clean}`
          document.getElementById(`con-text-${i + 1}`).textContent = `#${color[i].hex.clean}`

     }
 }