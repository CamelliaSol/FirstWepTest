const templateSelector = document.getElementById('templateSelector');
const noteInput = document.getElementById('noteInput');
const saveButton = document.getElementById('saveButton');
const notesContainer = document.getElementById('notesContainer');

templateSelector.addEventListener('change', function() {
    const selectedTemplate = templateSelector.value;

    if (selectedTemplate) {
        noteInput.style.display = 'block';
        saveButton.style.display = 'block';
        noteInput.placeholder = getPlaceholderText(selectedTemplate);
    } else {
        noteInput.style.display = 'none';
        saveButton.style.display = 'none';
        notesContainer.innerHTML = ''; // Clear notes on template change
    }
});

saveButton.addEventListener('click', function() {
    const noteText = noteInput.value;

    if (noteText) {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerText = noteText;
        notesContainer.appendChild(noteElement);
        noteInput.value = ''; // Clear input
    }
});

function getPlaceholderText(template) {
    switch (template) {
        case 'diary':
            return '오늘의 감정과 일기를 적어보세요...';
        case 'memo':
            return '중요한 메모를 적어보세요...';
        case 'idea':
            return '아이디어를 적어보세요...';
        case 'scheduler':
            return '오늘의 일정과 계획을 적어보세요...';
        default:
            return '';
    }
}