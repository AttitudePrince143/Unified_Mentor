const imageSet = [
    '🍕','🍩','🍉','🍓','🍇','🍒','🍔','🍟',
    '🥑','🍌','🍎','🍍','🥥','🍫','🍰','🥨',
    '🧁','🥕'
  ];
  
  let gridSize = 4;
  let cards = [];
  let flipped = [];
  let matched = 0;
  let moves = 0;
  let time = 0;
  let timerInterval;
  
  const grid = document.getElementById('grid');
  const movesSpan = document.getElementById('moves');
  const timerSpan = document.getElementById('timer');
  const winMessage = document.getElementById('winMessage');
  const restartBtn = document.getElementById('restart');
  const startBtn = document.getElementById('start');
  const gridSizeSelect = document.getElementById('grid-size');
  const matchSound = document.getElementById('match-sound');
  const noMatchSound = document.getElementById('nomatch-sound');
  
  function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  
  function initGame() {
    gridSize = parseInt(gridSizeSelect.value);
    const totalCards = gridSize * gridSize;
    const pairs = shuffle([...imageSet]).slice(0, totalCards / 2);
    cards = shuffle([...pairs, ...pairs]);
  
    flipped = [];
    matched = 0;
    moves = 0;
    time = 0;
    clearInterval(timerInterval);
    movesSpan.textContent = '0';
    timerSpan.textContent = '0s';
    winMessage.style.display = 'none';
    grid.className = `grid grid-${gridSize}`;
    grid.innerHTML = '';
  
    timerInterval = setInterval(() => {
      time++;
      timerSpan.textContent = `${time}s`;
    }, 1000);
  
    cards.forEach(img => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front"><span>${img}</span></div>
          <div class="card-back">❓</div>
        </div>
      `;
      card.addEventListener('click', () => handleClick(card, img));
      grid.appendChild(card);
    });
  }
  
  function handleClick(card, img) {
    if (card.classList.contains('flipped') || flipped.length === 2) return;
  
    card.classList.add('flipped');
    flipped.push({ card, img });
  
    if (flipped.length === 2) {
      moves++;
      movesSpan.textContent = moves;
  
      const [first, second] = flipped;
      if (first.img === second.img) {
        matchSound.play();
        matched += 2;
        flipped = [];
  
        if (matched === cards.length) {
          clearInterval(timerInterval);
          winMessage.style.display = 'block';
        }
      } else {
        noMatchSound.play();
        setTimeout(() => {
          first.card.classList.remove('flipped');
          second.card.classList.remove('flipped');
          flipped = [];
        }, 800);
      }
    }
  }
  
  startBtn.addEventListener('click', initGame);
  restartBtn.addEventListener('click', initGame);
  