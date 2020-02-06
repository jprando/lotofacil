const puppeteer = require('puppeteer')

const dados = {
  concurso: 0,
  data: null,
  numeros: [],
  premiacao: [],
  arrecadacaoTotal: null,
  detalhamento: [],
  localSorteio: null
};

(async () => {
  const browser = await puppeteer.launch({ product: 'firefox', headless: true })
  const page = await browser.newPage()
  await page.goto('http://loterias.caixa.gov.br/wps/portal/loterias/landing/lotofacil/')

  /// ## Concurso NUMERO e DATA
  const concurso = await page.evaluate(() => document
    .querySelector('.title-bar > h2:nth-child(2) > span:nth-child(1)')
    .textContent.trim()
    .split(/[ |\r\n|(|)]/).map(txt => txt.trim())
    .filter(txt => txt)
    .reduce((acc, item, idx) => {
      const prop = [false, 'concurso', 'data'][idx]
      if (prop) acc[prop] = item
      console.log('acc', acc)
      return acc
    }, {}))

  concurso.concurso = Number.parseInt(concurso.concurso)
  Object.assign(dados, concurso)

  /// ## NUMEROS sorteados
  const numeros = await page.evaluate(() => Array.from(document
    .querySelectorAll('tr.ng-scope > td'))
    .map(dom => Number.parseInt(dom.textContent))
  )
  dados.numeros = numeros

  /// ## ARRECADACAO total
  const arrecadacaoTotal = await page.evaluate(() => document
    .querySelector('div.related-box:nth-child(1) > p:nth-child(9) > strong:nth-child(1)')
    .textContent.trim().split(' ')[1].replace(/[.]/g, '').replace(',', '.')
  )
  dados.arrecadacaoTotal = Number.parseFloat(arrecadacaoTotal)

  /// ## PREMIACAO

  const premiacao = await page.evaluate(() => Array.from(document
    .querySelectorAll('div.related-box:nth-child(1) > p.description.ng-binding'))
    .map(i => i.textContent.trim().split(/\t|\n/).filter(txt => txt).join(', '))
    .reduce((acc, item) => {
      const values = item.split(/ acertos, | aposta ganhadora, R\$ | apostas ganhadoras, R\$ /)
      acc.push({
        acertos: Number.parseInt(values[0]),
        quantidadeApostaGanhadora: Number.parseInt(values[1]),
        valor: Number.parseFloat(values[2].replace(/[.]/g, '').replace(',', '.'))
      })
      return acc
    }, [])
  )
  dados.premiacao = premiacao

  /// ## DETALHAMENTO

  const detalhamento = await page.evaluate(() => Array.from(document
    .querySelectorAll('p.ng-scope'))
    .map(dom => Array.from(dom
      .querySelectorAll('span:not(.ng-hide):not(.ng-scope):not(.ng-binding)'))
      .map(txt => txt.innerText.trim())
    ).reduce((acc, item) => {
      const localizacao = item[0].split(' - ')
      acc.push({
        localizacao: {
          cidade: localizacao[0],
          uf: localizacao[1]
        },
        descricao: item[1]
      })
      return acc
    }, [])
  )
  dados.detalhamento = detalhamento

  /// ## LOCAL do sorteio
  const localSorteio = await page.evaluate(() => document
    .querySelector('.resultado-loteria > p:nth-child(2)').innerText
  )
  dados.localSorteio = localSorteio

  console.log('')
  console.log('### DADOS ')
  console.log(dados)
  console.log('')
  console.log('### JSON ')
  console.log(JSON.stringify(dados, null, 2))
  console.log('')

  await page.screenshot({ path: 'lotofacil.png', fullPage: true })

  await browser.close()
})()
