const requestURL = './json/data.json';
let clickState = 'grid';

function displayBusinessGrid(item) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let site = document.createElement('a');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    logo.setAttribute('src', "./img/" + item.logo);
    logo.setAttribute('alt', item.name + "'s Logo");
    name.textContent = item.name;
    site.setAttribute('href', item.website);
    site.setAttribute('target', "_blank");
    site.textContent = item.name + " Website";
    phone.textContent = item.phone;
    address.textContent = item.address;

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(site);
    card.appendChild(phone);
    card.appendChild(address);

    document.querySelector('.bus-cards').appendChild(card);
}

function createTable() {
    let table = document.createElement('table');
    document.querySelector('.bus-cards').appendChild(table);
}

function displayBusinessList(item) {
    let row = document.createElement('tr');
    let name = document.createElement('p');
    let site = document.createElement('a');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    name.textContent = item.name;
    site.setAttribute('href', item.website);
    site.setAttribute('target', '_blank');
    site.textContent = item.name + ' Website';
    phone.textContent = item.phone;
    address.textContent = item.address;

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.appendChild(name);
    td2.appendChild(site);
    td3.appendChild(phone);
    td4.appendChild(address);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    document.querySelector('table').appendChild(row);
}

async function getBusinesses(requestURL, type) {
    const response = await fetch(requestURL);
    // console.log(response);

    if (response.ok) {
        const jsObject = await response.json();
        // console.log(jsObject);

        const businesses = jsObject['businesses'];
        
        if (type === 'grid') {
            businesses.forEach(displayBusinessGrid);
        } else if (type=== 'list') {
            createTable();
            businesses.forEach(displayBusinessList);
        }
    }
}

function clearCards() {
    document.querySelector('.bus-cards').innerHTML = "";
}

function hearClick(value) {
    // console.log(clickState +''+value);
    if (clickState === value) {
        return;
    } 
    else if (value === 'grid') {
        clickState = 'grid';
        clearCards();
        getBusinesses(requestURL, 'grid');
    } 
    else if (value === 'list') {
        clickState = 'list';
        clearCards();
        getBusinesses(requestURL, 'list');
    }
}

getBusinesses(requestURL, clickState);