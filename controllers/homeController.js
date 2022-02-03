const rp = require('request-promise');
const $ = require('cheerio');

exports.index = (req, res) => {
    res.render("index.html");
}

exports.searchInfo = (req, res, next) => {
    name_fields = [
        'username',
        'age'
    ];

    params = {}
    let skip = 0

    for (key in req.query) {
        if (name_fields.indexOf(key) != -1 && req.query[key])
            params[key] = req.query[key]
    }

    let url = 'https://www.instagram.com/' + params.username;
    // получаем html инсты
    rp(url)
        .then(function (html) {
            //console.log(html);
            let arrURLandYear = [];
            let foundPos = 0;

            while (true) {
                let indexStrStartURL = html.indexOf('150},{"src"', foundPos) + 13;
                let indexStrFinishURL = html.indexOf('","config_width":240', foundPos);

                if (indexStrFinishURL < 0) break; //точка останова

                let searchStringURL = html.slice(indexStrStartURL, indexStrFinishURL);
                searchStringURL = searchStringURL.replace('\u0026', '&');

                let indexStrYear = html.indexOf('tagging', indexStrFinishURL);
                let searchStringYear = html.slice(indexStrYear - 5, indexStrYear);

                foundPos = indexStrYear + 1; // продолжаем со следующей позиции
                arrURLandYear.push({ "URL": searchStringURL, "year": searchStringYear });
            }

            console.log(arrURLandYear);
        })

        .catch(function (err) {
            console.log(err);
        });


    // res.json({ forms: forms })

}