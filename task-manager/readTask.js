import {readFileSync} from 'node:fs'

const readTodo = ()=>{
   const result =   readFileSync('./todo.json','utf8')
   return result
}

export default readTodo