function CustomParser(input){
    let ans = 0;
    let output = [];
    for(let i=0;i<input.length;i++){
        if(input[i]==='p'){
            ans++
        }else if(input[i]==='m'){
            ans--;
        }else if(input[i]==='s'){
            ans = ans*ans;
        }else if(input[i]==='o'){
            output.push(ans);
        }
    }
    return output;
}
let output = CustomParser("ppppsmoso");
console.log(output)