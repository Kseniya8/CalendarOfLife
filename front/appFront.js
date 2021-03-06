/*VUE*/
let infoMendeleev = [
    { message: 'Родился в 1834г. в Тобольске', img: '' },
    { message: '2', img: 'https://vplate.ru/images/article/orig/2019/03/chto-podarit-rebenku-do-polugoda.jpg' },
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
    { message: '20', img: 'http://www.people.su/images/aboutbio/item_33_1.jpg' },
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
    { message: '34', img: 'https://mif-mira.ru/d/ashchplp.jpg' },
    { message: 'Открыл периодический закон', img: 'https://phonoteka.org/uploads/posts/2021-03/1616640834_16-p-yarko-krasnii-fon-17.jpg' },
    { message: '36', img: 'https://old.sk.ru/cfs-file.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-34/_5F00_DSC4563.jpg' },
    { message: 'Закончил учебник «Основы химии»', img: '' },
    { message: '38', img: 'https://www.muctr.ru/upload/university/about/history/mendeleev/tableb.jpg' },
    { message: '39', img: '' },
    { message: '40', img: '' },
    { message: 'Конструирование летательных аппаратов', img: '' },
    { message: '42', img: '' },
    { message: '43', img: 'https://pbs.twimg.com/media/D0o223ZX0AAhI17.jpg' },
    { message: 'Находился во Франции', img: '' },
    { message: '45', img: '' },
    { message: '46', img: '' },
    { message: '47', img: '' },
    { message: 'В браке с А.И. Поповой', img: '' },
    { message: '49', img: '' },
    { message: '50', img: '' },
    { message: '51', img: '' },
    { message: '52', img: '' },
    { message: '53', img: 'https://avatars.mds.yandex.net/get-zen_doc/58826/pub_5cda817e5204fd00b23d0f1a_5cda81ab5a6e0400b34f7b18/scale_1200' },
    { message: '54', img: '' },
    { message: '55', img: '' },
    { message: '56', img: '' },
    { message: '57', img: '' },
    { message: '58', img: '' },
    { message: '59', img: 'http://visualrian.ru/images/old_preview/7/73/77301_preview.jpg' },
    { message: '60', img: '' },
    { message: 'Получил новое вещество — пироколлодий', img: '' },
    { message: '62', img: 'https://topwar.ru/uploads/posts/2012-03/1331541964_Gunpowder_by_FX_1988.jpg' },
    { message: '63', img: '' },
    { message: '64', img: '' },
    { message: '65', img: '' },
    { message: '66', img: '' },
    { message: '67', img: '' },
    { message: '68', img: '' },
    { message: '69', img: 'https://primamedia.ru/f/big/2515/2514304.jpg?eac5c8135b0de6885cc27fc6b9a84da4' },
    { message: 'Избран Почетным членом Технол. института', img: '' },
    { message: '71', img: '' },
    { message: '72 (Умер в 73 года)', img: '' },
];

let infoZuckerberg = [
    { message: 'Родился 14.05.1984 в Уайт-Плейнс', img: '' },
    { message: '2', img: 'https://vplate.ru/images/article/orig/2019/03/chto-podarit-rebenku-do-polugoda.jpg' },
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
    { message: '24', img: 'https://mmm.dk/image/box/3024492/3920/50000.jpg?oversize=1' },
    { message: '25', img: '' },
    { message: '26', img: '' },
    { message: '27', img: '' },
    { message: 'Женился на Присцилле Чан', img: '' },
    { message: '29', img: 'https://biographe.ru/wp-content/uploads/2020/02/233233223-scaled.jpg' },
    { message: '30', img: '' },
    { message: '31', img: 'https://biographe.ru/wp-content/uploads/2020/02/44343-150x150.jpg' },
    { message: 'Степень доктора юриспруденции Гарварда', img: '' },
    { message: '33', img: 'https://biographe.ru/wp-content/uploads/2020/02/23323223-1-768x512.jpg' },
    { message: '5 место среди самых богатых людей', img: '' },
    { message: '35', img: '' },
    { message: '36', img: '' },
    { message: '37', img: 'https://img.joinfo.com/i/2018/01/800x0/5a54793e23e18.jpg' },
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

let infoChanel = [
    { message: 'Родилась 19 августа 1883г во Франции, Сомюр', img: '' },
    { message: '2', img: 'https://vplate.ru/images/article/orig/2019/03/chto-podarit-rebenku-do-polugoda.jpg' },
    { message: '3', img: '' },
    { message: '4', img: '' },
    { message: '5', img: '' },
    { message: '6', img: '' },
    { message: '7', img: '' },
    { message: '8', img: '' },
    { message: '9', img: '' },
    { message: '10', img: '' },
    { message: '11', img: '' },
    { message: 'в 12 теряет родителей', img: '' },
    { message: 'Живет в доме для сирот', img: '' },
    { message: '14', img: '' },
    { message: '15', img: '' },
    { message: '16', img: '' },
    { message: '17', img: '' },
    { message: '18.переезжает в католический пансионат в городке Мулен', img: '' },
    { message: 'Овладела навыками швейного мастерства', img: '' },
    { message: 'Поет песни в кабаре', img: '' },
    { message: '21', img: 'https://assets.vogue.ru/photos/600adfcdbda0e58042e2d2d6/master/w_1600,c_limit/w990-1.jpeg' },
    { message: '22', img: '' },
    { message: '23', img: '' },
    { message: 'Начинает шить шапки', img: '' },
    { message: '25', img: '' },
    { message: '26', img: 'https://fs3.fotoload.ru/f/0418/1524861169/c3525420bf.jpg' },
    { message: 'Открыла свой 1й бутик женских шляпок Chanel Modes', img: '' },
    { message: '28', img: 'https://myrouble.ru/wp-content/uploads/2017/09/chanel-artur-1.jpg' },
    { message: '29', img: '' },
    { message: 'Открыла 2й бутик', img: '' },
    { message: 'Появилась ее первая коллекция для отдыха и спорта', img: '' },
    { message: 'В 32 открыла свой первый Дом моды', img: 'https://phonoteka.org/uploads/posts/2021-03/1616640834_16-p-yarko-krasnii-fon-17.jpg' },
    { message: 'Имеет статус кутюрье', img: 'https://assets.vogue.ru/photos/600adfd975f2a82ad297eaf5/master/w_1600,c_limit/w990-4.jpeg' },
    { message: '34', img: '' },
    { message: '35', img: 'https://rgnp.ru/wp-content/uploads/4/d/3/4d3769a6b45796c598686e85f5755fd2.jpeg' },
    { message: '36', img: '' },
    { message: '37', img: '' },
    { message: 'Знакомый парфюмер создал Chanel№5', img: 'https://phonoteka.org/uploads/posts/2021-03/1616640834_16-p-yarko-krasnii-fon-17.jpg' },
    { message: '39', img: 'https://assets.vogue.ru/photos/600adfdabda0e58042e2d2dc/master/w_1600,c_limit/w990-6.jpeg' },
    { message: '40', img: '' },
    { message: '41', img: 'https://fb.ru/media/i/1/0/5/4/1/2/1/i/1054121.jpg' },
    { message: '42', img: '' },
    { message: '43', img: '' },
    { message: '44', img: 'https://avatars.mds.yandex.net/get-zen_doc/4432928/pub_6079ac514e4db437d9204401_6079beef6d0d247e53998632/scale_1200' },
    { message: '45', img: '' },
    { message: '46', img: '' },
    { message: '47', img: '' },
    { message: '48', img: '' },
    { message: '49', img: '' },
    { message: '50', img: 'https://assets.vogue.ru/photos/600adfdc75f2a82ad297eaf7/master/w_1600,c_limit/w990-9.jpeg' },
    { message: '51', img: '' },
    { message: 'В Париже открыто 5 бутиков', img: '' },
    { message: 'Ее Дом насчитывает 4000 сотрудников', img: '' },
    { message: '54', img: '' },
    { message: '55', img: 'https://assets.vogue.ru/photos/600adfdc75f2a82ad297eafb/master/w_1600,c_limit/w990-10.jpeg' },
    { message: '56', img: '' },
    { message: '57', img: '' },
    { message: 'Бутики закрыты на время войны', img: '' },
    { message: '59', img: '' },
    { message: '60', img: '' },
    { message: '61', img: '' },
    { message: '62', img: 'https://yobte.ru/uploads/posts/2019-12/koko-shanel-26-foto-26.jpg' },
    { message: '63', img: '' },
    { message: '64', img: '' },
    { message: '65', img: '' },
    { message: '66', img: '' },
    { message: '67', img: '' },
    { message: '68', img: '' },
    { message: '69', img: '' },
    { message: '70', img: 'https://assets.vogue.ru/photos/600adfdd809a03651406a55c/master/w_1600,c_limit/w990-11.jpeg' },
    { message: '1й показ 5 февраля 1954 года', img: '' },
    { message: '72 (Умерла в 87 лет)', img: '' },
];

let infoKroc = [
    { message: 'Родился 14.05.1984 в Ок-Парке, шт.Иллинойс', img: '' },
    { message: '2', img: 'https://vplate.ru/images/article/orig/2019/03/chto-podarit-rebenku-do-polugoda.jpg' },
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
    { message: 'Водитель санитарного фургона', img: '' },
    { message: '', img: 'https://myrouble.ru/wp-content/uploads/2017/11/raykroc12.jpg' },
    { message: '17', img: '' },
    { message: 'Продавец бумажных стаканчиков', img: '' },
    { message: '19', img: '' },
    { message: 'Женится на Этель Флеминг', img: '' },
    { message: '21', img: '' },
    { message: '22', img: '' },
    { message: '23', img: '' },
    { message: '24', img: '' },
    { message: '25', img: '' },
    { message: '26', img: '' },
    { message: '27', img: '' },
    { message: '28', img: '' },
    { message: '29', img: '' },
    { message: '30', img: '' },
    { message: '31', img: '' },
    { message: '32', img: '' },
    { message: '33', img: '' },
    { message: '34', img: '' },
    { message: '35', img: '' },
    { message: '36', img: '' },
    { message: 'Регистрирует фирму по продаже миксеров', img: '' },
    { message: '38', img: 'https://myrouble.ru/wp-content/uploads/2017/11/ray-kroc-03.jpg' },
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
    { message: 'Компания по франчайзингу «McDonalds System Inc»', img: 'https://phonoteka.org/uploads/posts/2021-03/1616640834_16-p-yarko-krasnii-fon-17.jpg' },
    { message: '54', img: 'https://myrouble.ru/wp-content/uploads/2017/11/ray-kroc-06.jpg' },
    { message: '', img: 'https://myrouble.ru/wp-content/uploads/2017/11/ray-kroc-08.jpg' },
    { message: '56', img: '' },
    { message: '57', img: 'https://myrouble.ru/wp-content/uploads/2017/11/ray-kroc-09.jpg' },
    { message: '58', img: 'https://myrouble.ru/wp-content/uploads/2017/11/ray-kroc-05.jpg' },
    { message: '1й в мире Университет гамбургерологии', img: '' },
    { message: '60', img: 'https://myrouble.ru/wp-content/uploads/2017/11/ray-kroc-11.jpg' },
    { message: '2ая жена - Джейс Доббин Грин', img: '' },
    { message: '62', img: '' },
    { message: 'В рекаламе появляется клоун Рон Макдоналд.', img: '' },
    { message: '64', img: 'https://myrouble.ru/wp-content/uploads/2017/11/macdonald.jpg' },
    { message: '65', img: 'https://regnum.ru/uploads/pictures/news/2018/09/18/regnum_picture_15372723342729935_social.png' },
    { message: '3я жена - Джоан Смит ', img: '' },
    { message: '67', img: 'https://myrouble.ru/wp-content/uploads/2017/11/raykroc11.jpg' },
    { message: '68', img: '' },
    { message: '69', img: '' },
    { message: '70', img: 'https://avatars.mds.yandex.net/get-zen_doc/1578609/pub_5d4873d9e3062c00ac9685c0_5d4874d3b96cfd00adc56b7d/scale_1200' },
    { message: '71', img: 'https://avatars.mds.yandex.net/get-zen_doc/1716636/pub_5d4873d9e3062c00ac9685c0_5d4876d206cc4600ae84de4a/scale_1200' },
    { message: 'Умер в 82. состояние достигло 500млн$', img: '' }
];

let infoMusk = [
    { message: 'Родился 28.05.1971 в Претории,ЮАР', img: '' },
    { message: '2', img: 'https://vplate.ru/images/article/orig/2019/03/chto-podarit-rebenku-do-polugoda.jpg' },
    { message: '3', img: '' },
    { message: '4', img: '' },
    { message: '5', img: 'https://biographe.ru/wp-content/uploads/2019/10/2342343.png' },
    { message: '6', img: '' },
    { message: '7', img: '' },
    { message: '8', img: '' },
    { message: '9', img: '' },
    { message: 'Подарок от отца - «Commodore VIC-20»', img: '' },
    { message: '11', img: 'https://biographe.ru/wp-content/uploads/2019/10/343434-768x436.jpg' },
    { message: 'Продал игру «BLASTAR» за 500$', img: '' },
    { message: '13', img: 'https://heightline.com/wp-content/uploads/Elon-Musk.png' },
    { message: '14', img: '' },
    { message: '15', img: 'http://img.gazeta.ru/files3/194/13680194/upload-01-pic_32ratio_900x600-900x600-7321.jpg' },
    { message: '16', img: '' },
    { message: '17', img: '' },
    { message: 'Учился в Королевском университете г. Кингстон', img: '' },
    { message: 'Перевелся в Пенсильванский университет', img: '' },
    { message: '20', img: '' },
    { message: '21', img: '' },
    { message: '22', img: 'https://staff-online.ru/wp-content/uploads/2020/05/obrazovanie-ilona-maska.jpg' },
    { message: '23', img: '' },
    { message: '24', img: '' },
    { message: 'проект «Zip2»', img: '' },
    { message: '26', img: 'https://mentamore.com/wp-content/uploads/2019/10/company-Elon-Musk-Zip2%EF%BB%BF.jpg' },
    { message: '27', img: '' },
    { message: 'Продали «Zip2» за 308 млн$', img: '' },
    { message: 'Купил mclaren f1', img: 'https://www.classicdriver.com/sites/default/files/article_images/dsc_9316_0.jpg' },
    { message: 'Проект «X.com»', img: '' },
    { message: '', img: 'https://biographe.ru/wp-content/uploads/2019/10/4534535-768x512.jpg' },
    { message: '32', img: '' },
    { message: 'Сооснователь Tesla Motors', img: '' },
    { message: '34', img: 'https://nvdaily.ru/wp-content/uploads/2021/11/article_elon-musk-tesla_1.jpg' },
    { message: 'компания «SpaceX», ракета FALCON 1', img: '' },
    { message: '36', img: 'https://biographe.ru/wp-content/uploads/2019/10/23323-768x512.jpg' },
    { message: 'Развелся с первой женой Джастин', img: '' },
    { message: '38', img: 'https://biographe.ru/wp-content/uploads/2019/10/345435435-768x428.jpg' },
    { message: '39', img: 'https://avatars.mds.yandex.net/get-zen_doc/3985268/pub_5f7af9c4952c3b370e844f00_5f7afafc8d3ae5589b339c6c/scale_1200' },
    { message: '2я жена - Талула Райли', img: '' },
    { message: '41', img: 'https://biographe.ru/wp-content/uploads/2019/10/45345345-768x576.jpg' },
    { message: '42', img: 'https://cont.ws/uploads/pic/2021/3/scale_1200%20%28369%29.jpg' },
    { message: '43', img: 'https://avatars.mds.yandex.net/get-zen_doc/5262161/pub_60e49131ea60b0440265ae2a_60e4915618360b6d82cf29a9/scale_1200' },
    { message: '44', img: 'https://novostivl.ru/wp-content/uploads/2021/09/23/4932046_cover_musk_tinhte.jpg' },
    { message: 'Заявление о путешествие на Марс', img: '' },
    { message: '46', img: 'https://miro.medium.com/max/1200/1*SD-9CDFP-pMYOS9JJ5IBNA.jpeg' },
    { message: '47', img: 'https://lh-forum-upload.sfo2.digitaloceanspaces.com/original/3X/f/4/f4d4206d455fd746e58ebb7201058ca052da56a7.jpeg' },
    { message: 'Состояние $13,08 трлн', img: 'https://jpgazeta.ru/wp-content/uploads/2021/03/lve8pfk9kegumeieenxfkmnj3yrztxzhiuij9llv-scaled.jpeg' },
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
    { message: '72', img: '' }
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

//INSTAGRAM
let vueInput;
vueInput = new Vue({
    el: '#sectionSearch',
    data: {
        username: '',
        age: '',
        address: '',
        err: ''
    },
    methods: {
        searchButtonClick: function () {
            if (this.username == '')
                return this.err = "Пожалуйста введите имя аккаунта";
            if (this.age == null || this.age == '' || this.age < 1)
                return this.err = "Пожалуйста введите корректный возраст";
            this.err = '';
            
            this.address = '/search?username=' + this.username + '&age=' + this.age;

            var request = new XMLHttpRequest();
            request.open('GET', this.address);
            request.setRequestHeader("Content-Type", "application/json");
            request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status === 200) {
                    var answer = JSON.parse(request.responseText);
                    vueInput.ShowResult(answer);
                }
            }
            request.send();
        },
        ShowResult: function (answer) {

        }
    }
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


