const trucks = [

    {
        brand: 'volvo',
        name: 'Volvo FH16',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200',
        year: '2024',
        power: '750 л.с.',
        price: 'от 12 400 000 ₽'
    },

    {
        brand: 'scania',
        name: 'Scania R500',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200',
        year: '2023',
        power: '500 л.с.',
        price: 'от 11 200 000 ₽'
    },

    {
        brand: 'man',
        name: 'MAN TGX',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200',
        year: '2024',
        power: '640 л.с.',
        price: 'от 10 800 000 ₽'
    }

];

const catalogList = document.getElementById('catalogList');

const filterButtons = document.querySelectorAll('.filter-btn');

const modal = document.getElementById('modal');

const form = document.getElementById('form');

const closeModal = document.getElementById('closeModal');

const mobileBtn = document.getElementById('mobileBtn');

const mobileMenu = document.getElementById('mobileMenu');

const openModalBtn = document.getElementById('openModal');

function renderCards(filter = 'all') {

    catalogList.innerHTML = '';

    const filtered = filter === 'all'
        ? trucks
        : trucks.filter(item => item.brand === filter);

    filtered.forEach(truck => {

        const card = document.createElement('div');

        card.classList.add('truck-card');

        card.innerHTML = `
            <img src="${truck.image}" alt="${truck.name}">

            <div class="truck-info">

                <h3>${truck.name}</h3>

                <p>Год выпуска: ${truck.year}</p>

                <p>Мощность: ${truck.power}</p>

                <p class="price">${truck.price}</p>

            </div>
        `;

        catalogList.append(card);

    });

}

renderCards();

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        renderCards(button.dataset.filter);

    });

});

form.addEventListener('submit', (event) => {

    event.preventDefault();

    modal.style.display = 'flex';

    form.reset();

});

closeModal.addEventListener('click', () => {

    modal.style.display = 'none';

});

window.addEventListener('click', (event) => {

    if (event.target === modal) {

        modal.style.display = 'none';

    }

});

mobileBtn.addEventListener('click', () => {

    if (mobileMenu.style.display === 'flex') {

        mobileMenu.style.display = 'none';

    } else {

        mobileMenu.style.display = 'flex';

    }

});

openModalBtn.addEventListener('click', () => {

    document.getElementById('contacts')
        .scrollIntoView({
            behavior: 'smooth'
        });

});

window.addEventListener('scroll', () => {

    const stats = document.querySelectorAll('.stat h2');

    stats.forEach(stat => {

        stat.style.transform =
            `translateY(${window.scrollY * 0.01}px)`;

    });

});