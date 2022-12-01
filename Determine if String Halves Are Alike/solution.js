var halvesAreAlike = function(s) {
    let l = 0;r=s.length-1;
    let Lvowels = 0, Rvowels = 0
    let x = s.length/2;
    while(l<x && r>= x) {
        if(checkVowel(s[l]) == true) Lvowels++;
        if(checkVowel(s[r]) == true) Rvowels++;
        l++,r--;
    }
    if(Lvowels == Rvowels) return true;
    else return false;
};

function checkVowel (a) {
        let str = "aeiouAEIOU"
        for(let i = 0;i<str.length;i++){
            if(a === str[i]) {
                return true;
            }
        }
    }
