/*let  cinema 
const catalogo = [
    {
      "codigo": 1,
      "titulo": "Harry Potter e a Pedra Filosofal",
      "duracao": 2.5,
      "atores": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      "anoDeLancamento": 2001,
      "emCartaz": true
    },
    {
      "codigo": 2,
      "titulo": "Harry Potter e a Câmara Secreta",
      "duracao": 2.5,
      "atores": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      "anoDeLancamento": 2002,
      "emCartaz": true
    },
    {
      "codigo": 3,
      "titulo": "Harry Potter e o Prisioneiro de Azkaban",
      "duracao": 3.5,
      "atores": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      "anoDeLancamento": 2004,
      "emCartaz": false
    },
    {
      "codigo": 4,
      "titulo": "O Massacre da Serra Elétrica",
      "duracao": 1.5,
      "atores": ["Cassio", "Ygor Silva"],
      "anoDeLancamento": 2022,
      "emCartaz": true
    },
    {
      "codigo": 5,
      "titulo": "WiFi Ralph: Quebrando a Internet",
      "duracao": 1.5,
      "atores": ["John C. Reilly", "Sarah Silverman"],
      "anoDeLancamento": 2018,
      "emCartaz": false
    }
  ]
  */
  /*
  const catalogo = require('./database/catalogo.json');
   console.log(catalogo);

const alterarStatusEmCartaz = (codigo) => {
    let  filme = catalogo.find((filmes)=> filme.codigo == codigo)
    if (!filme){
        console.log("Filme não encontrado!");
        return  null;
    }
    
    filme.emCartaz ==true ?
    filme.emCartaz = false:
    
    filme.emCartaz = true;
    
}
alterarStatusEmCartaz(1)

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)

// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo

// alterar o status de emCartaz (true -> false e se tiver false -> true) 
// (alterarStatusEmCartaz) -> parametro: codigo






// const catalogo = require('./database/catalogo.json')

// // listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)
// const listarTodosOsFilmesEmCartaz = () => {
//   catalogo.forEach((filme) => console.log(`Nome do filme: ${filme.titulo}`))
// }

// // buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo
// const buscarFilme = (codigoParametro) => catalogo.find((filme) => filme.codigo == codigoParametro)

// // alterar o status de emCartaz (true -> false e se tiver false -> true) 
// // (alterarStatusEmCartaz) -> parametro: codigo
// const alterarStatusEmCartaz = (codigo, callback) => {
//   let filme = callback(codigo)

//   if (!filme) {
//     console.log("Filme não encontrado!")
//     return null;
//   }

//   filme.emCartaz == true ? 
//     filme.emCartaz = false 
//   : filme.emCartaz = true;
//   // filme.emCartaz = !filme.emCartaz

//   return filme;
// }

// // adicionar um novo filme no nosso catalogo (adicionarFilme) -> 
// // parametro: filme: { codigo, titulo, atores, duracao, anoDeLancamento }
// const adicionarFilme = (filme) => {
//   const { codigo, titulo, atores, duracao, anoDeLancamento } = filme;

//   if (!duracao) {
//     console.log("Não é possível adicionar um filme sem duração");
//     return
//   }

//   const filmeParaAdicionar ={
//       ...filme,
//       emCartaz: true
//   }
  
//   catalogo.push(filmeParaAdicionar);

//   return filmeParaAdicionar;
// }

// // listar os filmes com duracao maior do que 2h (listarFilmesComLongaDuracao) -> filter;


// // console.log(alterarStatusEmCartaz(1, buscarFilme))
// // listarTodosOsFilmesEmCartaz()
//   // adicionarFilme({ 
//   //   codigo: 6, 
//   //   titulo: "O Poderoso Chefão",
//   //   atores: ["Marlon Brando", "Al Pacino", "James Caan"],
//   //   duracao: 3.5,
//   //   anoDeLancamento: 1972
//   // })

  // chamar a função de listar os filmes aqui depois de chamar a função de adicionar

/*
  const listarFilmesComLongaDuracao = () => {
    return catalogo.filter((filme) => filme.duracao > 2)
} 

console.log(listarFilmesComLongaDuracao())  
*/

function adicionarHttp(url){

  return "http://"+url;

}

function processar(array,funcao){
  let newArray = [];
  for(x of array){
      newArray.push(funcao(x))
  }
  return newArray    
}
