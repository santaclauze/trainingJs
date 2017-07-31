// Exercises found on https://sites.google.com/site/prologsite/prolog-problems
// 2. Arithmethic

// 2.1 Determine whether a given integer number is prime.
	/*
	 	Example:
		isPrime(7).
		result = true
	*/

	//Definition of a prime: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. (wikipedia)

function isPrime(number) {
	if(number <= 2) {
		return true
	}
	for (var i = 2; i < number; i++) {
		if((number % i) === 0) {
			return false
		}
	}
	return true
}


console.log('EX 2.1: Is this number prime? 9: ', isPrime(9))
console.log('EX 2.1: Is this number prime? 227: ',isPrime(227))
console.log('EX 2.1: Is this number prime? 112: ',isPrime(112))


// 2.2 Determine the prime factors of a given positive integer.
	/*
	 	Example:
		primeFactorList(315).
		result = true
	*/

function primeFactorList(number) {
	var factors = [];
	//find divisors starting with 2
	for (var i = 2; i < number; i++) {
		while ((number % i) === 0) {
            factors.push(i);
            number /= i;
        }
	}
	console.log('EX 2.2: the prime factors in ascending order are:', factors)
	return factors
}

primeFactorList(28)

// 2.3 Determine the prime factors of a given positive integer and nest them in a list.
	/*
	 	Example:
		primeNestedFactorList(315, L).
		result = [[3,2],[5,1],[7,1]]
	*/

function primeNestedFactorList(number) {
	var factorList = primeFactorList(number);
	var runLengthEncodedList = [];
	var unit = [];
	for (var i = 0; i < factorList.length; i++) {
		// counter set to 1 because there will always be at least 1 of each unit.
		var runLengthCounter = 1;
		while(factorList[i] == factorList[i + 1]) {
			i++;
			runLengthCounter++;
		}
		if(runLengthCounter > 1) {
			unit.push(factorList[i])
			unit.push(runLengthCounter)
		} else {
			unit.push(factorList[i])
			unit.push(runLengthCounter)
		}
		var coupledUnitCounter = unit.splice(0,2)
		runLengthEncodedList.push(coupledUnitCounter)

	}
	console.log('EX 2.3: the prime factors in a nested list are:', runLengthEncodedList)
	return runLengthEncodedList
}

primeNestedFactorList(2286)

// 2.4 Goldbach's conjecture.
	/*
		Definition and Facts:  
		Goldbach's conjecture says that every positive even number greater than 2 is the sum of two prime numbers. 
		Example: 28 = 5 + 23. It is one of the most famous facts in number theory that has not been proved to be correct
		in the general case. It has been numerically confirmed up to very large numbers (much larger than we can go 
		with our Prolog system). Write a predicate to find the two prime numbers that sum up to a given even integer.
	*/
	/*
		Example:
		goldbach(28).
		result = [5,23]
	*/

function goldbach(number) {
	var primeList = [];
	var goldbachPrimeNumers = [];
	for (var i = 2; i < number; i++) {
		if(isPrime(i) === true) {
			primeList.push(i)
		}
	}
	for (var i = 0; i < primeList.length; i++) {
		for (var j = 0; j < primeList.length; j++) {
			if(primeList[i]+primeList[j] === number) {
				goldbachPrimeNumers.push(primeList[i])
				goldbachPrimeNumers.push(primeList[j])
				return console.log('EX 2.4: Following Goldbach\'s conjecture, the two prime numbers are:', goldbachPrimeNumers )
			}
		}
	}
}

goldbach(28)


// 2.5 A list of Goldbach compositions.
// 2.5.a Given a range of integers by its lower and upper limit, print a list of all even numbers and their Goldbach composition.
	/*
		Example:
		goldbachList(9,20).
		result = 
			10 = 3 + 7
			12 = 5 + 7
			14 = 3 + 11
			16 = 3 + 13
			18 = 5 + 13
			20 = 3 + 17
	*/


function goldbachList(startingNumber, endNumber, smallestPrime = 3) {
	var evenNumbers = [];
	var goldbachListSums = [];
	// find even numbers between starting and ending number
	for (var i = startingNumber; i <= endNumber; i++) {
		if(i % 2 == 0) {
			evenNumbers.push(i)
		}
	}
	// list of prime numbers for all even numbers
	for (var i = 0; i < evenNumbers.length; i++) {
		var primeList = [];
		// j equals the smallestPrime so that we can set it if needed
		for (var j = smallestPrime; j < evenNumbers[i]; j++) {
			if(isPrime(j) === true) {
				primeList.push(j)
			}
		}
		// function that calls itself so that it returns the first valid sum of prim numbers rather than all the possobilities for each even number
		(function(){
			for (var k = 0; k < primeList.length; k++) {
				for (var l = 0; l < primeList.length; l++) {
					if(primeList[k]+primeList[l] === evenNumbers[i]) {
						return console.log('EX 2.5.a: ' ,evenNumbers[i], '=', primeList[k], '+', primeList[l])
					}
				}
			}

		})();
	}
}

goldbachList(9, 20)


// 2.5.b In most cases, if an even number is written as the sum of two prime numbers, one of them is very small. 
// Very rarely, the primes are both bigger than say 50. Try to find out how many such cases there are in the range 2..3000.
	/*
		Example:
		goldbachList(1,2000,50).
		result = 
			992 = 73 + 919
			1382 = 61 + 1321
			1856 = 67 + 1789
			1928 = 61 + 1867
	*/

goldbachList(1, 2000, 50)
