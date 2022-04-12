const visor = document.querySelector('#visor')
const botoes = document.querySelector('.calc-botao')

calcularComEnter()

function inserir(num) {
  const numero = visor.value
  visor.value = numero + num
}

function deletar() {
  const numero = visor.value
  visor.value = numero.slice(0, -1)
}

function limpar() {
  visor.value = ''
}

function calcular() {
  if(visor.value) {
    visor.value = eval(visor.value)
  }
}

function calcularComEnter() {
  addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
      document.activeElement.blur() // Remove foco do botão antes de pressionar o enter
      if(visor.value) {
        visor.value = eval(visor.value)
      }
    }
  })
}


const tema1 = document.getElementById('tema-1')
const tema2 = document.getElementById('tema-2')
const tema3 = document.getElementById('tema-3')
const fundo = document.querySelector('html')

tema1.addEventListener('change', (e) => {
  fundo.classList.remove('tema-2')
  fundo.classList.remove('tema-3')
  fundo.classList.toggle('tema-1', e.target.checked)
})

tema2.addEventListener('change', (e) => {
  fundo.classList.remove('tema-1')
  fundo.classList.remove('tema-3')
  fundo.classList.toggle('tema-2', e.target.checked)
})

tema3.addEventListener('change', (e) => {
  fundo.classList.remove('tema-1')
  fundo.classList.remove('tema-2')
  fundo.classList.toggle('tema-3', e.target.checked)
})

