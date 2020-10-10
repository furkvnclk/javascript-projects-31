const progress = document.querySelector('.progress-done');

myHomeworks = {
    math: {
        total: 100,
        done: 28
    },
    science: {
        total: 100,
        done: 13
    },
    overall: () => {
        return myHomeworks.math.done + myHomeworks.science.done;
    }
}

setTimeout(() => {
    progress.style.width = myHomeworks.overall() + '%';
    progress.textContent = myHomeworks.overall() + ' %';
    progress.style.opacity = 1;
}, 500);