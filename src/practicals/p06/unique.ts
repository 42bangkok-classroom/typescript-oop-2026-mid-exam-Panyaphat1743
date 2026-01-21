function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
let inters:number[]=[]
let re:number[] =[]
  let spac:number[] = []
  for(let i =0;i<arr1.length;i++){
    for(let y =0;y<arr2.length;y++)
    if(arr1[i] == arr2[y]){
      inters = [...inters,arr1[i]]
    }
  }
  for(let a =0;a<inters.length;a++){
    for(let n =0;n<arr1.length;n++){
      if(inters[a] != arr1[n]){

      }

  }
  }
  return spac
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(getUniqueNumbers([1, 2, 3, 4],[3, 4, 5, 6]))

console.log([1, 2, 3, 4] - [3, 4, 5, 6])