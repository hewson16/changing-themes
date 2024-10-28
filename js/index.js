function changeTheme() {

    const selectedTheme = document.querySelector('input[name="theme"]:checked');
    
    if (selectedTheme) {
        const themeValue = selectedTheme.value;
        document.body.className = themeValue; 
    } 

}