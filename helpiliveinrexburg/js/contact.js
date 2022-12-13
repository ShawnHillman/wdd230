const actBtn = document.getElementById('act-btn');
const evtBtn = document.getElementById('evt-btn');

function activateActBtn() {
    actBtn.classList.add('active-btn');
    evtBtn.classList.remove('active-btn');
}
function activateEvtBtn() {
    evtBtn.classList.add('active-btn');
    actBtn.classList.remove('active-btn');
}



const actForm = document.getElementById('contact-activity-form');
const eventForm = document.getElementById('contact-event-form');

function showActForm() {
    actForm.classList.remove('hide');
    eventForm.classList.add('hide');
    activateActBtn();
}
function showEventForm() {
    eventForm.classList.remove('hide');
    actForm.classList.add('hide');
    activateEvtBtn();
}