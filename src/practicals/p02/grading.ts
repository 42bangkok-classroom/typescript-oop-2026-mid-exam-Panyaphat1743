// Write your code below

let inp = Number(process.argv[2])
if(Number.isNaN(inp)){
    console.log("Invalid input")
}else if(inp<0 || inp>100){
    console.log("Invalid input")
}
if(inp>=80&&inp<=100){
    console.log("Grade is A")
}else if(inp>=70&&inp<=79){
    console.log("Grade is B")
}else if(inp>=60 && inp<=69){
    console.log("Grade is C")
}else if(inp>=50 && inp<=59){
    console.log("Grade is D")
}else if(inp>=0&&inp<=49){
    console.log("Grade is F")
}
