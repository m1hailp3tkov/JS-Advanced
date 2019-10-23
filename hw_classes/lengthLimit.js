class Stringer
{
    constructor(string, length)
    {
        this.innerString = string;
        this._innerLength = Number(length);
    }

    get innerLength()
    {
        return this._innerLength;
    }

    set innerLength(length)
    {
        this._innerLength = Math.max(0, length);
    }

    increase(length)
    {
        this.innerLength = this.innerLength + length;
    }

    decrease(length)
    {
        this.innerLength = this.innerLength - length;
    }

    toString()
    {
        return this.innerString.length <= this._innerLength
            ? this.innerString
            :`${this.innerString.substring(0, this._innerLength)}...`;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
