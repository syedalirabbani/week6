//--------------
//factorialize a number (recursive)
//-------------

function factorialize(num){
  if ( num == 0){
    return 1;
  }
  else{
    return num*factorialize(num-1);
  }
}

console.log(factorialize(5));


//----------------
// factorialize (iterative)
// -----------------

function factorial(num) { 
            var ans=1; 
              
            for (var i = 2; i <= num; i++) 
                ans = ans * i; 
            return ans; 
        } 

console.log(factorial(5));
