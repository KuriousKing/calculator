let screen = document.getElementById('scr');
let answer = 0;

function clr() {
    document.getElementById('scr').value = '';
}

function insert(val) {
    if (screen.value == '0') {
        screen.value = '';
    }
    screen.value += val;
}

function compute() {
    answer = eval(screen.value);
    screen.value = answer;
}

function backspace() {
    screen.value = screen.value.slice(0, -1);
}