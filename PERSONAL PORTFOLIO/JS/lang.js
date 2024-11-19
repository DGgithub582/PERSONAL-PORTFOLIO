let isEnglish = true;

document.getElementById('lang-button').addEventListener('click', () => {
    const textUnoElement = document.getElementById('text-uno');
    const textDosElement = document.getElementById('text-dos');
    const textTresElement = document.getElementById('text-tres');
    const textCuatroElement = document.getElementById('text-cuatro');
    const textCincoElement = document.getElementById('text-cinco');
    const textSeisElement = document.getElementById('text-seis');
    const textSieteElement = document.getElementById('text-siete');
    const textOchoElement = document.getElementById('text-ocho');
    const textNueveElement = document.getElementById('text-nueve');
    const textDiezElement = document.getElementById('text-diez');
    if (isEnglish) {
        textUnoElement.textContent = 'Soy un contructor de sitios web principante y este es mi primer sitio web de portafolio';
        textDosElement.textContent = 'Galería';
        textTresElement.textContent = 'Proyectos';
        textCuatroElement.textContent = 'Me gusta/No me gusta';
        textCincoElement.textContent = 'Categorías';
        textSeisElement.textContent = 'ACERCA DE Mĺ';
        textSieteElement.textContent = 'Acerca de';
        textOchoElement.textContent = 'Escuelas asistidas';
        textNueveElement.textContent = 'CONTACTO';
        textDiezElement.textContent = 'Lagos, Nigeria';
    } else {
        textUnoElement.textContent = "I'm a beginner website builder and this is my first Portfolio Website.";
        textDosElement.textContent = 'GALLERY';
        textTresElement.textContent = 'PROJECTS';
        textCuatroElement.textContent = 'LIKES/DISLIKES';
        textCincoElement.textContent = 'CATEGORIES';
        textSeisElement.textContent = 'ABOUT ME';
        textSieteElement.textContent = 'About';
        textOchoElement.textContent = 'Schools attended';
        textNueveElement.textContent = 'CONTACT';
        textDiezElement.textContent = 'Lagos, Nigeria';
    }

    isEnglish = !isEnglish;
});