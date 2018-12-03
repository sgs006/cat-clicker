let model = {
    currentCat: null,
    cats: [
        {
            name: 'Tom',
            imgSrc: 'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/',
            clickCount: 0
        },
        {
            name: 'Pamela',
            imgSrc: 'https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg',
            clickCount: 0
        },
        {
            name: 'Jerry',
            imgSrc: 'http://cdn1-www.cattime.com/assets/uploads/2012/05/socializing-kitten.jpg',
            clickCount: 0
        },
        {
            name: 'Princess',
            imgSrc: 'http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg',
            clickCount: 0
        },
        {
            name: 'Romo',
            imgSrc: 'http://blacksportsonline.com/home/wp-content/uploads/2014/05/tony-romo-si-1ct2wdp.jpg',
            clickCount: 0
        }
    ]
};

let octopus = {
    init: function () {
        model.currentCat = model.cats[0];
        listView.init();
        catView.init();
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    getCats: function () {
        return model.cats;
    },

    clickCount: function () {
        model.currentCat.clickCount++;
        catView.render();
    }
};

let catView = {
    init: function () {
        this.catName = document.getElementById('cat-name');
        this.catImg = document.getElementById('cat-img');
        this.clickCounter = document.getElementById('click-counter');

        this.catImg.addEventListener('click', function () {
            octopus.clickCount();
        });

        this.render();
    },

    render: function () {
        let cat = octopus.getCurrentCat();
        this.catName.textContent = cat.name;
        this.catImg.src = cat.imgSrc;
        this.clickCounter.textContent = cat.clickCount;
    }
};

let listView = {
    init: function () {
        this.catListElem = document.getElementById('cat-list');
        this.render();
    },

    render: function () {
        let cats = octopus.getCats();
        this.catListElem.innerHTML = '';

        for (let i = 0; i < cats.length; i++) {

            let cat = cats[i];

            let elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function (catCopy) {
                return function () {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);

        }

    }
};


octopus.init();

