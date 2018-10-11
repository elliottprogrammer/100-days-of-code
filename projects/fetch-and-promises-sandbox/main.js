
// fetch example
const url='https://mercury.postlight.com/parser?url=http://www.progressfoundation.org/about/';
const params = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'NhXAyMDcMjAw4pF2sC1Hc549HLMY0zGQQLyDBLsz'
    },
    method: 'GET'  
};

fetch(url, params)
    .then( data => { return data.json() } )
    .then( res => { console.log(res) } )
    .catch( error => console.log(error) )


    // Promises example
const doTask = function() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('waited 2 sec..');
            resolve();
        }, 2000);
    });
};

doTask()
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log('waited again.. 2 more sec..');
                resolve();
            }, 2000);
        });
    })
    .then(() => console.log('finished..'));

console.log('other async stuff happening here...');