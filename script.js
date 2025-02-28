document.addEventListener('DOMContentLoaded', function() {
    const promptsList = document.getElementById('prompts-list');
    const customPromptInput = document.getElementById('custom-prompt');
    const savePromptButton = document.getElementById('save-prompt');

    // Load saved prompts from localStorage
    let customPrompts = JSON.parse(localStorage.getItem('customPrompts')) || [];

    // Function to render prompts
    function renderPrompts() {
        promptsList.innerHTML = '';
        customPrompts.forEach((prompt, index) => {
            const li = document.createElement('li');
            li.textContent = prompt;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => deletePrompt(index));
            li.appendChild(deleteBtn);
            promptsList.appendChild(li);
        });
    }

    // Function to save a new prompt
    function savePrompt() {
        const newPrompt = customPromptInput.value.trim();
        if (newPrompt) {
            customPrompts.push(newPrompt);
            localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
            customPromptInput.value = '';
            renderPrompts();
        } else {
            alert('Please enter a prompt.');
        }
    }

    // Function to delete a prompt
    function deletePrompt(index) {
        customPrompts.splice(index, 1);
        localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
        renderPrompts();
    }

    // Event listener for save button
    savePromptButton.addEventListener('click', savePrompt);

    // Initial render of prompts
    renderPrompts();
});