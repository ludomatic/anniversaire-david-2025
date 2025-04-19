// JavaScript for interactivity will go here

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // --- Confetti Animation --- 
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#bb86fc', '#03dac6', '#cf6679', '#e0e0e0']; // Theme colors
    const confettiCount = 100;

    function createConfettiPiece() {
        const piece = document.createElement('div');
        piece.style.position = 'absolute';
        piece.style.width = `${Math.random() * 10 + 5}px`; // 5px to 15px wide
        piece.style.height = piece.style.width;
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = `${Math.random() > 0.5 ? '50%' : '0'}`; // Circle or square
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.top = `${-20}px`; // Start above the screen
        piece.style.opacity = `${Math.random() * 0.5 + 0.5}`; // 0.5 to 1.0 opacity
        confettiContainer.appendChild(piece);
        animateConfettiPiece(piece);
    }

    function animateConfettiPiece(piece) {
        const duration = Math.random() * 3 + 2; // 2 to 5 seconds
        const rotation = Math.random() * 720 - 360; // -360 to 360 deg
        const fallDistance = window.innerHeight + 40;
        const drift = Math.random() * 100 - 50; // -50px to 50px horizontal drift

        piece.animate([
            { transform: `translateY(0px) translateX(0px) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${fallDistance}px) translateX(${drift}px) rotate(${rotation}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-out',
            iterations: 1
        }).onfinish = () => {
            piece.remove(); // Clean up the DOM element
        };
    }

    // Trigger confetti on load (for the first section)
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(createConfettiPiece, i * 30); // Stagger creation slightly
    }

    // --- Add other event listeners and functions here --- 

    // --- Smooth Scrolling for Navigation Buttons ---
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Form Submission Handling (to be added) ---
    
}); 