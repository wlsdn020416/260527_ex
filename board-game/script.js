// Sample board games data
const boardGames = [
    {
        id: 1,
        name: "카탄 (Catan)",
        image: "https://cf.geekdo-images.com/original/img/9YwGuApd7TDLv_fVsyDQv5NYY5k=/fit-in/246x300/pic1524665.jpg",
        description: "카탄은 섬을 개척하고 자원을 거래하여 문명을 건설하는 전략 게임입니다. 플레이어들은 도로, 정착지, 도시를 건설하며 승리를 위해 10점을 먼저 달성해야 합니다.",
        players: "3-4명 (확장팩으로 5-6명 가능)",
        playtime: "60-120분",
        age: "10세 이상",
        tags: ["전략", "자원 관리", "협상", "보드 게임 클래식"]
    },
    {
        id: 2,
        name: "티켓 투 라이드 (Ticket to Ride)",
        image: "https://cf.geekdo-images.com/original/img/3iyQ09K4HgzzUMW9NoO8enGxgVY=/fit-in/246x300/pic644872.jpg",
        description: "티켓 투 라이드는 철도 노선을 연결하여 목적지를 달성하는 게임입니다. 간단한 규칙과 깊은 전략성으로 모든 연령대가 즐길 수 있는 명작입니다.",
        players: "2-5명",
        playtime: "30-60분",
        age: "8세 이상",
        tags: ["노선 건설", "세트 수집", "가족 게임", "초보자 친화적"]
    },
    {
        id: 3,
        name: "팬데믹 (Pandemic)",
        image: "https://cf.geekdo-images.com/original/img/vgU31DskOZpKADTX4WNNoBBZqw8=/fit-in/246x300/pic956716.jpg",
        description: "팬데믹은 협력 게임으로, 플레이어들은 질병 전문가 팀이 되어 전 세계에 퍼진 질병을 치료하고 치료법을 찾아야 합니다. 모두가 함께 이기거나 함께 집니다.",
        players: "2-4명",
        playtime: "45분",
        age: "8세 이상",
        tags: ["협력", "질병 통제", "전략", "긴장감 넘침"]
    },
    {
        id: 4,
        name: "아그리콜라 (Agricola)",
        image: "https://cf.geekdo-images.com/original/img/BinbrYAwyqOagT8R6Ru3g0WI8vE=/fit-in/246x300/pic674812.jpg",
        description: "아그리콜라는 농장을 운영하며 가족을 기르고 음식을 생산하는 워커 플레이스먼트 게임입니다. 제한된 라운드 내에서 최적의 농장을 만들어야 합니다.",
        players: "1-5명",
        playtime: "30-150분",
        age: "12세 이상",
        tags: ["워커 플레이스먼트", "농장 경영", "자원 관리", "깊은 전략"]
    },
    {
        id: 5,
        name: "7 원더스 (7 Wonders)",
        image: "https://cf.geekdo-images.com/original/img/5Zl0FOYvsyfw4vDDNVwesQjFFxE=/fit-in/246x300/pic857352.jpg",
        description: "7 원더스는 문명 건설 카드 드래프팅 게임으로, 3시대에 걸쳐 자원을 모으고 군대를 building하며 과학을 발전시켜 가장 위대한 문명을 건설하는 게임입니다.",
        players: "2-7명",
        playtime: "30분",
        age: "10세 이상",
        tags: ["카드 드래프팅", "문명 건설", "빠른 전개", "다인원 게임"]
    },
    {
        id: 6,
        name: "골드러시 (Gold Rush)",
        image: "https://cf.geekdo-images.com/original/img/_RBvH4XfMLt2R41ZG0p5YpAvbJ0=/fit-in/246x300/pic1242493.jpg",
        description: "골드러시는 서부 개척 시대의 금광 채광을 테마로 한 게임입니다. 플레이어들은 금광에 투자하고 노동자를 고용하여 가장 많은 금을 채취하는 사람이 승리합니다.",
        players: "2-5명",
        playtime: "45-60분",
        age: "10세 이상",
        tags: ["투자", "채광", "서부 개척", "경제 게임"]
    }
];

// DOM elements
const gamesGrid = document.getElementById('gamesGrid');
const modal = document.getElementById('gameModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    setupModalEvents();
});

// Render games to the grid
function renderGames() {
    gamesGrid.innerHTML = '';
    
    boardGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description.substring(0, 100)}...</p>
                <div class="game-tags">
                    ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        gameCard.addEventListener('click', () => openModal(game));
        gamesGrid.appendChild(gameCard);
    });
}

// Open modal with game details
function openModal(game) {
    modalTitle.textContent = game.name;
    modalImage.src = game.image;
    modalImage.alt = game.name;
    
    modalDetails.innerHTML = `
        <h3>게임 정보</h3>
        <p><strong>설명:</strong> ${game.description}</p>
        <p><strong>플레이 인원:</strong> ${game.players}</p>
        <p><strong>플레이 시간:</strong> ${game.playtime}</p>
        <p><strong>추천 연령:</strong> ${game.age}</p>
        <h3>카테고리</h3>
        <div class="game-tags">
            ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Setup modal event listeners
function setupModalEvents() {
    closeBtn.addEventListener('click', closeModal);
    
    // Close when clicking outside of modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}