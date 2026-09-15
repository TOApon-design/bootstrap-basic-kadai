const btn = document.getElementById('output-btn');

btn.addEventListener('click', () => {
    console.log('クリックされました');
});

const addBtn =document.getElementById('add-btn');

const parentList = document.getElementById('parent-list');

addBtn.addEventListener('click', () => {
    const Childlist = document.createElement('li');

    Childlist.textContent = 'これはリスト要素です';

    parentList.appendChild(Childlist);
});

const countBtn = document.getElementById('count-btn');

countBtn.addEventListener('click', () => {
    const text = document.forms.textForm.textBox.value;

    console.log(text.length + '文字');
});

const areaBtn = document.getElementById('area-btn');

areaBtn.addEventListener('click', () => {
    const radio = document.forms.areaForm.area.value;

    console.log(radio);
});

const osBtn = document.getElementById('os-btn');

osBtn.addEventListener('click', () => {
    const checkbox = document.forms.osForm.os;

    for(let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            console.log(checkbox[i].value);
        }
    }
});