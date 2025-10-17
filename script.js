function showMessage() {
    const messages = [
        "Hello! This app is working!",
        "GitHub integration successful!",
        "Auto-deployment is awesome!",
        "You clicked the button! 🎉"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
}

console.log("Application loaded successfully!");