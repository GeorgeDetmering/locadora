class Veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
    this.alugado = false;
  }
  
  alugar() {
    if (!this.alugado) {
      this.alugado = true;
      return true;
    }
    return false;
  }
  
  devolver() {
    if (this.alugado) {
      this.alugado = false;
      return true;
    }
    return false;
  }
  
  alterarInformacoes(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }
}

const veiculos = [];

function listarVeiculosDisponiveis() {
  const disponiveis = veiculos.filter(veiculo => !veiculo.alugado);
  const output = document.getElementById('output');
  output.innerHTML = "<h2>Veículos Disponíveis:</h2>";
  
  if (disponiveis.length > 0) {
    const lista = disponiveis.map(veiculo => veiculo.modelo).join(", ");
    output.innerHTML += lista;
  } else {
    output.innerHTML += "Nenhum veículo disponível.";
  }
}

function listarVeiculosAlugados() {
  const alugados = veiculos.filter(veiculo => veiculo.alugado);
  const output = document.getElementById('output');
  output.innerHTML = "<h2>Veículos Alugados:</h2>";
  
  if (alugados.length > 0) {
    const lista = alugados.map(veiculo => veiculo.modelo).join(", ");
    output.innerHTML += lista;
  } else {
    output.innerHTML += "Nenhum veículo alugado.";
  }
}

function cadastrarVeiculo() {
  const modelo = prompt("Digite o modelo do veículo:");
  const ano = prompt("Digite o ano do veículo:");
  veiculos.push(new Veiculo(modelo, ano));
}

function alugarVeiculo() {
  const modelo = prompt("Digite o modelo do veículo a ser alugado:");
  const veiculo = veiculos.find(v => v.modelo === modelo);
  if (veiculo && veiculo.alugar()) {
    alert("Veículo alugado com sucesso!");
  } else {
    alert("O veículo não está disponível para aluguel.");
  }
}

function devolverVeiculo() {
  const modelo = prompt("Digite o modelo do veículo a ser devolvido:");
  const veiculo = veiculos.find(v => v.modelo === modelo);
  if (veiculo && veiculo.devolver()) {
    alert("Veículo devolvido com sucesso!");
  } else {
    alert("O veículo não foi alugado ou não existe.");
  }
}

function excluirVeiculo() {
  const modelo = prompt("Digite o modelo do veículo a ser excluído:");
  const index = veiculos.findIndex(v => v.modelo === modelo && !v.alugado);
  if (index !== -1) {
    veiculos.splice(index, 1);
    alert("Veículo excluído com sucesso!");
  } else {
    alert("O veículo não está disponível para exclusão ou não existe.");
  }
}

function alterarInformacoes() {
  const modelo = prompt("Digite o modelo do veículo a ter as informações alteradas:");
  const veiculo = veiculos.find(v => v.modelo === modelo);
  if (veiculo) {
    const novoModelo = prompt("Digite o novo modelo do veículo:");
    const novoAno = prompt("Digite o novo ano do veículo:");
    veiculo.alterarInformacoes(novoModelo, novoAno);
    alert("Informações do veículo alteradas com sucesso!");
  } else {
    alert("O veículo não existe.");
  }
}
