const chatBox = document.getElementById("chat-box");

function addMessage(message, className) {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = message;
    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {

    const input = document.getElementById("user-input");

    let userText = input.value.trim();

    if(userText === "") return;

    addMessage(userText, "user-message");

    let text = userText.toLowerCase();

    let response = getBotResponse(text);

    const typingDiv = document.createElement("div");
typingDiv.className = "bot-message";
typingDiv.textContent = "Bot is typing...";
chatBox.appendChild(typingDiv);

chatBox.scrollTop = chatBox.scrollHeight;

setTimeout(() => {

    typingDiv.remove();

    addMessage(response, "bot-message");

}, 1000);

    input.value = "";
}

function getBotResponse(text){

    if(
    text === "hi" ||
    text === "hello" ||
    text === "hey"
)
        return "Hello! Nice to meet you.";

    else if(text.includes("how are you"))
        return "I am doing great. Thank you for asking.";

    else if(text.includes("your name"))
        return "I am an AI Rule-Based Chatbot.";

    else if(text.includes("ai"))
        return "AI stands for Artificial Intelligence.";

    else if(text.includes("machine learning"))
        return "Machine Learning is a branch of AI that learns from data.";

    else if(text.includes("python"))
        return "Python is one of the most popular programming languages for AI.";

    else if(text.includes("java"))
        return "Java is widely used for enterprise and application development.";

    else if(text.includes("internship"))
        return "Internships help students gain practical industry experience.";

    else if(text.includes("college"))
        return "College is a great place to learn and develop skills.";

    else if(text.includes("course"))
        return "Continuous learning is important for career growth.";

    else if(text.includes("time"))
        return "Current Time: " + new Date().toLocaleTimeString();

    else if(text.includes("date"))
        return "Today's Date: " + new Date().toLocaleDateString();

    else if(text.includes("thank"))
        return "You're welcome.";

    else if(text.includes("bye"))
        return "Goodbye! Have a great day.";
    else if(text.includes("deep learning"))
    return "Deep Learning is a subset of Machine Learning based on neural networks.";

else if(text.includes("data science"))
    return "Data Science involves extracting insights from data.";

else if(text.includes("nlp"))
    return "NLP stands for Natural Language Processing.";

else if(text.includes("computer vision"))
    return "Computer Vision enables machines to understand images and videos.";

else if(text.includes("chatgpt"))
    return "ChatGPT is an AI language model developed by OpenAI.";

else if(text.includes("javascript"))
    return "JavaScript is commonly used for web development.";

else if(text.includes("html"))
    return "HTML structures web pages.";

else if(text.includes("css"))
    return "CSS is used to style web pages.";

else if(text.includes("project"))
    return "This chatbot is a rule-based AI project.";

else if(text.includes("help"))
    return "You can ask me about AI, ML, NLP, Python, HTML, CSS and more.";

    else
        return "Sorry, I don't understand that. Please try another question.";
}

document.getElementById("user-input")
.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
});
function clearChat(){
    chatBox.innerHTML = `
    <div class="bot-message">
        Hello! I am your AI chatbot. How can I help you today?
    </div>`;
}
document.getElementById("datetime").innerText =
new Date().toLocaleString();