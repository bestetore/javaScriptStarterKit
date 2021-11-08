let sumA=0;
let sumB=0;
function detectAmicableNumbers(a,b) {
    
    for (let i = 1; i < a; i++) {

        
        if (a%i ==0) {
            sumA= sumA +i
            
        }
        
    }

    for (let j = 1; j < b; j++) {
            
        if (b%j ==0) {
            sumB =sumB+j
        }
        
    }

    if (sumA ==b && sumB ==a) {
        console.log("Bu sayılar arkadaş sayılardır")
    }else{
        console.log("Bu sayılar arkadaş sayı değiller")
    }
    
}



detectAmicableNumbers(220,284)