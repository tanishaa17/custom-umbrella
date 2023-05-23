const changeColor = (color) => {
    const umbrellaImg = document.getElementById("umbrellaImg");
    umbrellaImg.src = "Assets/Images/" + color + "_umbrella.png";

}


const colorDiv = document.getElementById("colorDiv");

const btn1 = document.createElement("button");
btn1.setAttribute("id", "blue")
btn1.setAttribute("class", "buttonColor")
const btn2 = document.createElement("button");
btn2.setAttribute("id", "pink")
btn2.setAttribute("class", "buttonColor")
const btn3 = document.createElement("button");
btn3.setAttribute("id", "yellow")
btn3.setAttribute("class", "buttonColor")


colorDiv.append(btn1, btn2, btn3);



const buttonColor = document.getElementsByClassName("buttonColor")

for (let i = 0; i < buttonColor.length; i++) {
    buttonColor[i].addEventListener("click", (e) => {
        const color = e.target.id
        changeColor(color)
    })
}

// TO UPLOAD LOGO

// const uploadBtn = document.getElementById("uploadLogo");
// const uploadedImg = ""

// uploadBtn.addEventListener("click", () => {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploadedImg = reader.result;
//         document.getElementById("logo").style.backgroundImage = url(${ uploadedImg })
//     })
//     reader.readAsDataURL(this.files[0])
// })
