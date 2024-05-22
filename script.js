// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        { category: 'category1', img: 'images/frst.jpg', description: 'Опис 1' },
        { category: 'category2', img: 'images/sec.jpg', description: 'Опис 2' },
        // Додайте більше карток відповідно до потреб
    ];
    
    

    const cardContainer = document.getElementById('card-container');

    function loadCards(filter = 'all') {
        cardContainer.innerHTML = '';
        cards.filter(card => filter === 'all' || card.category === filter)
             .forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.innerHTML = `
                    <img src="${card.img}" alt="${card.description}">
                    <div class="description">${card.description}</div>
                `;
                cardContainer.appendChild(cardElement);
             });
    }

    loadCards();

    window.filterCards = loadCards;

    setTimeout(() => {
        const subscribePopup = document.getElementById('subscribe-popup');
        if (!localStorage.getItem('subscribed')) {
            subscribePopup.classList.remove('hidden');
        }
    }, 3000);

    window.subscribe = function() {
        localStorage.setItem('subscribed', 'true');
        hidePopup();
        alert('Дякуємо за приєднання!');
    };

    window.hidePopup = function() {
        document.getElementById('subscribe-popup').classList.add('hidden');
    };

    setTimeout(() => {
        const adModal = document.getElementById('ad-modal');
        adModal.classList.remove('hidden');

        let countdown = 5;
        const countdownElement = document.getElementById('countdown');
        const closeAdBtn = document.getElementById('close-ad-btn');

        const countdownInterval = setInterval(() => {
            countdown -= 1;
            countdownElement.textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                closeAdBtn.classList.remove('hidden');
            }
        }, 1000);
    }, 5000);
    
    window.closeAd = function() {
        document.getElementById('ad-modal').classList.add('hidden');
    };
});
