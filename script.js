console.log("Script loaded!");

const findBtn = document.getElementById("findBtn");
const landingCard = document.getElementById("landingCard");
const searchScreen = document.getElementById("searchScreen");
const statusText = document.getElementById("statusText");
const rollNo = document.getElementById("rollNo");
const errorMsg = document.getElementById("errorMsg");
const envelopeScreen = document.getElementById("envelopeScreen");
const envelope = document.querySelector(".envelope");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");
const signature = document.getElementById("signature");
let currentLetter = {};
findBtn.addEventListener("click", () => {
    errorMsg.textContent = "";
    rollNo.classList.remove("inputError");

    if (rollNo.value.trim() === "") {
        errorMsg.textContent = "Please enter your register number!";
        rollNo.classList.add("inputError");
        return;
    }
const student = letters[rollNo.value.trim()];
console.log(student);
console.log(document.getElementById("letterTitle"));
console.log(document.getElementById("signature"));


if(student){

    currentLetter = {
    title: student.title,
    message: student.message,
    signature: student.signature
};

}else{

    currentLetter = {
    title: "Dear Friend,",
    message: "Someone wanted you to know that you made this journey special.",
    signature: "With love,\nSomeone"
};

}

    landingCard.style.display = "none";
    searchScreen.style.display = "flex";

    const messages = [
        "Looking through attendance sheets...",
        "Finding shared memories...",
        "Reading forgotten pages...",
        "Letter found!!! 💌"
    ];

    let index = 0;

    statusText.innerText = messages[index];

    const interval = setInterval(() => {

        index++;

        if (index < messages.length) {
            statusText.innerText = messages[index];
        }else {
            clearInterval(interval);

            console.log("Envelope should appear now");
            console.log(envelopeScreen);

            searchScreen.style.display = "none";
            envelopeScreen.style.display = "flex";
        }

    }, 1500);
});
const letter = document.querySelector(".letter");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        letter.classList.add("expand");

        setTimeout(() => {

            typeLetter(
                currentLetter.title,
                currentLetter.message,
                currentLetter.signature
            );

        }, 700);

    }, 1000);

});
function typeLetter(title, message, sign){

    letterTitle.textContent = "";
    letterText.textContent = "";
    signature.textContent = "";

    let titleIndex = 0;

    function typeTitle(){

        if(titleIndex < title.length){

            letterTitle.textContent += title.charAt(titleIndex);

            titleIndex++;

            setTimeout(typeTitle,60);

        }else{

            typeMessage();

        }

    }

    let messageIndex = 0;

    function typeMessage(){

        if(messageIndex < message.length){

            letterText.textContent += message.charAt(messageIndex);

            messageIndex++;
             const nearBottom =
            letter.scrollHeight - letter.scrollTop - letter.clientHeight < 120;

        if(nearBottom){
            letter.scrollTo({
                top: letter.scrollHeight,
                behavior: "smooth"
            });
        }

            setTimeout(typeMessage,40);

        }else{

            typeSignature();

        }

    }

    let signIndex = 0;

    function typeSignature(){

        if(signIndex < sign.length){

            signature.textContent += sign.charAt(signIndex);

            signIndex++;
            letter.scrollTo({
    top: letter.scrollHeight,
    behavior: "smooth"
});

            setTimeout(typeSignature,70);

        }

    }

    typeTitle();

}
