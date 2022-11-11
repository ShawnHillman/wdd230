const requestURL = './json/data.json';

function displayBusiness(item) {
    let card = document.createElement('section');
    let logo = docuemnt.createElement('img');
    let name = document.createElement('h2');
    let site = document.createElement('a');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    logo.setAttribute('src', "../img/" + item.logo);
    logo.setAttribute('alt', item.name + "'s Logo");
    name.textContent = item.name;
    site.setAttribute('href', item.website);
    site.textContent = item.website;
    phone.textContent = item.phone;
    address.textContent = item.address;

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(site);
    card.appendChild(phone);
    card.appendChild(address);

    document.querySelector('.bus-cards').appendChild(card);
}

async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);

    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);

        const businesses = jsObject['businesses'];
        console.log(businesses[0].name);
        businesses.forEach(displayBusiness);
    }
}

getBusinesses(requestURL);