const changeColor = (color) => {
    const umbrellaImg = document.getElementById("umbrellaImg");
    umbrellaImg.src = "Assets/Images/" + color + "_umbrella.png";

}

const ButtonColor = document.getElementsByClassName("ButtonColor")

for (let i = 0; i < ButtonColor.length; i++) {
    ButtonColor[i].addEventListener("click", (e) => {
        const color = e.target.id
        changeColor(color)
    })
}
