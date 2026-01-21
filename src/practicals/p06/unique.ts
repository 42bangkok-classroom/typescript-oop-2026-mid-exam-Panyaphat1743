export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
let inters:number[]=[]
let re:number[] =[]
  let spac:number[] = []
  for(let i =0;i<arr1.length;i++){
    for(let y =0;y<arr2.length;y++)
    if(arr1[i] == arr2[y]){
      inters = [...inters,arr1[i]]
    }
  }
  for(let a =0;a<arr1.length;a++){
    if(arr1[a] == inters[0] || arr1[a] == inters[1]){
    }else{
      re = [...re,arr1[a]]
    }
  }
  for(let b =0;b<arr2.length;b++){
    if(arr2[b] == inters[0] || arr2[b] == inters[1]){
    }else{
      re = [...re,arr2[b]]
    }
  }
  return re
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(getUniqueNumbers([1, 2, 3, 4],[3, 4, 5, 6]))