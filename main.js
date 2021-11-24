/*VUE*/
let infoMendeleev = [
    { message: 'Родился в 1834г. в Тобольске', img: '' },
    { message: '', img: 'https://vplate.ru/images/article/orig/2019/03/chto-podarit-rebenku-do-polugoda.jpg' },
    { message: '3', img: '' },
    { message: '4', img: '' },
    { message: '5', img: '' },
    { message: '6', img: '' },
    { message: '7', img: '' },
    { message: '8', img: '' },
    { message: '9', img: '' },
    { message: '10', img: '' },
    { message: '11', img: '' },
    { message: '12', img: '' },
    { message: '13', img: '' },
    { message: '14', img: '' },
    { message: 'Окончил Тобольскую гимназию', img: '' },
    { message: 'Поступил на физико-математический факультет', img: '' },
    { message: '17', img: '' },
    { message: '18', img: '' },
    { message: '19', img: '' },
    { message: '', img: 'http://www.people.su/images/aboutbio/item_33_1.jpg' },
    { message: 'Окончил институт с золотой медалью', img: '' },
    { message: 'Стал учителем в Одесском лицее', img: '' },
    { message: 'Защитил диссертацию на тему «Удельные объемы»', img: '' },
    { message: 'Должность доцента в Петербургском университете', img: '' },
    { message: 'Отправился в Германию', img: '' },
    { message: '26', img: '' },
    { message: 'В браке с Лещевой Ф.Н.', img: '' },
    { message: 'Демидовская премия', img: 'https://nagrada.moscow/files/28/img-2657-1.jpg' },
    { message: 'Профессор СПбГТИ (ТУ)', img: '' },
    { message: '30', img: 'https://img1.liveinternet.ru/images/attach/c/0/47/429/47429418_SanktPeterburg_institut_.jpg' },
    { message: 'Защитил диссертацию на степень доктора химии', img: '' },
    { message: '32', img: '' },
    { message: 'Возглавил кафедру общей химии', img: '' },
    { message: '', img: 'https://mif-mira.ru/d/ashchplp.jpg' },
    { message: 'Открыл периодический закон', img: 'https://phonoteka.org/uploads/posts/2021-03/1616640834_16-p-yarko-krasnii-fon-17.jpg' },
    { message: '36', img: 'https://old.sk.ru/cfs-file.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-34/_5F00_DSC4563.jpg' },
    { message: 'Закончил учебник «Основы химии»', img: '' },
    { message: '', img: 'https://www.muctr.ru/upload/university/about/history/mendeleev/tableb.jpg' },
    { message: '39', img: '' },
    { message: '40', img: '' },
    { message: 'Конструирование летательных аппаратов', img: '' },
    { message: '42', img: '' },
    { message: '', img: 'https://pbs.twimg.com/media/D0o223ZX0AAhI17.jpg' },
    { message: 'Находился во Франции', img: '' },
    { message: '45', img: '' },
    { message: '46', img: '' },
    { message: '47', img: '' },
    { message: 'В браке с А.И. Поповой', img: '' },
    { message: '49', img: '' },
    { message: '50', img: '' },
    { message: '51', img: '' },
    { message: '52', img: '' },
    { message: '', img: 'https://avatars.mds.yandex.net/get-zen_doc/58826/pub_5cda817e5204fd00b23d0f1a_5cda81ab5a6e0400b34f7b18/scale_1200' },
    { message: '54', img: '' },
    { message: '55', img: '' },
    { message: '56', img: '' },
    { message: '57', img: '' },
    { message: '58', img: '' },
    { message: '', img: 'http://visualrian.ru/images/old_preview/7/73/77301_preview.jpg' },
    { message: '60', img: '' },
    { message: 'Получил новое вещество — пироколлодий', img: '' },
    { message: '62', img: 'https://topwar.ru/uploads/posts/2012-03/1331541964_Gunpowder_by_FX_1988.jpg' },
    { message: '63', img: '' },
    { message: '64', img: '' },
    { message: '65', img: '' },
    { message: '66', img: '' },
    { message: '67', img: '' },
    { message: '68', img: '' },
    { message: '', img: 'https://primamedia.ru/f/big/2515/2514304.jpg?eac5c8135b0de6885cc27fc6b9a84da4' },
    { message: 'Избран Почетным членом Технол. института', img: '' },
    { message: '71', img: '' },
    { message: 'Умер 2 февраля 1907г', img: '' },
];
let infoZuckerberg = [
    { message: 'Родился 14.05.1984 в Уайт-Плейнс', img: '' },
    { message: '', img: 'https://vplate.ru/images/article/orig/2019/03/chto-podarit-rebenku-do-polugoda.jpg' },
    { message: '3', img: '' },
    { message: '4', img: '' },
    { message: '5', img: '' },
    { message: '6', img: 'https://biographe.ru/wp-content/uploads/2020/02/3232-768x1105.jpg' },
    { message: '7', img: '' },
    { message: '8', img: '' },
    { message: '9', img: '' },
    { message: 'Учил Basic', img: '' },
    { message: '11', img: '' },
    { message: 'Первая программа ZuckNet', img: '' },
    { message: '13', img: '' },
    { message: '14', img: '' },
    { message: '15', img: '' },
    { message: '16', img: '' },
    { message: '17', img: '' },
    { message: 'Поступил в Гарвард на факультет психологии', img: '' },
    { message: '19', img: 'https://biographe.ru/wp-content/uploads/2020/02/322332-2-768x349.png' },
    { message: 'Создание прототипа Facebook', img: 'https://phonoteka.org/uploads/posts/2021-03/1616640834_16-p-yarko-krasnii-fon-17.jpg' },
    { message: 'Бросил университет', img: '' },
    { message: '22', img: '' },
    { message: 'Microsoft оценило его детище в 15млрд$', img: '' },
    { message: '', img: 'https://mmm.dk/image/box/3024492/3920/50000.jpg?oversize=1' },
    { message: '25', img: '' },
    { message: '26', img: '' },
    { message: '27', img: '' },
    { message: 'Женился на Присцилле Чан', img: '' },
    { message: '', img: 'https://biographe.ru/wp-content/uploads/2020/02/233233223-scaled.jpg' },
    { message: '30', img: '' },
    { message: '', img: 'https://biographe.ru/wp-content/uploads/2020/02/44343-150x150.jpg' },
    { message: 'Степень доктора юриспруденции Гарварда', img: '' },
    { message: '', img: 'https://biographe.ru/wp-content/uploads/2020/02/23323223-1-768x512.jpg' },
    { message: '5 место среди самых богатых людей', img: '' },
    { message: '35', img: '' },
    { message: '36', img: '' },
    { message: '37', img: '' },
    { message: '38', img: '' },
    { message: '39', img: '' },
    { message: '40', img: '' },
    { message: '41', img: '' },
    { message: '42', img: '' },
    { message: '43', img: '' },
    { message: '44', img: '' },
    { message: '45', img: '' },
    { message: '46', img: '' },
    { message: '47', img: '' },
    { message: '48', img: '' },
    { message: '49', img: '' },
    { message: '50', img: '' },
    { message: '51', img: '' },
    { message: '52', img: '' },
    { message: '53', img: '' },
    { message: '54', img: '' },
    { message: '55', img: '' },
    { message: '56', img: '' },
    { message: '57', img: '' },
    { message: '58', img: '' },
    { message: '59', img: '' },
    { message: '60', img: '' },
    { message: '61', img: '' },
    { message: '62', img: '' },
    { message: '63', img: '' },
    { message: '64', img: '' },
    { message: '65', img: '' },
    { message: '66', img: '' },
    { message: '67', img: '' },
    { message: '68', img: '' },
    { message: '69', img: '' },
    { message: '70', img: '' },
    { message: '71', img: '' },
    { message: '72', img: '' },
];

/*VUE*/
let app = new Vue({
    el: '#grid',
    data: {
        info: []
    }
})

/*SCROLL*/
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        if (link.textContent == "D.Mendeleev")
            app.info = infoMendeleev;
        else if (link.textContent == "M.Zuckerberg")
            app.info = infoZuckerberg;
        else if (link.textContent == "C.Chanel")
            app.info = infoChanel;
        else if (link.textContent == "R.Kroc")
            app.info = infoKroc;
        else if (link.textContent == "E.Musk")
            app.info = infoMusk;

        document.getElementById('calendar').style.display = 'flex';
        window.scrollBy({
            top: 870,
            behavior: 'smooth'
        });
    });
});

/*MENU SHOW & HIDDEN */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

//show menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

//hide menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*MOUSEMOVE IMG */
document.addEventListener('mousemove', Move)

function Move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerHeight - e.pageY * speed) / 120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/** GSAP ANIMATION */
//NAV
gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 1, delay: 2, y: 10 })
gsap.from('.nav__item', { opacity: 0, duration: 1, delay: 1.8, y: 30, stagger: 0.1 })

//HOME
gsap.from('.home__title', { opacity: 0, duration: 1, delay: 1.3, y: 30 })
gsap.from('.home__description', { opacity: 0, duration: 1, delay: 1.2, y: 60 })
gsap.from('.home__input', { opacity: 0, duration: 1, delay: .9, y: 120 })
gsap.from('.home__img', { opacity: 0, duration: 1, delay: .3, y: 30 })