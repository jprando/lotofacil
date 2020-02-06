# Lotofacil

🎲 Este projeto busca informações do último sorteio realizado pela Lotofacil.

🌐 [link para resultados da lotofacil](http://loterias.caixa.gov.br/wps/portal/loterias/landing/lotofacil/)

## Start

Para executar este projeto:
- 🤲 faça o clone do projeto
```sh
~/projetos> git clone https://github.com/jprando/lotofacil.git
```
- 📦 execute o comando `yarn` ou `npm` para baixar as dependências
```sh
~/projetos> cd lotofacil
~/projetos/lotofacil> yarn

yarn install v1.19.1
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.12s.
```
- ⚙️ execute um dos comandos abaixo

```sh
~/projetos/lotofacil> yarn start
```
```sh
~/projetos/lotofacil> npm start
```
```sh
~/projetos/lotofacil> node server.js
```

observação: os 3 comandos acima fazem exatamente a mesma coisa, executam o projeto

📝 A saída deve se parecer com isso:

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
  localSorteio: { descricao: 'Espaço Loterias Caixa', cidade: 'SÃO PAULO', uf: 'SP' }
}
```

## End

 🖖 vida longa e prospera
