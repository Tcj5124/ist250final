function showTip() {
    let tipText = document.getElementById("tipText");

    let tips = [
        "Remember that internal storage fills up quite fast. Plan for an expansion card or possibly purchasing an external drive.",
        "Consider features like portability, backwards compatibility, and graphics.",
        "Consider the hardware models such as Digital, which has no disc drive, versus Disc, which includes a disc drive.",
        "Pick the console that would align with a friend's console based on gaming habits and multiplayer."
    ];

    let randomIndex = Math.floor(Math.random() * tips.length);

    tipText.textContent = tips[randomIndex];
}

function submitContact() {
    let greeting = document.getElementById("greeting");
    let brief = document.getElementById("brief");
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let messageInput = document.getElementById("messageInput");
    let topicSelect = document.getElementById("topicSelect");
    let confirmMessage = document.getElementById("confirmMessage");

    if (nameInput.value && nameInput.value.trim() !== "") {
        greeting.textContent = "Contact Me, " + nameInput.value.trim();
    } else { 
        greeting.textContent = "Contact Me";
    }    

    brief.textContent = "Topic selected: " + topicSelect.value;

    if ( 
        emailInput.value && emailInput.value.trim() !== "" &&
        messageInput.value && messageInput.value.trim() !== ""
    ) {
        confirmMessage.textContent =
        "Your message has been received! Thank you, and I will review your note about " + topicSelect.value + " soon.";
    } else {
        confirmMessage.textContent = 
        "Please fill out your email and your message before you submit. Thank you!";
    }
}