// Here's the translation:

// Hola, soy David Gilbert, un estudiante apasionado y entusiasta de Ingeniería Química en la prestigiosa Universidad de Lagos (Unilag). Con una pasión por aprender y crecer, estoy dedicado a sobresalir en mis estudios.

// Fuera del aula, puedes encontrarme sumergido en diversas aficiones. Soy un ávido jugador, aficionado a películas y series, siempre en busca de la próxima historia emocionante. Mi amor por los cálculos y resolución de problemas me mantiene comprometido, mientras que mi fascinación por el anime y el fútbol proporciona una escapada refrescante.

// Como nativo de Lagos, estoy orgulloso de llamar a esta vibrante ciudad mi hogar. Estoy emocionado de contribuir mis habilidades y conocimientos para hacer un impacto positivo en mi comunidad y más allá.

// Con una base sólida en STEM, estoy ansioso por explorar el dinámico campo de la Ingeniería Química, abordando desafíos y innovando soluciones. Mi objetivo es convertirme en un profesional capacitado, capaz de impulsar un cambio positivo.

// ¡No dudes en conectarte conmigo!

// Or, in a shorter version:

// Hola, soy David Gilbert, estudiante de Ingeniería Química en Unilag. Cuando no estudio, disfruto jugando, viendo películas, series, anime y fútbol. Me apasionan los cálculos y resolución de problemas. Como nativo de Lagos, estoy orgulloso de mi ciudad y anhelo hacer un impacto positivo. Estoy listo para crecer como profesional y innovar en mi campo.

// ¡Claro!

let isEnglish = true;

document.getElementById('lang-button').addEventListener('click', () => {
    const textAboutElement = document.getElementById('text-about');
    if (isEnglish) {
        textAboutElement.textContent = 'Hola, soy David Gilbert, un estudiante apasionado y entusiasta de Ingeniería Química en la prestigiosa Universidad de Lagos (Unilag). Con una pasión por aprender y crecer, estoy dedicado a sobresalir en mis estudios. Fuera del aula, puedes encontrarme sumergido en diversas aficiones. Soy un ávido jugador, aficionado a películas y series, siempre en busca de la próxima historia emocionante. Mi amor por los cálculos y resolución de problemas me mantiene comprometido, mientras que mi fascinación por el anime y el fútbol proporciona una escapada refrescante.Como nativo de Lagos, estoy orgulloso de llamar a esta vibrante ciudad mi hogar. Estoy emocionado de contribuir mis habilidades y conocimientos para hacer un impacto positivo en mi comunidad y más allá.Con una base sólida en STEM, estoy ansioso por explorar el dinámico campo de la Ingeniería Química, abordando desafíos y innovando soluciones. Mi objetivo es convertirme en un profesional capacitado, capaz de impulsar un cambio positivo. ¡No dudes en conectarte conmigo!';
    } else {
        textAboutElement.textContent = "Hi, I'm David Gilbert, a driven and enthusiastic Chemical Engineering student at the prestigious University of Lagos (Unilag). With a passion for learning and growth, I'm dedicated to excel in my academic pursuits. Outside the classroom, you can find me immersed in a variety of hobbies.I'm an avid gamer, movie buff, and series enthusiast, always on the lookout for the next thrilling storyline. My love for calculations and problem-solving keeps me engaged, while my fascination with anime and football provides a refreshing escape. As a Lagos native, I'm proud to call this vibrant city my home. I'm excited to contribute my skills and knowledge to make a positive impact in my community and beyond. With a strong foundation in STEM, I'm eager to explore the dynamic field of Chemical Engineering, tackling challenges and innovating solutions. My goal is to become a skilled professional, capable of driving positive change. Feel free to connect with me!";
    }

    isEnglish = !isEnglish;
});