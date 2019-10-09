function solve() 
{
    const binaryValue = 'binary';
    const hexadecimalValue = 'hexadecimal';
    

    function createOptions()
    {
        let select = document.getElementById('selectMenuTo');

        let option_binary = document.createElement('option');
        let option_hexadecimal = document.createElement('option');

        option_binary.text = 'Binary';
        option_binary.value = binaryValue;
        option_hexadecimal.text = 'Hexadecimal';
        option_hexadecimal.value = hexadecimalValue;

        select.appendChild(option_binary);
        select.appendChild(option_hexadecimal);
    }

    createOptions();

    let button = document.querySelector("#container > button");

    button.addEventListener('click', getResult);

    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }

    function dec2hex(dec)
    {
        return dec.toString(16).toUpperCase();
    }

    function getResult()
    {
        let resultField = document.getElementById('result');
        let decimalNumber = Number(document.getElementById('input').value);
        let selectedOption = document.getElementById('selectMenuTo').value;

        switch(selectedOption)
        {
            case binaryValue:
                resultField.value = dec2bin(decimalNumber);
            break;

            case hexadecimalValue:
                resultField.value = dec2hex(decimalNumber);
        }
    }
}