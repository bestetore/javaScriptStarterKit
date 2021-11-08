
    for (let i = 1; i <= 1000; i++) {
        let total = 0;
        for (let j = 1; j < i; j++) {
            if (i%j==0) {
                total = total + j
            }
            
        }
        if (total==i ) {
            console.log([i]+ " sayısı mükemmel sayıdır")
        }
    
        
    }

   





