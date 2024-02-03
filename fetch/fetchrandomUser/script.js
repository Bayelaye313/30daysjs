const btnGenerator = document.querySelector('#generate');
const apiEndpoint = 'https://randomuser.me/api/';
const user = document.querySelector('#user');
const spin = document.querySelector('.spinner');

async function getUser(apiEndpoint) {
    try {
        spin.style.display = 'block'
        const response = await fetch(apiEndpoint);
        if (response.ok) {
            const data = await response.json();
            spin.style.display = 'none'

            const randomIndex = Math.floor(Math.random() * data.results.length);
            const randomUser = data.results[randomIndex];

            const userName = `${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`;
            const userEmail = randomUser.email;
            const userPhone = randomUser.phone;
            const userLocation = `${randomUser.location.city}, ${randomUser.location.state}`;
            const userAge = randomUser.dob.age;
            const userPic = randomUser.picture.medium;

            user.innerHTML = `
                <div class="flex justify-between">
                    <div class="flex">
                        <img class="w-48 h-48 rounded-full mr-8" src="${userPic}" />
                        <div class="space-y-3">
                            <p class="text-xl"><span class="font-bold">Name: </span>${userName}</p>
                            <p class="text-xl"><span class="font-bold">Email: </span>${userEmail}</p>
                            <p class="text-xl"><span class="font-bold">Phone: </span>${userPhone}</p>
                            <p class="text-xl"><span class="font-bold">Location: </span>${userLocation}</p>
                            <p class="text-xl"><span class="font-bold">Age: </span>${userAge}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error fetching API', error);
    }
}

btnGenerator.addEventListener('click', () => {
    getUser(apiEndpoint);
});
