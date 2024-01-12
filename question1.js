const map = {
    'a' : 'A',
    'b' : 'B',
    'c' : 'C',
    'd' : 'D',
    'e' : 'E',
    'f' : 'F',
    'g' : 'G',
    'h' : 'H',
    'i' : 'I',
    'j' : 'J',
    'k' : 'K',
    'l' : 'L',
    'm' : 'M',
    'n' : 'N',
    'o' : 'O',
    'p' : 'P',
    'q' : 'Q',
    'r' : 'R',
    's' : 'S',
    't' : 'T',
    'u' : 'U',
    'v' : 'V',
    'w' : 'W',
    'x' : 'X',
    'y' : 'Y',
    'z' : 'Z'
}

function convertToCamelCase(input, delimiter){
    let ans = "";
    for(let i=0;i<input.length;i++){
        if(input[i]===delimiter){
            i++;
            ans += map[input[i]];
        }
        else{
            ans += input[i];
        }
    }
    return ans
}

let output = convertToCamelCase("the-test-case", "-");
console.log(output);