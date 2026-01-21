export const comment = "TypeScript is a strongly typed programming language"
let str:string[] = []
let res:string =""

function shortenComment(comment: string): string {
  str = comment.split(" ")

  for(let i =0;i<str.length;i++){
    if(str[i].length>=5 &&str[i].length<=10){
      res += str[i]
      res += " "
    }
  }
  return res.trim()
}
console.log(shortenComment(comment))