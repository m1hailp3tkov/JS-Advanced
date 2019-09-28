function solve(input)
{
    console.log('<table>');
    for(let row of input)
    {
        console.log('\t<tr>');
        row = JSON.parse(row);
        for(let col in row)
        {
            console.log(`\t\t<td>${row[col]}</td>`);
        }
        console.log('\t</tr>');
    }
    console.log('</table>');
}

solve(
    ['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);