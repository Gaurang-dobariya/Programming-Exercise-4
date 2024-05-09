class stack {

    constructor() {

        this.arr = []
        this.reverse = []

    }

    Underflow() {

        if (this.arr.length == 0) {

            console.log("Stack is underflow");

        }
    }

    addElement(element) {

        this.arr.push(element)

    }

    OverFlow() {

        if (this.arr.length > 6) {

            console.log("Stack is overflow");

        }
    }

    print() {

        this.arr.map((val, ind) => {

            console.log(val);

        })
    }

    StackReverse() {

        console.log("Reverse Array");

        for (let i = 0; i < this.arr.length; i++) {

            this.reverse[i] = this.arr[this.arr.length - 1 - i]

        }

        console.log(this.reverse);
    }

    
    TopElement() {

        console.log("Top Element");

        console.log(this.arr[this.arr.length - 1]);

    }

    lastElement() {

        console.log("Last Element");

        console.log(this.arr[0]);

    }

    secondLast() {

        console.log("SecondLast Element");

        console.log(this.arr[1]);

    }

}

let s1 = new stack();

s1.addElement(6);
s1.addElement(9);
s1.addElement(2);
s1.addElement(50);
s1.addElement(60);
s1.addElement(1);

s1.print();

s1.TopElement()
s1.lastElement()
s1.secondLast()

s1.StackReverse()
