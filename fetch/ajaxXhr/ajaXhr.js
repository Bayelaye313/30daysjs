const xhr = new XMLHttpRequest;
const results = document.getElementById('results')


xhr.open('GET', './movies.json');

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log(JSON.parse(xhr.responseText));
        const data = JSON.parse(xhr.responseText);
        data.forEach(element => {
            const li = document.createElement('li');
            li.textContent = `${element.title}-${element.year}`;
            results.appendChild(li);

        });
    }
};

xhr.send();