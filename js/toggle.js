applySavedColorPreference();
restoreCheckboxState();
applySavedThemePreference();

function switchColors() {
    var currentColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
    
    if (currentColor === '#1697e7' || currentColor === '') {
        currentColor = '';
    } else {
        currentColor = '#1697e7';
    }
    
    localStorage.setItem('currentColor', currentColor);
    document.documentElement.style.setProperty('--main-color', currentColor);
    saveCheckboxState();
}

function applySavedColorPreference() {
    var color = localStorage.getItem('currentColor') || '#e3a2d3';
    document.documentElement.style.setProperty('--main-color', color);
}

function saveCheckboxState() {
    const colorSwitchCheckbox = document.getElementById('color-switch');
    localStorage.setItem('rightCheckboxState', colorSwitchCheckbox.checked);
    const darkModeToggleCheckbox = document.getElementById('dark-mode-toggle');
    localStorage.setItem('leftCheckboxState', darkModeToggleCheckbox.checked);
}

function restoreCheckboxState() {
    const colorSwitchCheckbox = document.getElementById('color-switch');
    const savedColorSwitchState = localStorage.getItem('rightCheckboxState');
    colorSwitchCheckbox.checked = savedColorSwitchState === 'true';

    const darkModeToggleCheckbox = document.getElementById('dark-mode-toggle');
    const savedDarkModeToggleState = localStorage.getItem('leftCheckboxState');
    darkModeToggleCheckbox.checked = savedDarkModeToggleState === 'true';
}

function saveAppState() {
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
    localStorage.setItem('currentColor', currentColor);

    const colorSwitchCheckbox = document.getElementById('color-switch');
    localStorage.setItem('rightCheckboxState', colorSwitchCheckbox.checked);
    const darkModeToggleCheckbox = document.getElementById('dark-mode-toggle');
    localStorage.setItem('leftCheckboxState', darkModeToggleCheckbox.checked);
}

function toggleDarkMode() {
    var currentBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color-body').trim();

    if (currentBackgroundColor === '' || currentBackgroundColor === 'rgb(249, 249, 249)') {
        darkMode();
    } else {
        lightMode();
    }

    localStorage.setItem('currentBackgroundColor', document.documentElement.style.getPropertyValue('--background-color-body').trim());
    saveCheckboxState();
}

function applySavedThemePreference() {
    var currentBackgroundColor = localStorage.getItem('currentBackgroundColor');

    if (currentBackgroundColor) {
        document.documentElement.style.setProperty('--background-color-body', currentBackgroundColor);

        if (currentBackgroundColor === '#2f3136') {
            darkMode();
        } else {
            lightMode();
        }
    }
}

function lightMode(){
    document.documentElement.style.setProperty('--background-color-body', 'rgb(249, 249, 249)');
    document.documentElement.style.setProperty('--fff', '#fff');
    document.documentElement.style.setProperty('--three-three-three', '#cbced2');
    document.documentElement.style.setProperty('--three-three-three2', '#333');
    document.documentElement.style.setProperty('--form-input-background', '#D9DBDB');
}

function darkMode(){
    document.documentElement.style.setProperty('--background-color-body', '#2f3136');
    document.documentElement.style.setProperty('--fff', '#40444b'); // article background
    document.documentElement.style.setProperty('--three-three-three', '#292b2f'); // header and footer background
    document.documentElement.style.setProperty('--three-three-three2', '#ccc'); // text color
    document.documentElement.style.setProperty('--form-input-background', '#40444b'); // input background
}
