let screen = document.getElementById("text");
let btn = document.querySelectorAll("button");
let currentscreenvalue = "";
let display = document.getElementById("message");
let display_message = document.getElementById("displaymessage");

for (item of btn) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == "backspace") {
            screen.value = screen.value.slice(0, -1);
            currentscreenvalue = screen.value;
        }
        else if (screen.value.length < 4) {

            if (buttonText != "check") {
                currentscreenvalue += buttonText;
                screen.value = currentscreenvalue;
                let x = screen.value.length;
                console.log(x);
            }
            else if(buttonText =="check" && screen.value.length < 4) {
                screen.type = "text";
                screen.value = "Wrong Password" ;
            }
        }
        else if (buttonText == "check") {
            if (screen.value.length == 4) {
                console.log("password");
                console.log(screen.value.length);
            }
        }
    })
}

screen.addEventListener("click" ,()=>{
    screen.value = currentscreenvalue;
    screen.type = "password";
} )