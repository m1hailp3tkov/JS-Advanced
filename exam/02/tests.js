let SkiResort = require('./solution');

let assert = require('chai').assert;

describe('SkiResort', function () {
    let skiResort;
    beforeEach(() => skiResort = new SkiResort('name'));

    describe('ctor', function(){
        it('intitalizes class properly', function()
        {
            let skiResort = new SkiResort('name');

            assert.instanceOf(skiResort, SkiResort);
        });

        it('sets correct name property', function()
        {
            assert.equal(skiResort.name, 'name');
        });

        it('sets correct voters property', function()
        {
            assert.equal(skiResort.voters, 0);
        });

        it('sets correct hotels property', function()
        {
            assert.isArray(skiResort.hotels);
            assert.isEmpty(skiResort.hotels);
        });
    });

    describe('bestHotel()', function()
    {
        it('returns proper message if voters is 0', function()
        {
            assert.equal(skiResort.bestHotel, 'No votes yet');
        });

        it('returns correct message for best hotel', function()
        {
            let hotels = [
                {
                    name: 'best',
                    beds: 1,
                    points: 1
                },
                {
                    name: 'worst',
                    beds: 1,
                    points: 0
                }];

            skiResort.hotels = hotels;
            skiResort.voters = 1;

            let actual = skiResort.bestHotel;

            assert.equal(actual, 'Best hotel is best with grade 1. Available beds: 1');
        });
    })

    describe('build()', function()
    {
        it('throws error if name empty', function()
        {
            assert.throws(() => skiResort.build("", 1), "Invalid input");
        });

        it('throws error if beds <1', function()
        {
            assert.throws(() => skiResort.build("hotelName", 0), "Invalid input");
        });

        it('adds hotel properly', function()
        {
            skiResort.build('hotelName', 1);
            let expected = [{
                name: 'hotelName',
                beds: 1,
                points: 0
            }];

            assert.deepEqual(skiResort.hotels, expected);
        });

        it('returns correct value', function()
        {
            let actual = skiResort.build('hotelName', 1);
            let expected = `Successfully built new hotel - hotelName`
        });
    });

    describe('book()', function()
    {
        beforeEach(() => skiResort.build('hotelName', 1));

        it('throws error if name empty', function()
        {
            assert.throws(() => skiResort.book("", 1), "Invalid input");
        });

        it('throws error if beds <1', function()
        {
            assert.throws(() => skiResort.book("hotelName", 0), "Invalid input");
        });

        it('throws error if hotel !exist', function()
        {
            assert.throws(() => skiResort.book("noHotel", 1),"There is no such hotel");
        });

        it('throws error if there are insufficient beds', function()
        {
            assert.throws(() => skiResort.book("hotelName", 2), "There is no free space");
        });

        it('reduces hotel beds correctly', function()
        {
            skiResort.book('hotelName', 1);
            assert.equal(skiResort.hotels[0].beds, 0);
        });

        it('returns correct message', function()
        {
            let actual = skiResort.book('hotelName', 1);
            assert.equal(actual, "Successfully booked");
        });
    });

    describe('leave()', function()
    {
        beforeEach(() => 
        {
            skiResort.build('hotelName', 1);
            skiResort.book('hotelName', 1);
        });

        it('throws error if name empty', function()
        {
            assert.throws(() => skiResort.leave("", 1), "Invalid input");
        });

        it('throws error if beds <1', function()
        {
            assert.throws(() => skiResort.leave("hotelName", 0), "Invalid input");
        });

        it('throws error if hotel !exist', function()
        {
            assert.throws(() => skiResort.leave("noHotel", 1),"There is no such hotel");
        });

        //TODO: Might need saturation
        it('sets correct values on hotel object', function()
        {
            skiResort.leave('hotelName', 1, 10);
            let expected = [{
                name: 'hotelName',
                beds: 1,
                points: 10
            }];

            assert.deepEqual(skiResort.hotels, expected);
        });

        it('sets correct values on hotel object [saturationTest]', function()
        {
            skiResort.build('hotel', 3);
            skiResort.book('hotel',3);
            skiResort.leave('hotel', 2, 30);

            let expected = {
                name: 'hotel',
                beds: 2,
                points: 60
            };

            assert.deepEqual(skiResort.hotels[1], expected);
        });

        it('sets correct value on voters property', function()
        {
            skiResort.leave('hotelName', 1, 10);
            assert.equal(skiResort.voters, 1);
        });

        it('returns correct string', function()
        {
            let actual = skiResort.leave('hotelName', 1, 10);
            assert.equal(actual, '1 people left hotelName hotel');
        });
    });

    describe('averageGrade()', function()
    {
        this.beforeEach(() => skiResort.build('hotelName', 1));

        it('returns proper message if voters = 0', function()
        {
            let actual = skiResort.averageGrade();
            assert.equal(actual, "No votes yet");
        });

        it('returns correct average grade', function()
        {
            skiResort.leave('hotelName', 1 , 20);
            skiResort.book('hotelName', 1);
            skiResort.leave('hotelName', 1, 10);

            let expected = 'Average grade: 15.00';
            assert.equal(skiResort.averageGrade(), expected);
        });
    });
});
