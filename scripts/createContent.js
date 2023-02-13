import * as fs from 'fs'

const content = {
  // json de articulo de inteligencia artificial en la industria del desarrollo de software
  slug: 'ia-en-la-industria',
  title: 'Inteligencia Artificial en la industria del desarrollo de software',
  description: 'La inteligencia artificial es una de las tecnologías más importantes de la actualidad. En este artículo te contamos cómo se está aplicando en la industria del desarrollo de software.',
  html: '<p>La inteligencia artificial es una de las tecnologías más importantes de la actualidad. En este artículo te contamos cómo se está aplicando en la industria del desarrollo de software.</p>',
  tags: ['inteligencia artificial', 'desarrollo de software'],
  date: '2020-10-01',
}

function createEmptyJsonFile(fileName) {
  fs.writeFileSync(`data/articles/${fileName}.json`, JSON.stringify(content))
  console.log(`El archivo ${fileName}.json ha sido creado con éxito.`)
}

createEmptyJsonFile(content.slug)