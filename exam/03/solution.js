class Forum
{
    #users;
    #questions;
    #id;

    constructor()
    {
        this.#users = [];
        this.#questions = [];
        this.#id = 1;
    }

    register(username, password, repeatPassword, email)
    {
        if(!username || !password || !repeatPassword || !email)
        {
            throw Error("Input can not be empty");
        }

        if(password !== repeatPassword)
        {
            throw Error("Passwords do not match");
        }

        if(this.#users.some(x => x.username == username || x.email == email))
        {
            throw Error("This user already exists!");
        }

        let user = 
        {
            username: username,
            password: password,
            email: email,
            loggedIn: false
        };

        this.#users.push(user);

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password)
    {
        let user = this.#users.find(x => x.username === username);
        if(!user)
        {
            throw Error("There is no such user");
        }

        if(user.password === password)
        {
            user.loggedIn = true;
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password)
    {
        let user = this.#users.find(x => x.username === username);
        if(!user)
        {
            throw Error("There is no such user");
        }

        if(user.password === password && user.loggedIn)
        {
            user.loggedIn = false;
            return "You have logged out successfully";
        }
    }
    
    postQuestion(username, questionContent)
    {
        let user = this.#users.find(x => x.username === username);
        if(!user || !user.loggedIn)
        {
            throw Error("You should be logged in to post questions");
        }

        if(questionContent === '')
        {
            throw Error("Invalid question");
        }

        let question =
        {
            id: this.#id++,
            username: username,
            question: questionContent,
            answers: []
        }

        this.#questions.push(question);

        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answerContent)
    {
        let user = this.#users.find(x => x.username === username);

        if(!user || !user.loggedIn)
        {
            throw Error("You should be logged in to post answers");
        }
        if(!answerContent)
        {
            throw Error("Invalid answer");
        }

        let question = this.#questions.find(x => x.id === questionId);
        if(!question)
        {
            throw Error("There is no such question");
        }

        let answer = 
        {
            username: username,
            answer: answerContent
        };

        question.answers.push(answer);
        return "Your answer has been posted successfully";
    }

    showQuestions()
    {
        let str = "";
        for(let q of this.#questions)
        {
            str += `Question ${q.id} by ${q.username}: ${q.question}\n`;
            for(let a of q.answers)
            {
                str += `---${a.username}: ${a.answer}\n`;
            }
        }

        str = str.substring(0, str.length-1);
        return str;
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());

