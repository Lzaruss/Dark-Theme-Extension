if(document.querySelector(".popup")){
    isClicked=false;
    function toggleTheme() {
        // Obtener el elemento "body" de la página
        isClicked = !isClicked;
        
        // Alternar la clase "dark-theme" del elemento "body"
        isClicked ? onOff("fileOn.js") : onOff("fileOff.js");
        
    }
    const onOff = (fileJs) => {
        document.body.classList.toggle('dark-theme');
        chrome.tabs.executeScript({
            file: fileJs
        })
    }
    // Asignar la función toggleTheme al evento click del botón "Toggle Theme"
    document.querySelector('#toggle-button').addEventListener('click', toggleTheme);

        // Obtener el enlace "About" y la sección de contenido "About"
    const aboutLink = document.getElementById('about-link');
    const aboutContent = document.getElementById('about-content');
    
    // Agregar un controlador de eventos de clic al enlace "About"
    aboutLink.addEventListener('click', (event) => {
        // Evitar que el enlace redirija a otra página
        event.preventDefault();
        
        // Mostrar/ocultar la sección de contenido "About"
        aboutContent.style.display = aboutContent.style.display === 'none' ? 'block' : 'none';
    });
}