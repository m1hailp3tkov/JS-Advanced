function encodeAndDecodeMessages() 
{
    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName('button')[1];
    
    let originalMsgArea = document.getElementsByTagName('textarea')[0];
    let encodedMsgArea = document.getElementsByTagName('textarea')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode()
    {
        let msg = [...originalMsgArea.value].map(x => nextChar(x)).join('');
        originalMsgArea.value = '';
        encodedMsgArea.value = msg;
    }

    function decode()
    {
        let msg = [...encodedMsgArea.value].map(x => prevChar(x)).join('');
        encodedMsgArea.value = msg;
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function prevChar(c){
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }
}