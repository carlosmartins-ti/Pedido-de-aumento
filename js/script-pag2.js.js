function showElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.opacity = '1';
        element.style.translate = '0';
    }
}

function showUp(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.opacity = '1';
    }
}

function animation() {
    document.querySelector('h1').style.opacity = '1';

    const timings = [
        { selector: 'h2', delay: 300 },
        { selector: '.att1', delay: 500, action: showElement },
        { selector: '.att2', delay: 1000, action: showElement },
        { selector: '.att3', delay: 1500, action: showElement },
        { selector: '.att4', delay: 2000, action: showElement },
        { selector: '.up1', delay: 3000, action: showUp },
        { selector: '.up2', delay: 4000, action: showUp },
        { selector: '.up3', delay: 5000, action: showUp },
        { selector: '.up4', delay: 6000, action: showUp },
        { selector: 'button', delay: 7000 },
    ];

    timings.forEach(({ selector, delay, action = showElement }) => {
        setTimeout(() => {
            action(selector);
        }, delay);
    });
}

setTimeout(() => {
    animation();
}, 100);
