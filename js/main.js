// JavaScript for interactivity will go here

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // --- Send Page Load Webhook ---
    const webhookBaseUrl = 'https://im.go2.st/telegram/';
    const message = 'nouvelle visite';
    const encodedMessage = encodeURIComponent(message);
    const webhookUrl = `${webhookBaseUrl}?message=${encodedMessage}`;

    fetch(webhookUrl)
        .then(response => {
            if (!response.ok) {
                console.error('Webhook call failed with status:', response.status);
            }
            // No need to process the response body for a simple notification
        })
        .catch(error => {
            console.error('Error sending webhook:', error);
        });
    // --- End Webhook ---

    const lotterySection = document.getElementById('lottery');
    const giftSection = document.getElementById('gift');
    const sections = { // Store sections for easy access
        '#lottery': lotterySection,
        '#gift': giftSection
    };

    // --- Confetti Animation ---
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff8c00', '#ffad33', '#e0e0e0', '#cc3300']; // Use orange theme colors
    const confettiCount = 100;
    let confettiTimeout = null; // To manage timeouts if navigating away quickly

    function createConfettiPiece() {
        if (!confettiContainer) {
             console.error('Confetti container not found!');
             return;
         }
        const piece = document.createElement('div');
        piece.style.position = 'absolute';
        piece.style.width = `${Math.random() * 10 + 5}px`;
        piece.style.height = piece.style.width;
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = `${Math.random() > 0.5 ? '50%' : '0'}`;
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.top = `${-20}px`;
        piece.style.opacity = `${Math.random() * 0.5 + 0.5}`;
        confettiContainer.appendChild(piece);
        animateConfettiPiece(piece);
    }

    function animateConfettiPiece(piece) {
        const duration = Math.random() * 3 + 2; 
        const rotation = Math.random() * 720 - 360; 
        const fallDistance = window.innerHeight + 40;
        const drift = Math.random() * 100 - 50; 

        piece.animate([
            { transform: `translateY(0px) translateX(0px) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${fallDistance}px) translateX(${drift}px) rotate(${rotation}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-out',
            iterations: 1
        }).onfinish = () => {
            if (piece.parentNode) {
                 piece.remove();
             }
        };
    }

    function triggerConfetti() {
        if (!confettiContainer) return;
        clearTimeout(confettiTimeout);
        confettiContainer.innerHTML = ''; // Clear existing confetti
        for (let i = 0; i < confettiCount; i++) {
           confettiTimeout = setTimeout(createConfettiPiece, i * 30);
        }
    }
    // --- End Confetti ---

    // --- Section Navigation ---
    function setActiveSection(targetId) {
        const currentActive = document.querySelector('section.active');
        const targetSection = sections[targetId];

        if (currentActive) {
            currentActive.classList.remove('active');
        }

        if (targetSection) {
            targetSection.classList.add('active');
            if (targetId === '#lottery') {
                triggerConfetti(); // Trigger confetti when lottery becomes active
            }
        } else {
            console.error(`Target section ${targetId} not found!`);
        }
    }

    // --- Navigation Button Click Handling --- 
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        if (!button.matches('a.cta')) { // Exclude the external link
             button.addEventListener('click', (event) => {
                 event.preventDefault(); 
                 const targetId = event.target.getAttribute('data-target');
                 setActiveSection(targetId);
             });
        }
    });

    // --- Set Initial State ---
    if (lotterySection) {
        setActiveSection('#lottery'); // Activate first section on load
    } else {
        console.error('Initial lottery section not found!');
    }

    // --- Intersection Observer for Card Flip --- Removed ---

}); 