function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  let spac:number[] = []
  for(let i=0;i<arr1.length;i++){
    for(let y =0;y<arr2.length;y++){
      if(arr1[i] != arr2[y]){
        spac = [...spac,...arr1]
      }
    }
  }
  for(let i=0;i<arr2.length;i++){
    for(let y =0;y<arr1.length;y++){
      if(arr1[y] != arr2[i]){
        spac = [...spac,...arr1]
      }
    }
  }
  return spac
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(getUniqueNumbers([1, 2, 3, 4],[3, 4, 5, 6]))