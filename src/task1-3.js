document.addEventListener('DOMContentLoaded', (event) => {
    function swapContent() {
        var blockX = document.querySelector('.block-x');
        var blockY = document.querySelector('.block-y');
        
        if (blockX && blockY) {
            var temp = blockX.innerHTML;
            blockX.innerHTML = blockY.innerHTML;
            blockY.innerHTML = temp;
        }
    }

    var button = document.getElementById('swapButton');
    if (button) {
        button.addEventListener('click', swapContent);
    }
})

document.getElementById('swapButton').addEventListener('click', swapContent);

function calculateCircleArea() {
    var radius = Math.random() * 10 + 1;
    var area = Math.PI * Math.pow(radius, 2);

    document.getElementById('radiusField').innerText = 'Радіус: ' + radius.toFixed(2) + ' см';
    document.getElementById('result').innerText = 'Площа кола: ' + area.toFixed(2) + ' см²';
}