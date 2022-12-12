const actRequestURL = './json/activities.json';

function displayAct(item) {
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let price = document.createElement('p');
    let time = document.createElement('p');
    let hours = document.createElement('p');
    let group = document.createElement('p');
    let website = document.createElement('a');
    let imageBox = document.createElement('div');
    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    let image3 = document.createElement('img');
    let drpDwn = document.createElement('div');

    name.textContent = item.name;
    price.textContent = 'Price: ' + item.price;
    time.textContent = 'Time: ' + item.time;
    hours.textContent = 'Hours: ' + item.hours;
    group.textContent = 'Group Size: ' + item.groupsize;
    website.textContent = item.website;
    website.setAttribute('href', item.website);
    image1.setAttribute('src', '.'+item.images[0]);
    image1.setAttribute('alt', 'Image 1 of '+ name);
    image2.setAttribute('src', '.'+item.images[1]);
    image2.setAttribute('alt', 'Image 2 of '+ name);
    image3.setAttribute('src', '.'+item.images[2]);
    image3.setAttribute('alt', 'Image 3 of '+ name);
    drpDwn.textContent('▼');
    drpDwn.classList.add('drop-down');

    imageBox.appendChild(image1);
    imageBox.appendChild(image2);
    imageBox.appendChild(image3);
    imageBox.classList.add('hid');

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(time);
    card.appendChild(hours);
    card.appendChild(group);
    card.appendChild(website);
    card.appendChild(imageBox);
    card.appendChild(drpDwn);
    card.classList.add('home-activity');

    document.querySelector('.activities-wrapper').appendChild(card);
}

async function getActivities(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);

    if(!response.ok) {
        console.log('Error: Negative response');
        return;
    }
    const jsObject = await response.json();
    console.log(jsObject);

    const activities = jsObject['activities'];
    activities.forEach(displayAct);
}

getActivities(actRequestURL);