 // Function to handle sending messages
 function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatBox = document.getElementById('chatBox');
    
    if (userInput.trim() !== "") {
        // Show user's message
        displayMessage(userInput, 'user');
        
        // Clear the input field
        document.getElementById('userInput').value = '';
        
        // Show bot's response based on the input
        if (userInput.toLowerCase().includes('service')) {
            displayMessage('Our company is designed to make people life easier, making it a health and wellnes companion with a charming disposition.Our MR KIKI is first Pakistani affordable robot that speaks both urdu and English .This AItechnology is a smart medicine assistant that will actively seek out and speak to a specificuser in the room about their health care needs .And it’s the first national robot that canfeature to connect device.', 'bot');
        }else if(userInput.toLowerCase().includes('socials')){
            displayMessage('Social robots can interact directly with humans. These “ friendly “ robots can be used in longterm care environments to provide social interaction and monitoring . They may encouragepatient to comply with treatment regimens or provide and cognitive engagement , helpingto keep patient alert and positive. In general , social robots helps reduce caregiverworkloads and improves patient well being', 'bot');
        }else if(userInput.toLowerCase().includes('capabilities')){
            displayMessage('1:Sensors for health data collection ', 'bot');
            displayMessage('2:Collect images videos ', 'bot');
            displayMessage('3:context-aware decision', 'bot');
            displayMessage('4:understanding human behavior ', 'bot');
            displayMessage('5:understanding emotional state  ', 'bot');
            displayMessage('6:understanding psychological state ', 'bot');
            displayMessage('7:human-robot interaction interface ', 'bot');
        
        }

        else {
            displayMessage('Sorry, I didn\'t understand that. Please ask about our services.', 'bot');
        }
    }
}

// Function to display messages in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender + '-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}