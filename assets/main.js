//data for each image
const data = [
    {
        image: 'assets/media/thumb/thumbcave.jpeg',
        full: 'assets/media/cave.jpeg',
        type: 'digital',
        gallery: 'illus',
        desc: 'Cave Woman vs Dinosaur'
    },{
        image: 'assets/media/thumb/thumbmirror.jpeg',
        full: 'assets/media/mirror.png',
        type: 'digital',
        gallery: 'illus',
        desc: 'Mirror'
    },{
        image: 'assets/media/thumb/thumbcoop.jpeg',
        full: 'assets/media/coop.jpeg',
        type: 'trad',
        gallery: 'illus',
        desc: 'Cooper'
    },{
        image: 'assets/media/thumb/thumbpool.jpeg',
        full: 'assets/media/pool.jpeg',
        type: 'digital',
        gallery: 'illus',
        desc: 'Pool'
    },{
        image: 'assets/media/thumb/thumbmorn.jpeg',
        full: 'assets/media/morn.png',
        type: 'trad',
        gallery: 'illus',
        desc: 'Winter Morning'
    },{
        image: 'assets/media/thumb/thumbday.jpeg',
        full: 'assets/media/day.png',
        type: 'trad',
        gallery: 'illus',
        desc: 'Winter Day'
    },{
        image: 'assets/media/thumb/thumbnight.jpeg',
        full: 'assets/media/night.png',
        type: 'trad',
        gallery: 'illus',
        desc: 'Winter Night'
    },{
        image: 'assets/media/thumb/thumbrain.jpeg',
        full: 'assets/media/rain.png',
        type: 'trad',
        gallery: 'illus',
        desc: 'Rainy Backyard'
    }, {
        image: 'assets/media/thumb/thumblove.jpeg',
        full: 'assets/media/love.jpeg',
        type: 'digital',
        gallery: 'illus',
        desc: 'Love of Art - OSA 145th anniv piece'
    }, {
        image: 'assets/media/thumb/thumbhorses.jpeg',
        full: 'assets/media/horses.png',
        type: 'digital',
        gallery: 'illus',
        desc: 'Horse Studies'
    },{
        image: 'assets/media/thumb/thumbodin.jpeg',
        full: 'assets/media/odin.jpeg',
        type: 'trad',
        gallery: 'illus',
        desc: 'Odin'
    },{
        image: 'assets/media/thumb/thumbroom.jpeg',
        full: 'assets/media/room.png',
        type: 'digital',
        gallery: 'illus',
        desc: 'Made-up Bedroom'
    },{
        image: 'assets/media/thumb/thumbshock.jpeg',
        full: 'assets/media/shock.png',
        type: 'digital',
        gallery: 'illus',
        desc: 'Shock'
    },{
        image: 'assets/media/thumb/thumbowl.jpeg',
        full: 'assets/media/owl.png',
        type: 'trad',
        gallery: 'illus',
        desc: 'Owl'
    },{
        image: 'assets/media/thumb/thumbladdy.jpeg',
        full: 'assets/media/laddy.png',
        type: 'digital',
        gallery: 'illus',
        desc: 'Laddy the Lamb'
    },{
        image: 'assets/media/thumb/thumbarmour.jpeg',
        full: 'assets/media/armour.gif',
        type: 'digital',
        gallery: 'three',
        desc: 'Armour'
    },{
        image: 'assets/media/thumb/thumbtank.jpeg',
        full: 'assets/media/tank.gif',
        type: 'digital',
        gallery: 'three',
        desc: 'Tank'
    },{
        image: 'assets/media/thumb/thumbpaul.jpeg',
        full: 'assets/media/paul.jpeg',
        type: 'digital',
        gallery: 'three',
        desc: 'Odd Paul'
    },{
        image: 'assets/media/thumb/thumbwolf.jpeg',
        full: 'assets/media/wolf.gif',
        type: 'digital',
        gallery: 'three',
        desc: 'Wolf'
    },{
        image: 'assets/media/thumb/thumbangel.jpeg',
        full: 'assets/media/angel.jpeg',
        type: 'trad',
        gallery: 'three',
        desc: 'Angel'
    },{
        image: 'assets/media/thumb/thumbodinsculpt.jpeg',
        full: 'assets/media/odinsculpt.jpeg',
        type: 'trad',
        gallery: 'three',
        desc: 'Odin Sculpt'
    },{
        image: 'assets/media/thumb/thumbgarg.jpeg',
        full: 'assets/media/garg.jpeg',
        type: 'digital',
        gallery: 'three',
        desc: 'Gargoyle'
    }
]

//defining galleries
const threeD = document.querySelector("#modellingGallery");
const illus = document.querySelector("#illusGallery");

//if the item is listed as three or illus gallery, it goes in the corresponding gallery
galleryLoad();

//define radio buttons variable
const radio = document.querySelector('#illusFilter')
const modRadio = document.querySelector('#modFilter')
//define gallery variable
const galleryOneRadio = document.getElementsByName('galleryOne');
const galleryTwoRadio = document.getElementsByName('galleryTwo');


function galleryLoad(galleryOneFilter = '', galleryTwoFilter = ''){
    //clear galleries every time button is clicked, so it doesnt duplicate
    threeD.innerHTML = '';
    illus.innerHTML = '';
    
    data.filter((d) => {
        if (d.gallery === 'illus' && d.type.includes(galleryOneFilter)) {
            return d;
        }
        if (d.gallery === 'three' && d.type.includes(galleryTwoFilter)) {
            return d;
        }
    }).forEach((d) => {
        //create div for gallery items
        const newEl = document.createElement('div');
        //add the class for gallery items
        newEl.classList.add('galleryItem');
        //inside the div will be
        //<a target="_blank" href="${d.full}"> + the closing </a>
        newEl.innerHTML = `<img src="${d.image}" alt="${d.desc}"><div class="galleryDesc">${d.desc}</div>`;
        //check gallery in data(d) for illus or three
        switch(d.gallery){
            case 'illus':
                illus.appendChild(newEl);
            break;
            case 'three':
                threeD.appendChild(newEl);
            break;
        };
        newEl.addEventListener('click',(e) => {
             const image = newEl.childNodes[0]
             if (!newEl.classList.contains('enlargedGalleryItem')) {
                illus.childNodes.forEach(c => {
                     c.classList.remove('enlargedGalleryItem');
                     c.classList.add('galleryItem');
                 })
                 threeD.childNodes.forEach(c => {
                     c.classList.remove('enlargedGalleryItem');
                     c.classList.add('galleryItem');
                 })
                 newEl.classList.add('enlargedGalleryItem');
                 newEl.classList.remove('galleryItem');
                 newEl.innerHTML =`<img src="${d.full}" alt="${d.desc}"><br>X`;
             } else {
                 newEl.classList.remove('enlargedGalleryItem');
                 newEl.classList.add('galleryItem');
                 newEl.innerHTML =`<img src="${d.image}" alt="${d.desc}"><div class="galleryDesc">${d.desc}</div>`;
             }
            
         })
    });
}

//when radio button is clicked,
radio.addEventListener('click',() => {
    galleryFilterSelection();
});

modRadio.addEventListener('click',() => {
    galleryFilterSelection();
});

function galleryFilterSelection() {
    let checkedOneType, checkedTwoType;
    for (let i = 0; i < galleryOneRadio.length; i++) {
        if(galleryOneRadio[i].checked) {
            checkedOneType = galleryOneRadio[i].value;
        }
    }
    for (let i = 0; i < galleryTwoRadio.length; i++) {
        if(galleryTwoRadio[i].checked) {
            checkedTwoType = galleryTwoRadio[i].value;
        }
    }
    //call gallery load function above
    galleryLoad(checkedOneType, checkedTwoType);
}