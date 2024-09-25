

const input1 = ['카드', '포인트', '보험']
const fs = require('fs')

const content = fs.readFileSync('./kwd.input', 'utf8')
const input = content.split(/[\s,]+/)
console.log('input : ', input)

function getAction(category = '') {
  let action = {}
  switch (category) {
    case 'something':
      break;
    default:
      action = {
        type: ['관리', '조회', '가공'],
        fp: ['ILF', 'EQ', 'EO']
      }

  }

  return action
}

let result = []
const { type, fp } = getAction()
input.forEach(ele1 => {
  type.forEach((ele2, i) => {
    let item = {}
    item.content = `${ele1} ${ele2}`
    item.type = fp[i]
    result.push(item)
  })
})

result.forEach(({ content, type }) => {
  console.log(`${content}, ${type}`)
})
