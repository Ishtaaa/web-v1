<script lang="ts">
  let board: Array<'O' | 'X' | ''> = Array(9).fill('');
  let turnO = true; // Player O starts
  let winnerMessage = '';
  let showMessage = false;

  const winPatterns: number[][] = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  function handleBoxClick(index: number) {
    if (showMessage || !turnO || board[index] !== '') return;
    board[index] = 'O';
    turnO = false;
    checkWinner();
    if (!showMessage) {
      setTimeout(computerMove, 250);
    }
  }

  function computerMove() {
    if (turnO || showMessage) return;
    const available: number[] = board
      .map((v, i) => (v === '' ? i : -1))
      .filter((i) => i !== -1);
    if (available.length === 0) return;
    const moveIndex = available[Math.floor(Math.random() * available.length)];
    board[moveIndex] = 'X';
    turnO = true;
    checkWinner();
  }

  const enableBoxes = () => {
    board = Array(9).fill('');
  };

  const showWinner = (winner: string) => {
    winnerMessage = `Congratulations, Winner is ${winner}`;
    showMessage = true;
  };

  const checkWinner = () => {
    let hasWin = false;
    for (const pattern of winPatterns) {
      const pos1Val = board[pattern[0]];
      const pos2Val = board[pattern[1]];
      const pos3Val = board[pattern[2]];

      if (
        pos1Val !== '' &&
        pos2Val !== '' &&
        pos3Val !== '' &&
        pos1Val === pos2Val &&
        pos2Val === pos3Val
      ) {
        showWinner(pos1Val);
        hasWin = true;
        return;
      }
    }

    if (!hasWin) {
      const allBoxesFilled = board.every((cell) => cell !== '');
      if (allBoxesFilled) {
        showMessage = true;
        winnerMessage = 'Match Drawn';
      }
    }
  };

  const resetGame = () => {
    turnO = true;
    enableBoxes();
    showMessage = false;
    winnerMessage = '';
  };

  // board state drives UI; no DOM querying required
</script>

<section class="min-h-[80vh] bg-beige-500 flex flex-col items-center justify-start gap-6 py-10">
  <h1 class="text-4xl font-extrabold tracking-tight text-sage-500">Tic Tac Toe</h1>

  {#if showMessage}
    <div class="alert shadow-lg w-full max-w-xl bg-darkbeige-500 text-darkgreen-500">
      <span id="msg" class="text-xl font-semibold">{winnerMessage}</span>
      <div>
        <button id="new-btn" class="btn btn-sm btn-primary" on:click={resetGame}>
          New Game
        </button>
      </div>
    </div>
  {/if}

  <div class="w-full max-w-2xl">
    <div class="card bg-darkbeige-500 rounded-2xl shadow-2xl">
      <div class="card-body items-center gap-6">
        <div class="grid grid-cols-3 gap-1 md:gap-2 place-items-center">
          {#each Array(9) as _, i}
            <div class="relative">
              <button
                class="ttt-box btn btn-square w-32 h-32 md:w-40 md:h-40 bg-darkgreen-500 hover:bg-sage-500 text-beige-500 shadow-md"
                aria-label={`Board cell ${i + 1}`}
                aria-disabled={board[i] !== ''}
                on:click={() => handleBoxClick(i)}
              ></button>
              {#if board[i]}
                <span class="pointer-events-none absolute inset-0 flex items-center justify-center text-7xl md:text-8xl font-extrabold text-beige-500">{board[i]}</span>
              {/if}
            </div>
          {/each}
        </div>

        <button id="reset" class="btn btn-neutral" on:click={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  </div>
</section>