class CheckingAccount
{
    constructor(clientId, email, firstName, lastName)
    {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId()
    {
        return this._clientId;
    }
    set clientId(newId)
    {
        if(newId.length != 6)
        {
            throw TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = newId;
    }

    get email()
    {
        return this._email;
    }
    set email(newEmail)
    {
        if(!newEmail.match(/[A-Za-z\d]+@[A-Za-z.]+/))
        {
            throw TypeError('Invalid e-mail');
        }

        this._email = newEmail;
    }

    get firstName()
    {
        return this._firstName;
    }
    set firstName(newFirstName)
    {
        if(newFirstName.length < 3 || newFirstName.length > 20)
        {
            throw TypeError('First name must be between 3 and 20 characters long');
        }
        if(!newFirstName.match(/^[A-Za-z]+$/))
        {
            throw TypeError('First name must contain only Latin characters');
        }

        this._firstName = newFirstName;
    }

    get lastName()
    {
        return this._lastName;
    }
    set lastName(newLastName)
    {
        if(newLastName.length < 3 || newLastName.length > 20)
        {
            throw TypeError('Last name must be between 3 and 20 characters long');
        }
        if(!newLastName.match(/^[A-Za-z]+$/))
        {
            throw TypeError('Last name must contain only Latin characters');
        }

        this._lastName = newLastName;
    }
}

let acc = new CheckingAccount('1314355', 'ivan@some.com', 'Ivan', 'Pet')