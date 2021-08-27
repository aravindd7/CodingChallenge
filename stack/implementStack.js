/*
Implement a stack using an array
*/

class Stack {

    constructor()
    {
      this.items = [];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Adds an element to the end of a stack
    add(element) {
        this.items.push(element);
    }

    // Removes the top most element of the stack
    remove(element) {
        if (this.items.length === 0) {
            return "Underflow"
        }
        this.items.pop(element);
    }

    // Display the first element in the stack
    peek() {
        return this.items[this.items.length - 1]
    }

    // Prints the entire stack as a string
    printStack() {
        let string = '';

        for(let i = 0; i < this.items.length; i++) {
            string += this.items[i] + ' ';
        }
        return string;
    }



}

let stack = new Stack();

//Check if stack is empty
console.log(stack.isEmpty());

//Adds element to the end of the stack
stack.add(12)
stack.add(20)
stack.add(1)

console.log(stack)
console.log(stack.printStack())

stack.remove()

console.log(stack.printStack())

console.log(stack.peek())
