
var addTimeButton      = document.querySelector('button#add-time');
var scheduleItemDiv    = document.querySelector('div.schedule-item');
var scheduleItensField = document.querySelector('fieldset#schedule-itens');

addTimeButton.onclick = function() {
  const newSchedule = scheduleItemDiv.cloneNode(true);
  scheduleItensField.appendChild(newSchedule);
}
