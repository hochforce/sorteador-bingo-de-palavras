const premios = [
  'Jarra',
  'Relógio',
  'Avental',
  'Travessa',
  'Fruteira',
  'Balança',
  'Panelas',
  'Baldes',
  'Peneira',
  'Copos',
  'Potinhos',
  'Pilão',
  'Forma de gelo',
  'Capacho',
  'Tapetes',
  'Vasilhas',
  'Microondas',
  'Forno elétrico',
  'Talheres',
  'Porta pão',
  'Forma de bolo',
  'Colher de pau',
  'Espremedor de alho',
  'Escorredor de macarrão',
  'Escorredor de arroz',
  'Afiador de facas',
  'Porta talheres',
  'Porta guardanapos',
  'Abridor de latas',
  'Cesto de grampos',
  'Tampa microondas',
  'Garrafa de água',
  'Marinex',
  'Forma redonda',
  'Taça de sobremesa',
  'Espremedor de laranja',
  'Bandeja',
  'Paliteiro',
  'Balde de pipoca',
  'Funil',
  'Rodo',
  'Porta sabão em pó',
  'Pano de chão',
  'Jarra de suco',
  'Kit americano',
  'Porta óleo',
  'Copo de medida',
  'Porta condimentos',
  'Bacias',
  'Pano de prato',
  'Escorredor de louça',
  'Cesto de roupa',
  'Leiteira',
  'Concha de feijão',
  'Xícaras de café',
  'Luva térmica',
  'Tábua de carne',
  'Cabides',
  'Forma de pizza',
  'Toalha de mesa',
  'Ralador',
  'Assadeira retangular',
  'Pá de lixo',
  'Carrinho de mão',
  'Frigideira antiaderente',
  'Escada',
  'Porta ovos',
  'Saleiro',
  'Pires',
  'Saladeira',
  'Vassoura',
  'Tigela',
  'Lixeira',
  'Balança',
  'Açucareiro',
  'Tupperware',
  'Avental',
  'Descascador',
  'Espátula',
  'Forma de gelo',
  'Sanduicheira',
  'Faqueiro',
  'Colheres de silicone',
  'Ventilador',
  'Garrafa térmica',
  'Forro de cama',
  'Travesseiros',
  'Forma de pudim',
  'Cuscuzeira',
  'Copo de ferver água',
  'Talheres',
  'Panela de pressão',
  'Batedeira',
  'Almofadas',
  'Liquidificador',
  'Rede de casal',
  'Bule',
  'Tábua de passar roupa',
  'Banquetas',
  'Forma para pão',
];
let premiosSorteados = []
let count = 0
let valorSorteado;
let body = document.getElementById('body');

function mostrarTextoDoBotao() {
  document.querySelector('#button').classList.add("loading-view");
}
function sortear() {
  document.querySelector('#button').classList.remove("loading-view");
  document.querySelector('#loading').classList.add("loading-view");

  if (!valorSorteado) {
    valorSorteado = ""
  } else {
    document.getElementById("anterior").value = valorSorteado
  }
  const valor = Math.floor(Math.random() * premios.length);
  valorSorteado = premios[valor]
  if (premiosSorteados.length == premios.length) {
    document.querySelector('#loading').classList.remove("loading-view");
    document.querySelector('#button').style.display = 'none';
    document.querySelector('#all-values').classList.add("loading-view");
    document.querySelector('#button-fa').disabled = true;
    document.querySelector('#all-values').style.color = 'tomato'
    return
  } else {
    if (premiosSorteados.includes(valorSorteado)) {
      sortear()
    } else {
      setTimeout(function () {
        premiosSorteados[count] = valorSorteado
        count++
        document.getElementById("atual").value = valorSorteado
      }, 2000);
    }
  }

  setTimeout(function () {
    document.querySelector('#button').classList.add("loading-view");
    document.querySelector('#loading').classList.remove("loading-view");
  }, 2001);
}

window.onmousemove = function (e) {
  let x = - e.clientX / 5,
    y = - e.clientY / 5;
  body.style.backgroundPositionX = x + 'px';
  body.style.backgroundPositionY = y + 'px';
}

function imprimir() {
  let win = window.open('', '', 'height=700,width=700');
  let cont
  for (let index = 0; index < premiosSorteados.length; index++) {
    cont = index + 1;
    win.document.write('<h1>');
    win.document.write(cont, ' - ', premiosSorteados[index]);
    win.document.write('</h1>');
  }

}
