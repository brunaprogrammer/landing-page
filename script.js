let usuarios =[];

//esta variavel armazenará os dados do cliente e endereço
let usuario = {
  email:"",
  endereco:""
};

let produtos = [{
  id: 1,
  nome: "Outriders",
  valorNormal: 200,
  valorPromo: 199,
  imagem: 'product-outriders.png'
},
{
  id: 2,
  nome: "Cyberpunk",
  valorNormal: 200,
  valorPromo: 199,
  imagem: 'product-cyberpunk2077.png'
},
{
  id: 3,
  nome: "Donkey Kong Country Tropical Freeze",
  valorNormal: 200,
  valorPromo: 199,
  imagem: 'product-donkey-kong-country-tropical-freeze.png'
},
];

//sao identificados pelos numeros de id
let produtosComprados = [];

window.onload = function(){
  carregarProdutos();
  carregarUsuarios()
}

function carregarProdutos(){
  produtosComprados = JSON.parse(localStorage.getItem("produtosComprados")) || produtosComprados;
  console.log(produtosComprados);

  for(var j = 0; j< produtosComprados.length; j++){
    console.log(produtosComprados[j])
    let p = produtos.filter(a=> a.id == produtosComprados[j]);
    console.log(p[0].nome)
  }

  for(var i = 0; i < produtos.length; i++){
    let produto = `<div class="caixa">
    <div class="caixa-jogo">
        <img src=${produtos[i].imagem} alt="">
    </div>
    <div class="caixa-preco">
        <p>${produtos[i].nome}</p>
        <p>R$ ${produtos[i].valorPromo}</p>
        <p>R$ ${produtos[i].valorNormal}</p>
        <div class="mudado">
            <button class="btn um" onclick= "comprar(${produtos[i].id})">COMPRAR</button>
        </div>
    </div>`
    document.querySelector(".promotions-container").insertAdjacentHTML("beforeend", produto);
  }
}

function carregarUsuarios (){
  usuarios = JSON.parse(localStorage.getItem("usuariosSalvos")) || usuarios
  console.log(usuarios)
}

function comprar (id){
  
  produtosComprados.push(id);
  localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));
}

/*cria uma funçao comprar 
qnd clicar botao comprar o produto e salvar no local storage*/

const form = document.getElementById('news');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const email = data.get('email');
  usuario.email = email;
  usuarios.push(usuario);

  localStorage.setItem('email-news', email);
  localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios));
  alert('Email cadastrado na base com sucesso');
});

