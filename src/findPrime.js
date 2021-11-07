function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        let isPrime = true;

        if(number==0 || number==1){
            isPrime= false;
            console.log(number +" asal sayı değil")
        }
        if (number ==2) {
            isPrime= true;
            console.log("2 en küçük asal sayıdır")
        }
        
        for (let j = 2; j < number; j++) {
            if (number %j==0) {
                isPrime= false;
                console.log(number + " asal sayı değil")
                break
            }
            else{
               isPrime=true
                console.log(number + " asal sayıdır") 
            }
            
            
        }
    }
}

findPrime(1,2,6,4,7)