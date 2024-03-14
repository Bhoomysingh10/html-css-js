const hiElements = document.querySelectorAll('.hi');
hiElements.forEach(element => {
    let isToggled = false;
    element.addEventListener('click', () => {
        if (!isToggled) {
            element.style.color = 'blue';
            element.style.fontSize = '20px';
            element.style.fontWeight = 'bold';
        } else {
            element.style = '';
        }
        isToggled = !isToggled;
    });
});

const uffElements = document.querySelectorAll('.uff');
uffElements.forEach(element => {
    let isToggled = false;
    element.addEventListener('click', () => {
        if (!isToggled) {
            element.style.color = 'green';
            element.style.fontSize = '25px';
            element.style.fontWeight = 'lighter';
        } else {
            element.style = '';
        }
        isToggled = !isToggled;
    });
});

const yoElements = document.querySelectorAll('.yo');
yoElements.forEach(element => {
    let isToggled = false;
    element.addEventListener('click', () => {
        if (!isToggled) {
            element.style.color = 'red';
            element.style.fontSize = '30px';
            element.style.fontWeight = 'normal';
        } else {
            element.style = '';
        }
        isToggled = !isToggled;
    });
});