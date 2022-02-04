function randomColor()
{
    var Color = '#'+Math.floor(Math.random()*16777215).toString(16);
    return Color;
}


for (var i = 0; i < 81; i++){
    let div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%'
    div.style.float = 'left';
    if (i % 2 === 0){
        div.style.backgroundColor = randomColor();
    } else {
        div.style.backgroundColor = randomColor();
    }
    document.body.appendChild(div)
}

