window.onload = () => {

    let formData = document.getElementById('sig-in');
    formData
        .addEventListener('submit', (event) => {
            
            const url = '/api/v1/control/users';
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            })
                .then(promisse => promisse.json())
                .then(data => console.log(data));
        })



}