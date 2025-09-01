document.addEventListener('DOMContentLoaded', () => {
    // --- Original Demonstration Logic ---
    const startButton = document.getElementById('startButton');
    const restartContainer = document.getElementById('restartContainer');
    const sections = document.querySelectorAll('.section');

    const typeEffect = async (element, text, delay = 50) => {
        element.innerHTML = '';
        const codeWrapper = document.createElement('code');
        element.appendChild(codeWrapper);
        
        for (let i = 0; i < text.length; i++) {
            await new Promise(resolve => setTimeout(() => {
                codeWrapper.innerHTML += text.charAt(i);
                resolve();
            }, Math.random() * delay));
        }
    };

    const runDemonstration = async () => {
        if (startButton) {
            startButton.disabled = true;
            startButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Showcase en Progreso...';
        }

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const loadingDiv = section.querySelector('.loading-spinner-container');
            const contentDiv = section.querySelector('.hidden-content');

            section.classList.add('show');

            const delay = 1500 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));

            if (loadingDiv) loadingDiv.style.display = 'none';
            if (contentDiv) contentDiv.classList.remove('hidden-content');

            if (section.id === 'section1') {
                const codeBlock = section.querySelector('#code-block-content');
                if (codeBlock) {
                    const codeText = codeBlock.textContent;
                    codeBlock.innerHTML = ''; // Clear static content
                    const cursor = document.createElement('span');
                    cursor.className = 'typing-cursor';
                    codeBlock.appendChild(cursor);
                    
                    const lines = codeText.split('\n');
                    for (const line of lines) {
                        await typeEffect(codeBlock, line + '\n', 20);
                    }
                    cursor.style.display = 'none'; // Hide cursor when done
                }
            }

            if (section.id === 'section4' || section.id === 'section5') {
                const audioPlayer = section.querySelector('audio');
                if (audioPlayer) {
                    audioPlayer.play().catch(e => console.error("Audio autoplay was blocked by the browser:", e));
                }
            }
        }

        if (startButton) startButton.style.display = 'none';
        if (restartContainer) restartContainer.style.display = 'block';
    };

    if (startButton) {
        startButton.addEventListener('click', runDemonstration);
    }

    // --- Chatbot Logic ---
    const chatFab = document.getElementById('chat-fab');
    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatHistory = document.getElementById('chat-history');

    if (chatFab) {
        chatFab.addEventListener('click', () => {
            chatWindow.classList.toggle('show');
        });
    }

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                appendMessage(userMessage, 'user');
                chatInput.value = '';
                getBotResponse(userMessage);
            }
        });
    }

    function appendMessage(message, sender, isThinking = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        
        if (isThinking) {
            messageElement.classList.add('thinking');
            messageElement.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
        } else {
            messageElement.textContent = message;
        }
        
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
        return messageElement;
    }

    async function getBotResponse(userMessage) {
        const thinkingMessage = appendMessage('', 'bot', true);

        // --- IMPORTANT: PASTE YOUR API KEY HERE ---
        const API_KEY = 'AIzaSyD0Gn1AvYbHLdOrssHfV-aeN-ek0Hd-VIA'; 
        // Using a placeholder for the model, adjust if you have a specific fine-tuned one.
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

        const requestBody = {
            contents: [{
                parts: [{
                    text: userMessage
                }]
            }]
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error.message || 'Something went wrong');
            }

            const data = await response.json();
            const botMessage = data.candidates[0].content.parts[0].text;
            
            thinkingMessage.remove();
            appendMessage(botMessage, 'bot');

        } catch (error) {
            console.error('Error fetching Gemini response:', error);
            thinkingMessage.remove();
            appendMessage(`Error: ${error.message}`, 'bot');
        }
    }
});