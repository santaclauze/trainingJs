// Exercises found on https://sites.google.com/site/prologsite/prolog-problems

// 1. Find the last element of a list.
	/*
	 	Example:
		['a','b','c','d'].
		result = d
	*/

function lastListElement(list) {
	// -1 to match list numbering starting from 0 not 1;
	var listLength = list.length - 1;
	return list[listLength]
}
var listExample1 = ['a','b','c','d'];
console.log("EX 1: the last element of the list is: " + lastListElement(listExample1));


// 2.   Find the K'th element of a list.
	/*
	 	Example:
		['a','b','c','d'], 3.
		result = c
	*/
function elementPositionInList(list, position) {
	// -1 to match list numbering starting from 0 not 1;
	var arrayPosition = position - 1;
	return list[arrayPosition]
}
var listExample2 = ['a','b','c','d'];
console.log("EX 2: the last element of the list is: " + elementPositionInList(listExample2, 3));


// 3.   Find out whether a list is a palindrome.
	/*
	 	Example:
		['b','a','a','b'].
		result = true
	*/
function isPalindrome(arg) {
	var argumentAsList;
	// prepare argument into array if it is a string.
	if(typeof arg === 'string') {
		argumentAsList = arg.split('');
	} else {
		argumentAsList = arg;
	}
	function compareOpposites(list) {
		for (var i = 0; i < (list.length / 2); i++) {
			var oppositeIndex = list[list.length - (i + 1)];
			if(list[i] !== oppositeIndex) {
				return console.log('EX 3:The argument is NOT a Palindrome');
			}
		}
		return console.log('EX 3:The argument is a Palindrome') 
	} 
	// if the length of the argumentList is even 
	if(argumentAsList.length % 2 === 0 ) {
		compareOpposites(argumentAsList);
	}
	// if the length of the argumentList is odd 
	if(argumentAsList.length % 2 === 1 ) {
		var indexOfCenterElement = (argumentAsList.length - 1) /2;
		argumentAsList.splice(indexOfCenterElement, 1)
		compareOpposites(argumentAsList);
	}
}
var listExample3 = ['b','a','a','b'];
isPalindrome(listExample3)


// 4.  Flatten a nested list structure.
	/*
	 	Example:
		['a', ['b', ['c', 'd'], ['a'], 'e']].
		result = ['a','b','c','d','a','e']
	*/
function flattenNestedLists(list) {
	var flatList = [];
	var recursiveFlattener = function(list) {
		for (var i = 0; i < list.length; i++) {
			if(typeof list[i] !== 'object'){
				flatList.push(list[i])
			} else {
				recursiveFlattener(list[i])
			}
		}	
	}
	recursiveFlattener(list)
	return console.log("EX 4: flattened list is: " + flatList)

}


var listExample4 = ['a', ['b', ['c', 'd'], ['a'], 'e']];
flattenNestedLists(listExample4)


// 5.  Eliminate consecutive duplicates of list elements.
	/*
	 	Example:
		['a','a','a','a','b','e','e','c','c','a','a','e','e','c','c','c','c','c','c','d','e','e','e','e','e','e','e','e','e','e','e','e']
		result = [ 'a', 'b', 'e', 'c', 'a', 'e', 'c', 'd', 'e' ]
	*/
var listExample5 = ['a','a','a','a','b','e','e','c','c','a','a','e','e','c','c','c','c','c','c','d','e','e','e','e','e','e','e','e','e','e','e','e'];

function consecutiveDuplicatesExterminator(list) {
	var minimizedList = [];
	for (var i = 0; i < list.length; i++) {
		while(list[i] == list[i + 1]) {
			i++;
		}
		minimizedList.push(list[i])
	}
	console.log("EX 5: list without duplicated is: ")
	console.log(minimizedList)
}

consecutiveDuplicatesExterminator(listExample5)

// 6.  Pack consecutive duplicates of list elements into sublists.
	/*
	 	Example:
		['a','a','a','a','b','c','c','a','a','d','e','e','e','e'].
		result = [ [ 'a', 'a', 'a', 'a' ], [ 'b' ], [ 'c', 'c' ], [ 'a', 'a' ], [ 'd' ], [ 'e', 'e', 'e', 'e' ] ]
	*/

function nestingDuplicates(list) {
	var nestedList = [];
	for (var i = 0; i < list.length; i++) {
		var nestedDuplicates = [];
		nestedDuplicates.push(list[i]);
		while(list[i] == list[i + 1]) {
			nestedDuplicates.push(list[i]);
			i++;
		}
		nestedList.push(nestedDuplicates)
	}
	console.log("EX 6: list with nested duplicated is: ")
	console.log(nestedList)
}

var listExample6 = ['a','a','a','a','b','c','c','a','a','d','e','e','e','e'];

nestingDuplicates(listExample6)

// 7.  Run-length encoding of a list.
	/*
	 	Example:
		['a','a','a','a','b','c','c','a','a','d','e','e','e','e']
		result = [ [ 'a', 4 ], [ 'b' ], [ 'c', 2 ], [ 'a', 2 ], [ 'd' ], [ 'e', 4 ] ]
	*/
function runLengthEncoder(list) {
	var runLengthEncodedList = [];
	var unit = [];
	for (var i = 0; i < list.length; i++) {
		// counter set to 1 because there will always be at least 1 of each unit.
		var runLengthCounter = 1;
		while(list[i] == list[i + 1]) {
			i++;
			runLengthCounter++;
		}
		if(runLengthCounter > 1) {
			unit.push(list[i])
			unit.push(runLengthCounter)
		} else {
			unit.push(list[i])
		}
		var coupledUnitCounter = unit.splice(0,2)
		runLengthEncodedList.push(coupledUnitCounter)

	}
	console.log("EX 7: list with run-length encoded is: ")
	console.log(runLengthEncodedList)

}

var listExample7 = ['a','a','a','a','b','c','c','a','a','d','e','e','e','e'];
runLengthEncoder(listExample7)
