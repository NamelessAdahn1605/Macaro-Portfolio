const lvl_1 = document.getElementById('lvl-1');
const lvl_2 = document.getElementById('lvl-2');
const lvl_3 = document.getElementById('lvl-3');

const mini_lv1 = document.getElementById('lvl1-me');
const mini_lv2 = document.getElementById('lvl2-me');
const mini_lv3 = document.getElementById('lvl3-me');
const mini_head = document.getElementById('head-me');

function lvlslct(select) {

    mini_head.style.display = 'none';

    if (select === 'lvl1') {

        mini_lv1.style.display = 'block';
        mini_lv2.style.display = 'none';
        mini_lv3.style.display = 'none';

        lvl_1.style.display = 'none';
        lvl_2.style.display = 'block';
        lvl_3.style.display = 'block';

    } else if (select === 'lvl2') {

        mini_lv1.style.display = 'none';
        mini_lv2.style.display = 'block';
        mini_lv3.style.display = 'none';

        lvl_1.style.display = 'block';
        lvl_2.style.display = 'none';
        lvl_3.style.display = 'block';

    } else if (select === 'lvl3') {

        mini_lv1.style.display = 'none';
        mini_lv2.style.display = 'none';
        mini_lv3.style.display = 'block';

        lvl_1.style.display = 'block';
        lvl_2.style.display = 'block';
        lvl_3.style.display = 'none';

    }

}

function byeme() {
    mini_lv1.style.display = 'none';
    mini_lv2.style.display = 'none';
    mini_lv3.style.display = 'none';

    lvl_1.style.display = 'block';
    lvl_2.style.display = 'block';
    lvl_3.style.display = 'block';
}