const getColor =()=>{
    // hex code
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#"+ randomNumber.toString(16)
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("colorCode").innerText = randomCode

    navigator.clipboard.writeText(randomCode)
}

document.getElementById("clickMe").addEventListener(
    "click", getColor
)


//initial call
getColor()