# Lotofacil

Este projeto busca informações do último sorteio realizado pela Lotofacil.

## Start

Para executar este projeto faça o clone do projeto, execute o comando `yarn` ou `npm` para baixar as dependencias e execute o comando:

```sh
yarn start
```

ou

```sh
npm start
```

ou

```sh
node server.js
```

observação: os 3 comandos fazem exatamente a mesma coisa

A saída deve se parecer com isso:

```javascript
{
  concurso: 1925,
  data: '05/02/2020',      
  numeros: [
     1,  2,  3,  4,  5,  6,
     7,  9, 13, 14, 16, 18,
    20, 21, 23
  ],
  premiacao: [
    { acertos: 15, quantidadeApostaGanhadora: 1, valor: 2427637.13 },
    { acertos: 14, quantidadeApostaGanhadora: 510, valor: 1464.64 },
    { acertos: 13, quantidadeApostaGanhadora: 18295, valor: 25 },
    { acertos: 12, quantidadeApostaGanhadora: 197668, valor: 10 },
    { acertos: 11, quantidadeApostaGanhadora: 1054845, valor: 5 }
  ],
  arrecadacaoTotal: 30089380,
  detalhamento: [
    {
      localizacao: { cidade: 'SÃO JOSÉ DO RIO PRETO', uf: 'SP' },
      descricao: '1 aposta ganhou o prêmio para 15 acertos'
    }
  ],
  localSorteio: 'Sorteio realizado no Espaço Loterias Caixa em SÃO PAULO, SP'
}
```

## End

 🖖 vida longa e prospera
