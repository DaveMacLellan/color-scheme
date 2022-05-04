const getBtn = document.getElementById("get-btn")
getBtn.addEventListener("click", applyColors)

function applyColors() {
    const colorChoice = document.getElementById("color-picker").value.substring(1)
    const schemeSelect = document.getElementById("scheme-select").value

    let hexCol = document.getElementById("hexCodes")
    hexCol.innerHTML = ""
    let colorArray = []

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorChoice}&mode=${schemeSelect}&count=5`, {method: "GET"})
    .then(res => res.json())
    .then(data => {    
        colorArray = data.colors
        for(let i = 0; i < colorArray.length; i++){
            document.getElementById(`col${i + 1}`).style.backgroundColor = colorArray[i].hex.value
            hexCol.innerHTML += `<p>${colorArray[i].hex.value}</p>`
        }
    })    
}