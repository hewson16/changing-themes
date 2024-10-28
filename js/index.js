function changeTheme() {
    console.log('changeTheme func')

    const selectedTheme = document.querySelector('input[name="theme"]:checked');

    
    
    if (selectedTheme) {
        const themeValue = selectedTheme.value;
        console.log("Selected theme:", themeValue);

        document.body.className = themeValue; 
    } else {
        console.log("No theme selected.");
    }
}