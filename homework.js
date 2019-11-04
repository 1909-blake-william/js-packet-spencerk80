// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {

    let a = 0, b = 1, c

    for(let i = 0; i < n; i++) {

        c = a + b
        a = b
        b = c

    }

    return a

}

//console.log([fib(1), fib(2), fib(3), fib(4), fib(5)])

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray) {

    for(let j = 0; j < numArray.length; j++) {

        for(let i = 1; i < numArray.length; i++) {

            if(numArray[i - 1] > numArray[i]) {

                let temp = numArray[i - 1]
                numArray[i - 1] = numArray[i]
                numArray[i] = temp

                swapped = true

            }

        }

    }

    return numArray

}

//console.log(bubbleSort([4,2,6,3,8,3,6]))

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(str) {

    let temp
    let letters = str.split("")
    j = str.length - 1

    for(let i = 0; i < j; i++) {

        temp = letters[i]
        letters[i] = letters[j]
        letters[j] = temp
        j--

    }

    return letters.join("")

}

//console.log(reverseStr("hello"))

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum) {

    if(someNum > 1) {

        return someNum * factorial(someNum - 1)

    } else {

        return 1

    }

}

//console.log(factorial(4))

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(str, len, offset) {

    if(offset + len > str.length) {

        alert("Error: offset + length exceed the string length!")
        return str

    }
    
    if(offset < 0) {

        alert("Error: Offset cannot be negative!")
        return str

    }

    if(length < 0) {

        alert("Error: Length cannot be negative!")
        return str

    }

    return str.substring(offset, offset + len)   

}

// console.log(substring("hello", 20, 1))
// console.log(substring("hello", 5, 0))
// console.log(substring("hello", 3, 1))

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(n) {

    if(n & 1)
    
        return false

    return true

}

// console.log(isEven(5))
// console.log(isEven(6))

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(str) {

    let j = str.length - 1

    for(let i = 0; i < j; i++) {

        if(str.charAt(i) !== str.charAt(j))

            return false

        j--

    }

    return true

}

// console.log(isPalindrome("afd"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("aba"))

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, char) {

    if(!char) char = '*'

    if(height <= 0) {

        alert("Error! Height must be at least 1")
        return

    }

    if(char.length > 1) {

        alert("Error! Character to draw shape with must be a single character")
        return

    }

    if(shape === 'Square') {

        let row = []
        let output =''

        for(let i = 0; i < height; i++)

            row.push(char)

        for(let i = 0; i < height; i++)

            output += row.join('') + '\n'

        console.log(output)

    } else if(shape === 'Triangle') {

        let row = []
        let output = ''

        for(let i = 0; i < height; i++) {

            row.push(char)
            output += row.join('') + '\n'

        }

        console.log(output)

    } else if(shape === 'Diamond') {

        let row = []
        let output = ''
        let i

        if(height < 3) {

            alert("Error: For a diamond, the height must be at least 3!")
            return

        }

        //Build top half
        for(i = 1; i <= height; i += 2) {

            row = []
            
            //Build row of char
            for(let j = i; j > 0; j--) 

                row.push(char)

            //Shift over with spaces as necessary
            if(i !== height) 
            
                for(let j = 0; j < (height - i) / 2; j++)

                    row.unshift(' ')

            //Add the row to the output
            output += row.join('') + '\n'

        }

        //Don't dublicate middle row
        i = height - 2

        //Build bottom half
        for(i; i > 0; i -= 2) {

            row = []

            //Build row of char
            for(let j = i; j > 0; j--)

                row.push(char)

            //Shift over with spaces as necessary
            if(i !== height)

                for(let j = 0; j < (height - i) / 2; j++)

                    row.unshift(' ')

            //Addthe row to the output
            output += row.join('') + '\n'

        }

        //Print Diamond
        console.log(output)

    } else {

        alert("Error: Shape not understood!")

    }

}

// printShape("Square", 5, 'A')
// printShape("Triangle", 4, '@')
// printShape("Diamond", 4, '*')
// printShape("Diamond", 7, '^')

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and its value.

function traverseObject(obj) {

    properties = Object.getOwnPropertyNames(obj)

    for(let property of properties)

        console.log(`${property} = ${obj[property]}`)

}

// traverseObject({
//     name:   'Kris',
//     job:    'Programmer',
//     age:    28
// })

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(arr) {

    console.log(arr.length)
    arr[2] = undefined     //Deleted by undefined because "Length should be same"
    console.log(arr.length)

}


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.



// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

