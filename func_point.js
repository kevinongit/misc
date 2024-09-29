const input1 = ['카드', '포인트', '보험']
const fs = require('fs')

const content = fs.readFileSync('./kwd.input', 'utf8')
const input = content.split(/[,\r\n]+/)
console.log('input : ', input)

function getAction(category = '') {
  let action = {}
  switch (category) {
    case 'something':
      break
    default:
      action = {
        type: ['ASIS 정보조회', 'TOBE 정보입력'],
        fp: ['EQ', 'EI'],
      }
    // action = {
    //   type: ['관리', '조회', '가공'],
    //   fp: ['ILF', 'EQ', 'EO'],
    // }
  }

  return action
}

let result = []
const {type, fp} = getAction()
input.forEach(ele1 => {
  type.forEach((ele2, i) => {
    let item = {}
    item.content = `${ele1} ${ele2}`
    // console.log(ele2)
    item.type = fp[i]
    result.push(item)
  })
})

let outstr = ''
result.forEach(({content, type}) => {
  const line = `${content}, , ${type} \n`
  // console.log(line)
  outstr = outstr.concat(line)
})

fs.writeFileSync('./output.csv', outstr, {encoding: 'utf8'})
