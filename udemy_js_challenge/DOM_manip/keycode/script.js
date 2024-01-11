//methode un

/*window.addEventListener('keydown', (e)=>{
    const insert = document.querySelector('#insert');
    insert.innerHTML = `
            <div class="key">
            ${e.key ===  ' '? 'Space' : e.key}
            <small>e.key</small>
            </div>

            <div class="key">
            ${e.keyCode}
            <small>e.keyCode</small>
            </div>

            <div class="key">
            ${e.code}
            <small>e.code</small>
            </div>
        `
})
*/
//methode 2
function keycodes(e){
    const insert = document.querySelector('#insert');
    insert.innerHTML = '';
    const keyobjects = {
        'e.key': e.key ===  ' '? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }
    for(key in keyobjects)
    {
        const div = document.createElement('div');
        div.className= 'key';
        const small = document.createElement('small');
        const keytext = document.createTextNode(key);
        const keyvalue = document.createTextNode(keyobjects[key]);
        small.appendChild(keytext)
        div.appendChild(small)
        div.appendChild(keyvalue)
        insert.appendChild(div)
    }

}

window.addEventListener('keydown', keycodes);