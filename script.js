
for (var i = 0; i < 81; i++){
    let div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%'
    div.style.float = 'left';
    if (i % 2 === 0){
        div.style.backgroundColor = 'red';
        document.body.appendChild(div);
    } else {
        div.style.backgroundColor = 'black';
    }
    document.body.appendChild(div)
}

