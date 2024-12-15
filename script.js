const button = document.getElementById("copy");
const inputText = document.getElementById("inputText");
const message = document.getElementById("message");


function adjustInputWidth() {
    const textLength = inputText.value.length;
    if (textLength > 0) {
        const newWidth = Math.max(100, textLength + 1);
        inputText.style.width = newWidth + 'ch'; 
    }
}

// Function to copy to clipboard
function copyToClipboard() {
    const text = inputText.value.trim();
    
    if (text === "") {
        alert("Please enter some text to copy!");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            message.textContent = "Copied to clipboard!";
            message.classList.add("after-clicked");
        })
        .catch((err) => {
            console.log("Unable to copy the data", err);
        })
        .finally(() => {
            setTimeout(() => {
                message.textContent = "";
                message.classList.remove("after-clicked");
            }, 2000);
        });
}

inputText.addEventListener("input", adjustInputWidth); 
button.addEventListener("click", copyToClipboard);
