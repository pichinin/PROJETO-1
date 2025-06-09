let sensorUmidade; // variável para simular sensor de umidade
let umidade = 100; // valor inicial da umidade do solo (%)

function setup() {
  createCanvas(600, 400);
  sensorUmidade = createSlider(0, 100, 100); // slider para simular variação da umidade
  sensorUmidade.position(20, height + 20);
  sensorUmidade.style('width', '200px');
}

function draw() {
  background(135, 206, 235); // céu azul

  // Desenhar campo verde
  fill(34, 139, 34);
  rect(0, height / 2, width, height / 2);

  // Desenhar sol
  fill(255, 204, 0);
  ellipse(550, 80, 80, 80);

  // Atualizar umidade com valor do slider (simulando sensor)
  umidade = sensorUmidade.value();

  // Mostrar texto com valor da umidade
  fill(0);
  textSize(16);
  text("Sensor de Umidade do Solo: " + umidade + "%", 20, 30);

  // Desenhar plantas no campo
  for (let x = 50; x < width; x += 60) {
    drawPlanta(x, height / 2 + 50, umidade);
  }
}

// Função para desenhar uma planta simples, mudando cor conforme umidade
function drawPlanta(x, y, umidade) {
  // Cor da planta varia: mais verde se umidade alta, mais amarelada se baixa
  let corVerde = map(umidade, 0, 100, 100, 255);
  let corAmarelo = map(umidade, 0, 100, 255, 100);
  fill(corAmarelo, corVerde, 0);

  // Tronco
  stroke(101, 67, 33);
  strokeWeight(4);
  line(x, y, x, y - 40);

  // Folhas
  noStroke();
  ellipse(x, y - 50, 30, 40);
  ellipse(x - 15, y - 40, 20, 30);
  ellipse(x + 15, y - 40, 20, 30);
}

