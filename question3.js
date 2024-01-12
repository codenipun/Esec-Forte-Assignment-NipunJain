function MissingAlphabet(input){
    let ans = 0;
    for(let i=0;i<input.length;i++){
        if((input[i]>'n' && input[i]<='z') || (input[i]>='A' && input[i]<='Z')){
            ans++;
        }
    }
    return ans;
}

let output = MissingAlphabet("abaxbdbbyyhwawiwjjjwem");
console.log(output);