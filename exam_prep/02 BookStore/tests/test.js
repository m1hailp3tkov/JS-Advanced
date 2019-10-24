let assert = require('chai').assert;
let expect = require('chai').expect;

const BookStore = require('../bookStore.js');

describe("Tests …", function() {
    let store;
    this.beforeEach(() => store = new BookStore('name'));

    describe("Constructor", function() {
        it("Instantiation with one parameter", function() {
            assert.instanceOf(store, BookStore);
        });
        it('ctor sets correct name property', function(){
            let expected = 'name';
            let actual = store.name;
            assert.equal(actual, expected);
        });
        it('ctor sets correct books property', function(){
            let expectedLength = 0;
            assert.isArray(store.books);
            assert.equal(store.books.length, expectedLength);
        });
        it('ctor sets correct wortkers property', function(){
            let expectedLength = 0;
            assert.isArray(store.workers);
            assert.equal(store.workers.length, expectedLength);
        });
     });

    describe('stockBooks()', function(){
        it('method correctly adds new books', function()
        {
            let booksToAdd = ['Inferno-Dan Braun', "Book-Avtor Avtorov"];
            let expected = [{ title:'Inferno', author:'Dan Braun'}, { title: 'Book', author:'Avtor Avtorov'}];

            store.stockBooks(booksToAdd);

            assert.deepEqual(store.books, expected);
        });

        it('method returns correct value', function()
        {
            let booksToAdd = ['Inferno-Dan Braun', "Book-Avtor Avtorov"];
            let expected = [{ title:'Inferno', author:'Dan Braun'}, { title: 'Book', author:'Avtor Avtorov'}];

            assert.deepEqual(store.stockBooks(booksToAdd), expected);
        });
    });

    describe('hire()', function(){

        it('method hires worker correctly', function()
        {
            store.hire('George', 'seller');

            let expectedWorkers = [{
                name: 'George',
                position: 'seller',
                booksSold: 0
            }];

            let actualWorkers = store.workers;

            let actualWorkersLength = store.workers.length;
            let expectedWorkersLength = 1;

            assert.equal(actualWorkersLength, expectedWorkersLength);
            assert.deepEqual(actualWorkers, expectedWorkers);
        });

        it('method throws error if worker exists', function(){
            store.hire('George', 'seller');       
            assert.throws(() => store.hire('George', 'seller'), 'This person is our employee');
        });

        it('method returns correct string', function(){
            let expected = 'dude started work at name as position';
            let actual = store.hire('dude', 'position');

            assert.equal(actual, expected);
        });
    });

    describe('fire()', function(){
        it('method fires worker correctly', function(){
            store.hire('gosho', 'asd');
            store.hire('pesho', 'asd');

            let expectedWorkers = [{
                name: 'pesho',
                position: 'asd',
                booksSold: 0
            }];

            store.fire('gosho');

            let actualWorkers = store.workers;

            assert.deepEqual(actualWorkers, expectedWorkers)
        });

        it('method throws error if worker doesnt exist', function()
        {
            assert.throws(() => store.fire('gosho'), "gosho doesn't work here");
        });

        it('method returns correct value', function()
        {
            store.hire('gosho', 'asd');

            let expected = 'gosho is fired';
            let actual = store.fire('gosho');

            assert.equal(actual,expected);
        });
    });

    describe('sellBook', function()
    {
        beforeEach(() => store.hire('gosho', 'asd'));

        it('method throws error if book does not exist', function()
        {
            assert.throws(() => store.sellBook('book', 'gosho'), 'This book is out of stock');
        });

        it('method throws error if worker does not exist', function(){
            store.stockBooks(['book-author']);
            assert.throws(() => store.sellBook('book', 'pesho'), 'pesho is not working here');
        });

        it('method removes book from books collection after successful sale', function()
        {
            store.stockBooks(['book1-author', 'book2-author']);
            store.sellBook('book1', 'gosho');

            let expectedBooks = [{title: 'book2', author: 'author'}];
            let actualBooks = store.books;

            assert.deepEqual(actualBooks, expectedBooks);
        });

        it('method adds 1 to workers sold books', function()
        {
            store.stockBooks(['book-author']);
            store.sellBook('book', 'gosho');

            let actual = store.workers[0].booksSold;
            let expected = 1;

            assert.equal(actual,expected);
        });
    });
});
