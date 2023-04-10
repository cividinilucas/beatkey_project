
let bpm = 120; 
let playing = false; 
let timer = null; 

// função para tocar o som do metrônomo
function playSound() {
    const audio = new Audio('./548518__ludwigmueller__perc_metronomequartz_hi.wav');
    audio.addEventListener('error', function() {
      console.log('Erro ao carregar o arquivo de som');
    });
    audio.play();
  }

// função para controlar o metrônomo
function metronome() {
  const delay = 60 / bpm * 1000; // calcula o tempo entre os batimentos
  if (playing) {
    playSound();
  }
  timer = setTimeout(metronome, delay); // chama a função novamente após o tempo de delay
}

// função para começar a tocar o metrônomo
function start() {
  playing = true;
  metronome();
}

// função para parar o metrônomo
function stop() {
  playing = false;
  clearTimeout(timer);
}

// função para salvar o treino
function saveWorkout() {
  const workout = {
    date: new Date(),
    bpm: bpm,
  };
  const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
  workouts.push(workout);
  localStorage.setItem('workouts', JSON.stringify(workouts));
}

// adiciona listeners aos botões
document.getElementById('start-stop-btn').addEventListener('click', function() {
  if (playing) {
    stop();
    this.innerText = 'Iniciar';
  } else {
    start();
    this.innerText = 'Parar';
  }
});
document.getElementById('tempo').addEventListener('change', function() {
  bpm = parseInt(this.value);
});
document.getElementById('beats-per-measure-2-btn').addEventListener('click', function() {
  alert('2/4 selecionado');
});
document.getElementById('beats-per-measure-3-btn').addEventListener('click', function() {
  alert('3/4 selecionado');
});
document.getElementById('beats-per-measure-4-btn').addEventListener('click', function() {
  alert('4/4 selecionado');
});
document.getElementById('accent-btn').addEventListener('click', function() {
  alert('Acêntuo no 1º tempo selecionado');
});
document.getElementById('no-accent-btn').addEventListener('click', function() {
  alert('Sem acêntuo selecionado');
});
document.getElementById('save').addEventListener('click', saveWorkout);





