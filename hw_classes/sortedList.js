class List
{
    constructor()
    {
        this.items = [];
    }

    add(element)
    {
        this.items.push(element);
        this.items = this.items.sort((a,b) => a-b);
    }

    remove(index)
    {
        this.items.splice(index,1);
    }

    get(index)
    {
        return this.items[index];
    }

    get size()
    {
        return this.items.length;
    }
}

let list = new List();
list.add(5);
console.log(list.size);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));