function attachEventsListeners() {

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    const daysField = document.getElementById('days');
    const hoursField = document.getElementById('hours');
    const minutesField = document.getElementById('minutes');
    const secondsField = document.getElementById('seconds');
   
    const editHtml = {
        fromDays: function ()
        {
            let days = Number(daysField.value);
            let hours = days*24;
            let minutes = hours*60;
            let seconds = minutes*60;

            [daysField.value, hoursField.value, minutesField.value, secondsField.value] = [days,hours,minutes,seconds];
        },
        fromHours: function ()
        {
            let hours = Number(hoursField.value);
            let days = hours/24;
            let minutes = hours*60;
            let seconds = minutes*60;
            
            [daysField.value, hoursField.value, minutesField.value, secondsField.value] = [days,hours,minutes,seconds];
        },
        fromMinutes: function()
        {
            let minutes = Number(minutesField.value);
            let hours = minutes/60;
            let days = hours/24;
            let seconds = minutes*60;

            [daysField.value, hoursField.value, minutesField.value, secondsField.value] = [days,hours,minutes,seconds];
        },
        fromSeconds: function()
        {
            let seconds = Number(secondsField.value);
            let minutes = seconds/60;
            let hours = minutes/60;
            let days = hours/24;
            
            [daysField.value, hoursField.value, minutesField.value, secondsField.value] = [days,hours,minutes,seconds];
        }
    }

    daysBtn.addEventListener('click', editHtml.fromDays);
    hoursBtn.addEventListener('click', editHtml.fromHours);
    minutesBtn.addEventListener('click', editHtml.fromMinutes);
    secondsBtn.addEventListener('click', editHtml.fromSeconds);
}