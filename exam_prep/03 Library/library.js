//@ts-check

class Library 
{
    constructor(libraryName)
    {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {normal: libraryName.length, special: libraryName.length*2, vip: Number.MAX_SAFE_INTEGER};
    }

    subscribe(name, type)
    {
        if(!this.subscriptionTypes.hasOwnProperty(type))
        {
            throw new Error(`The type ${type} is invalid`);
        }

        let subscriber = this.subscribers.find(x => x.name === name)

        if(!subscriber)
        {
            subscriber = 
            {
                name: name,
                type: type,
                books: []
            };

            this.subscribers.push(subscriber);
        }
        else
        {
            subscriber.type = type;
        }

        return subscriber;
    }

    unsubscribe(name)
    {
        let subscriber = this.subscribers.find(x => x.name === name);

        if(!subscriber)
        {
            throw new Error (`There is no such subscriber as ${name}`);
        }

        this.subscribers = this.subscribers.filter(x => x.name !== name);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor)
    {
        let subscriber = this.subscribers.find(x => x.name === subscriberName);

        if(!subscriber)
        {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        if(subscriber.books.length >= this.subscriptionTypes[subscriber.type])
        {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[subscriber.type]}!`)
        }

        let book = {title: bookTitle, author: bookAuthor};
        subscriber.books.push(book);

        return subscriber;
    }

    showInfo()
    {
        let str = '';
        for(let s of this.subscribers)
        {
            str += `Subscriber: ${s.name}, Type: ${s.type}\nReceived books: ${s.books.map(b => `${b.title} by ${b.author}`).join(', ')}\n`;
        }

        if(!str) str = `${this.libraryName} has no information about any subscribers`;

        return str;
    }
    // TODO: implement this class...
}

let lib = new Library('Lib');

console.log(lib.subscribe('Peter', 'normal'));
console.log(lib.subscribe('Ligma', 'special'));
console.log(lib.unsubscribe('Petr'));

console.log(lib.showInfo());
