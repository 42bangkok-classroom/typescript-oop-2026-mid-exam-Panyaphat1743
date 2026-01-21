// Write your code below

let INp = Number(process.argv[2])


for(let i = 1;i<=INp;i++){
    let set = ""
    for(let y = INp-i;y>0;y--){
        set += " "
    }
    for(let k = i;k>0;k--){
        set += k
    }
    console.log(set)
}
