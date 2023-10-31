const captchaTextBox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input");
const submitButton = document.querySelector(".button");
const message = document.querySelector(".message");

//Variable to store generated captcha 
let captchaText = null;

//Function to generate captcha
const generateCaptcha = ()=>{
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5? char.toUpperCase() : char))
    captchaText = changeString.join("    ");
    captchaTextBox.value = captchaText;
    console.log(randomStringArray, changeString);
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
    //Toggle submit button disable class based on captcha input field
    submitButton.classList.toggle("disabled", !captchaInputBox.value);
    if(captchaInputBox.value === ""){
        message.classList.remove("active");
    }
};

//Function to validate the entered captcha
const submitBtnClick = () => {
    captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");

    message.classList.add("active");
    //Check if the entered captcha is correct or not
    if(captchaInputBox.value === captchaText){
        message.innerText = "Entered captcha is correct";
        message.style.color = "blue";
    } else{
        message.innerText = "Entered captcha is not correct";
        message.style.color = "red";
    }
};

//Event listeners for the refresh button, captchaInputBox, submit button
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

//Generate captcha when page loads
generateCaptcha();