// Array of personas and their corresponding solution cards
const gameData = [
    {
        persona: {
            image: 'persona-card.svg', // Persona image
            text: 'Ich möchte eine grüne Stadt und gesunde Pflanzen und Bäume. Was kann ich tun, um dies zu erreichen?'
        },
        solutions: [
            { 
                name: 'Simax', 
                description: 'ist ein System, das gesprochenen oder geschriebenen Text in Gebärdensprache übersetzt. Die Übersetzung wird von einem digitalen, animierten Avatar in Gebärdensprache dargestellt.', 
                link: 'https://simax.media/', 
                image: 'card1.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Flora Incognita', 
                description: 'ist eine KI-gestützte App, die automatisch mehr als 16.000 Gefäßpflanzenarten anhand von Fotos identifiziert.', 
                link: 'https://floraincognita.com/', 
                image: 'card2.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'DeepL', 
                description: 'ist ein Übersetzungssystem, das 33 Sprachen unterstützt. Das System ermöglicht auch die Übersetzung von PDF-, Word- und PowerPoint-Dateien.', 
                link: 'https://deepl.com', 
                image: 'card3.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Baumblick', 
                description: 'ist eine App, die vorhersagen kann, welche Bäume in Berlin am stärksten von Trockenheit bedroht sind, sodass die Anwohner frühzeitig eingreifen können, indem sie sie bewässern.', 
                link: 'https://baumblick.qtrees.ai/', 
                image: 'card4.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'SeaClear', 
                description: 'ist ein Projekt, das Roboter und Objekterkennung einsetzt, um Plastikmüll zu identifizieren und vom Meeresboden zu entfernen.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: false 
            }        
        ]
    },
    {
        persona: {
            image: 'persona-card2.svg', // Different persona image
            text: 'Die Verschmutzung der Ozeane ist wirklich ein riesiges Problem. Haben Sie Ideen, wie wir effektiver'
        },
        solutions: [
            { 
                name: 'BirdVision', 
                description: 'ist ein System, das Kameras auf Windkraftanlagen verwendet, um Vögel zu erkennen und zu verfolgen, und das in Notfällen die Turbinen abschalten kann, wenn Vögel in Gefahr sind.', 
                link: 'https://birdvision.org/', 
                image: 'card11.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Grammarly', 
                description: 'ist ein Tool, das Ihnen dabei hilft, klar und präzise auf Englisch zu schreiben und grammatikalisch falsche E-Mails und Dokumente zu korrigieren.', 
                link: 'https://grammarly.com', 
                image: 'card8.svg', 
                correct: false 
            },
            { 
                name: 'Plantix', 
                description: 'hilft Landwirten, (landwirtschaftliche) Pflanzenkrankheiten anhand eines Fotos zu erkennen, gibt Tipps zur Behandlung und steigert so die Ernteerträge.', 
                link: 'https://plantix.net/en/', 
                image: 'card9.svg', 
                correct: false 
            },
            { 
                name: 'Elsa AI', 
                description: 'hilft Nicht-Muttersprachlern, akzentfreies Englisch zu sprechen, indem sie sofortiges Feedback zur Aussprache erhalten.', 
                link: 'https://elsaspeak.com/en/', 
                image: 'card10.svg', 
                correct: false 
            },
            { 
                name: 'SeaClear', 
                description: 'ist ein Projekt, das Roboter und Objekterkennung einsetzt, um Plastikmüll zu identifizieren und vom Meeresboden zu entfernen.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: true 
            }
        ]
    },
    {
        persona: {
            image: 'persona-card3.svg', // Persona image
            text: 'Meine Oma verliert jedes Jahr mehr und mehr ihr Augenlicht. Ich würde ihr gerne den Alltag erleichtern, bin aber selten da. Kann ich ihr irgendwie helfen?'
        },
        solutions: [
            { 
                name: 'Claudette', 
                description: 'analysiert die Nutzungsbedingungen und Datenschutzrichtlinien von Online-Plattformen, um festzustellen, ob sie mit dem EU-Recht vereinbar sind.', 
                link: 'http://claudette.eui.eu/', 
                image: 'card12.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'ChatGPT', 
                description: 'simuliert menschliche Gespräche im Dialogformat und gibt Antworten auf die Fragen der Benutzer.', 
                link: 'https://chatgpt.com/', 
                image: 'card13.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Stockfish', 
                description: 'handelt sich um einen leistungsstarken Schach-KI-Algorithmus, der das Spiel auf Weltmeisterniveau spielt.', 
                link: 'https://stockfishchess.org/', 
                image: 'card14.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Seeing AI', 
                description: 'unterstützt sehbehinderte Menschen, indem es beispielsweise Texte vorliest, Personen erkennt und beschreibt und Produkte erkennt.', 
                link: 'https://www.seeingai.com/', 
                image: 'card15.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'Grammarly', 
                description: 'ist ein Tool, das Ihnen dabei hilft, klar und präzise auf Englisch zu schreiben und grammatikalisch falsche E-Mails und Dokumente zu korrigieren.', 
                link: 'https://grammarly.com', 
                image: 'card8.svg', 
                correct: false 
            },        
        ]
    },
    {
        persona: {
            image: 'persona-card4.svg', // Persona image
            text: 'Ich bin in letzter Zeit gestresst, vor allem wegen meines vollen Terminkalenders. Ich würde gerne Bücher finden, die mich aufbauen. Hast du Vorschläge?'
        },
        solutions: [
            { 
                name: 'Readow', 
                description: 'werden Vorschläge für Bücher gemacht, die einem Benutzer gefallen könnten, basierend auf seinen Lieblingsbüchern.', 
                link: 'https://readow.ai/', 
                image: 'card16.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'Seeing AI', 
                description: 'unterstützt sehbehinderte Menschen, indem es beispielsweise Texte vorliest, Personen erkennt und beschreibt und Produkte erkennt.', 
                link: 'https://www.seeingai.com/', 
                image: 'card15.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Character AI', 
                description: 'simuliert menschliche Gespräche im Dialogformat und gibt Antworten auf die Fragen der Benutzer.', 
                link: 'https://character.ai/', 
                image: 'card17.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'PoliTrack', 
                description: 'ist eine Informationsplattform zu Politikern und wahlbezogenen Informationen in Deutschland mit Visualisierungen und Datenanalysen.', 
                link: 'https://politrack.org/', 
                image: 'card18.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Plantix', 
                description: 'hilft Landwirten, (landwirtschaftliche) Pflanzenkrankheiten anhand eines Fotos zu erkennen, gibt Tipps zur Behandlung und steigert so die Ernteerträge.', 
                link: 'https://plantix.net/en/', 
                image: 'card9.svg', 
                correct: false 
            }      
        ]
    },
    {
        persona: {
            image: 'persona-card5.svg', // Persona image
            text: 'Als Nicht-Muttersprachler, der in einem internationalen Unternehmen arbeitet, schreibe ich regelmäßig E-Mails und Berichte auf Englisch, was dazu führt, dass ich viel Zeit mit der Überprüfung der Grammatik verbringe. Haben Sie Vorschläge?'
        },
        solutions: [
            { 
                name: 'KI4LSA', 
                description: 'handelt sich um ein Projekt, das darauf abzielt, den Verkehrsfluss und die Sicherheit von Fußgängern zu optimieren, indem die Verkehrssituation mithilfe von Sensoren analysiert und die Ampelschaltung entsprechend angepasst wird.', 
                link: 'https://www.iosb-ina.fraunhofer.de/en/divisions/Machine-Learning/Research-topics-and-projects/Project-KI4LSA-Artificial-intelligence-for-light-signal-systems.html', 
                image: 'card19.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Grammarly', 
                description: 'ist ein Tool, das Ihnen dabei hilft, klar und präzise auf Englisch zu schreiben und grammatikalisch falsche E-Mails und Dokumente zu korrigieren.', 
                link: 'https://grammarly.com', 
                image: 'card8.svg', 
                correct: true 
            },
            { 
                name: 'Dall-E', 
                description: 'erstellt Bilder auf der Grundlage von Texteingaben. Die generierten Bilder können fotorealistisch sein oder einen bestimmten Stil imitieren und können beispielsweise durch Einfügen eines Elements modifiziert werden.', 
                link: 'https://www.dallefree.ai/', 
                image: 'card20.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Rainforrest Connection', 
                description: 'handelt sich um eine Technologie, die es Menschen ermöglicht, die biologische Vielfalt und die Gesundheit des Regenwaldes zu überwachen und zu schützen.', 
                link: 'https://rfcx.org/', 
                image: 'card21.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'apic.ai', 
                description: 'analysiert das Verhalten von Bienen und Hummeln, um den Einfluss von Umweltfaktoren, landwirtschaftlichen Praktiken und Substanzen auf ihre Gesundheit', 
                link: 'https://apic.ai/', 
                image: 'card22.svg', 
                correct: false 
            }      
        ]
    },
    {
        persona: {
            image: 'persona-card6.svg', // Persona image
            text: 'Ich bin Landwirt und möchte die Bienen in meiner Region schützen und meine Felder richtig düngen. Wie finde ich die richtige Balance?'
        },
        solutions: [
            { 
                name: 'apic.ai', 
                description: 'analysiert das Verhalten von Bienen und Hummeln, um den Einfluss von Umweltfaktoren, landwirtschaftlichen Praktiken und Substanzen auf ihre Gesundheit.', 
                link: 'https://apic.ai/', 
                image: 'card22.svg', 
                correct: true 
            },
            { 
                name: 'Baumblick', 
                description: 'ist eine App, die vorhersagen kann, welche Bäume in Berlin am stärksten von Trockenheit bedroht sind, sodass die Anwohner frühzeitig eingreifen können, indem sie sie bewässern.', 
                link: 'https://baumblick.qtrees.ai/', 
                image: 'card4.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'SeaClear', 
                description: 'ist ein Projekt, das Roboter und Objekterkennung einsetzt, um Plastikmüll zu identifizieren und vom Meeresboden zu entfernen.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: false 
            },        
            { 
                name: 'PoliTrack', 
                description: 'ist eine Informationsplattform zu Politikern und wahlbezogenen Informationen in Deutschland mit Visualisierungen und Datenanalysen.', 
                link: 'https://politrack.org/', 
                image: 'card18.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'ChatGPT', 
                description: 'simuliert menschliche Gespräche im Dialogformat und gibt Antworten auf die Fragen der Benutzer.', 
                link: 'https://chatgpt.com/', 
                image: 'card13.png', // Use the local image path
                correct: false 
            }
        ]
    },
    {
        persona: {
            image: 'persona-card7.svg', // Persona image
            text: 'Die meisten unserer Lehrer sind völlig überarbeitet. Wie können wir ihnen ihre Arbeit erleichtern?'
        },
        solutions: [
            { 
                name: 'Dall-E', 
                description: 'erstellt Bilder auf der Grundlage von Texteingaben. Die generierten Bilder können fotorealistisch sein oder einen bestimmten Stil imitieren und können beispielsweise durch Einfügen eines Elements verändert werden.', 
                link: 'https://www.dallefree.ai/', 
                image: 'card20.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Rainforrest Connection', 
                description: 'ist eine Technologie, die es Menschen ermöglicht, die biologische Vielfalt und die Gesundheit des Regen', 
                link: 'https://rfcx.org/', 
                image: 'card21.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Fobizz', 
                description: 'präsentiert eine Sammlung von Tools, die Lehrer bei der Planung und Durchführung von Unterrichtsstunden unterstützen.', 
                link: 'https://tools.fobizz.com/', 
                image: 'card23.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'PoliTrack', 
                description: 'ist eine Informationsplattform zu Politikern und wahlbezogenen Informationen in Deutschland mit Visualisierungen und Datenanalysen.', 
                link: 'https://politrack.org/', 
                image: 'card18.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Claude', 
                description: 'ist ein Chatbot, der bei verschiedenen Aufgaben helfen kann, z. B. beim Brainstorming von Ideen, beim Generieren von Text und Code und beim Verständnis von Themen.', 
                link: 'https://claude.ai/', 
                image: 'card24.svg', 
                correct: false 
            }      
        ]
    },
    {
        persona: {
            image: 'persona-card8.svg', // Persona image
            text: 'Mein Partner hat Geburtstag und ich habe keine Ahnung, was ich ihm schenken soll. Du etwa?'
        },
        solutions: [
            { 
                name: 'Claude', 
                description: 'ist ein Chatbot, der bei verschiedenen Aufgaben helfen kann, z. B. beim Brainstorming von Ideen, beim Generieren von Text und Code und beim Verständnis von Themen..', 
                link: 'https://claude.ai/', 
                image: 'card24.svg', 
                correct: true 
            },
            { 
                name: 'Stockfish', 
                description: 'ist ein leistungsstarker Schach-KI-Algorithmus, der das Spiel auf Weltmeisterniveau spielt.', 
                link: 'https://stockfishchess.org/', 
                image: 'card14.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'KI4LSA', 
                description: 'ist ein Projekt, das darauf abzielt, den Verkehrsfluss und die Sicherheit von Fußgängern zu optimieren, indem die Situation auf der Straße mit Sensoren analysiert und die Ampelschaltung entsprechend angepasst wird.', 
                link: 'https://www.iosb-ina.fraunhofer.de/en/divisions/Machine-Learning/Research-topics-and-projects/Project-KI4LSA-Artificial-intelligence-for-light-signal-systems.html', 
                image: 'card19.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Flora Incognita', 
                description: 'ist eine KI-gestützte App, die automatisch mehr als 16.000 Gefäßpflanzenarten anhand von Fotos identifiziert.', 
                link: 'https://floraincognita.com/', 
                image: 'card2.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'DeepL', 
                description: 'ist ein Übersetzungssystem, das 33 Sprachen unterstützt. Das System ermöglicht auch die Übersetzung von PDF-, Word- und PowerPoint-Dateien.', 
                link: 'https://deepl.com', 
                image: 'card3.svg', // Use the local image path
                correct: false 
            }
        ]
    }
];

// Track the score, current game level, and attempt status
let score = 0;
let currentLevel = 0;
let hasAttempted = false;

// Start game by hiding the start page and showing the game container
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    loadGameLevel(currentLevel); // Start the game from the first level
});

// Function to render the persona card dynamically
function renderPersonaCard(persona) {
    const personaCard = document.getElementById('persona-card');

    // HTML structure for the persona card
    const personaCardHTML = `
        <div class="persona-container">
            <div class="image-container">
                <img src="${persona.image}" alt="Persona Image">
            </div>
            <div class="text">
                ${persona.text}
            </div>
        </div>
    `;

    // Insert the persona card structure into the container
    personaCard.innerHTML = personaCardHTML;
}

// Function to render the solution cards dynamically
function renderSolutionCards(solutions) {
    const solutionCards = document.getElementById('solution-cards');
    solutionCards.innerHTML = ""; // Clear previous cards if any

    solutions.forEach(solution => {
        // Create card container
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        // HTML structure for each card
        const cardBody = `
            <div class="card-body"></div>
            <img class="card-image" src="${solution.image}" alt="${solution.name}">
            <div class="card-description">
                <span><b>${solution.name} </b></span><span>${solution.description}</span>
            </div>
        `;

        // Insert the card structure into the container
        cardContainer.innerHTML = cardBody;

        // Add click event to check if the card is correct
        cardContainer.addEventListener('click', () => selectSolution(solution));

        // Append the card to the solution cards container
        solutionCards.appendChild(cardContainer);
    });
}

// Function to handle selecting a solution card
function selectSolution(solution) {
    if (!hasAttempted) {
        if (solution.correct) {
            // If correct and first try, increment the score
            score++;
            document.getElementById('score-value').textContent = score;
        } else {
            // If incorrect on the first try, mark as attempted
            hasAttempted = true;
        }
    }

    if (solution.correct) {
        // Check if there are more levels
        currentLevel++;
        if (currentLevel < gameData.length) {
            // Load next persona and solutions
            loadGameLevel(currentLevel);
        } else {
            // End of the game
            endGame();
        }
    } else {
        // If incorrect, show the modal
        showModal();
    }
}

// Function to load a specific game level
function loadGameLevel(level) {
    hasAttempted = false; // Reset the attempt flag for the new level
    const levelData = gameData[level];
    renderPersonaCard(levelData.persona); // Render the persona card
    renderSolutionCards(levelData.solutions); // Render the solution cards
}

// Function to replace game-container with "END OF THE GAME" and show the score
function endGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Clear the game container

    // Create end game container
    const endGameContainer = document.createElement('div');
    endGameContainer.classList.add('end-game-container');

    // Add end of game message and score
    const endMessage = `
        <h1>ENDE DES SPIELS</h1>
        <h2>Ihr Endergebnis:  ${score} von 8</h2>
        <div id="slide-deck-container">
            <div id="prev-slide" class="slide-nav">&lt;</div>
            <div id="slide-deck" class="slide-deck"></div>
            <div id="next-slide" class="slide-nav">&gt;</div>
        </div>
    `;

    endGameContainer.innerHTML = endMessage;
    gameContainer.appendChild(endGameContainer);

    // Gather all solution cards for the slideshow
    const allSolutionCards = [];
    gameData.forEach(level => {
        level.solutions.forEach(solution => {
            const cardHTML = `
                <div class="slide-card">
                    <img class="slide-image" src="${solution.image}" alt="${solution.name}">
                    <div class="slide-description">
                        <span><b>${solution.name} </b></span><span>${solution.description}</span>
                    </div>
                    <div class="card-link">Weitere Informationen: <a href="${solution.link}" target="_blank">${solution.link}</a></div>
                </div>
            `;
            allSolutionCards.push(cardHTML);
        });
    });

    // Insert the first few slides into the slide deck
    const slideDeck = document.getElementById('slide-deck');
    slideDeck.innerHTML = allSolutionCards[0]; // Start with the first slide

    let currentSlide = 0;

    // Function to show the next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % allSolutionCards.length;
        slideDeck.innerHTML = allSolutionCards[currentSlide];
    }

    // Function to show the previous slide
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + allSolutionCards.length) % allSolutionCards.length;
        slideDeck.innerHTML = allSolutionCards[currentSlide];
    }

    // Event listeners for navigation
    document.getElementById('next-slide').addEventListener('click', showNextSlide);
    document.getElementById('prev-slide').addEventListener('click', showPrevSlide);
}

// Function to show the modal
function showModal() {
    const modal = document.getElementById('try-again-modal');
    modal.style.display = 'flex'; // Show the modal

    // Close the modal when the close button is clicked
    document.querySelector('.close-btn').onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal if the user clicks outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// Initialize the game on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadGameLevel(currentLevel); // Start with the first level
    setupModal(); // Setup modal close functionality
});