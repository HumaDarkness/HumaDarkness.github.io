document.addEventListener('DOMContentLoaded', () => {
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
        startButton.disabled = true;
        startButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Showcase en Progreso...';

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const loadingDiv = section.querySelector('.loading-spinner-container');
            const contentDiv = section.querySelector('.hidden-content');

            section.classList.add('show');

            const delay = 1500 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));

            if (loadingDiv) loadingDiv.style.display = 'none';
            if (contentDiv) contentDiv.classList.remove('hidden-content');

            // Specific animations for each section
            if (section.id === 'section1') {
                const codeBlock = section.querySelector('#code-block-content');
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

            if (section.id === 'section4' || section.id === 'section5') {
                const audioPlayer = section.querySelector('audio');
                if (audioPlayer) {
                    audioPlayer.play().catch(e => console.error("La reproducción automática de audio fue bloqueada por el navegador:", e));
                }
            }
        }

        startButton.style.display = 'none';
        restartContainer.style.display = 'block';
    };

    startButton.addEventListener('click', runDemonstration);
});
