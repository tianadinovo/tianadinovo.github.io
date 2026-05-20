//data for each image
const data = [
    {
        image: 'assets/media/thumb/thumbcamofawn.jfif',
        full: 'assets/media/camofawn.png',
        type: 'trad',
        gallery: 'illus',
        desc: 'Painting with the fawn sculpture in front of it'
    },{
        image: 'assets/media/thumb/thumbpersp.jfif',
        full: 'assets/media/persp.jfif',
        type: 'trad',
        gallery: 'illus',
        desc: 'Perspective timed study of figures'
    },{
        image: 'assets/media/thumb/thumbgoat.jfif',
        full: 'assets/media/goat.jfif',
        type: 'trad',
        gallery: 'illus',
        desc: 'Pen study of a goat'
    },{
        image: 'assets/media/thumb/thumb15model.jfif',
        full: 'assets/media/15model.jfif',
        type: 'trad',
        gallery: 'illus',
        desc: '15 minute pen study of a model'
    },{
        image: 'assets/media/thumb/thumb15model2.jfif',
        full: 'assets/media/15model2.jfif',
        type: 'trad',
        gallery: 'illus',
        desc: '15 minute pen study of a model'
    },{
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
        image: 'assets/media/thumb/thumblove.jpeg',
        full: 'assets/media/love.jpeg',
        type: 'digital',
        gallery: 'illus',
        desc: 'Love of Art - OSA 145th anniv piece'
    },{
        image: 'assets/media/thumb/thumbodin.jpeg',
        full: 'assets/media/odin.jpeg',
        type: 'trad',
        gallery: 'illus',
        desc: 'Odin'
    },{
        image: 'assets/media/thumb/thumbladdy.jpeg',
        full: 'assets/media/laddy.png',
        type: 'digital',
        gallery: 'illus',
        desc: 'Laddy the Lamb'
    },{
        image: 'assets/media/thumb/thumbHandler.jfif',
        full: 'assets/media/Handler.gif',
        type: 'digital',
        gallery: 'three',
        desc: 'The Handler'
    },{
        image: 'assets/media/thumb/thumbFawn.jfif',
        full: 'assets/media/Fawn.png',
        type: 'trad',
        gallery: 'three',
        desc: 'Crocheted wire Fawn sculpture separate from Camoflage painting'
    },{
        image: 'assets/media/thumb/thumbHand.jfif',
        full: 'assets/media/Hand.gif',
        type: 'digital',
        gallery: 'three',
        desc: 'Monster hand'
    },,{
        image: 'assets/media/thumb/thumbtank.jpeg',
        full: 'assets/media/tank.gif',
        type: 'digital',
        gallery: 'three',
        desc: 'Tank'
    },{
        image: 'assets/media/thumb/thumbDogAnim.jfif',
        full: 'assets/media/DogAnim.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animation of a dog diving'
    },{
        image: 'assets/media/thumb/thumbApeAnim.jfif',
        full: 'assets/media/ApeAnim.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animation of an ape swinging'
    },{
        image: 'assets/media/thumb/thumbHandlerWalk.jfif',
        full: 'assets/media/HandlerWalk.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animated cycle of my Sheridan capstone creature, Handler, walking'
    },{
        image: 'assets/media/thumb/thumbSluggyPerform.jfif',
        full: 'assets/media/SluggyPerform.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animation of an aquatic creature swimming'
    },{
        image: 'assets/media/thumb/thumbSluggySwim.jfif',
        full: 'assets/media/SluggySwim.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animation of an aquatic creature swimming'
    },{
        image: 'assets/media/thumb/thumbDogSwim.jfif',
        full: 'assets/media/DogSwim.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animated cycle of a dog swimming'
    },{
        image: 'assets/media/thumb/thumbDogRun.jfif',
        full: 'assets/media/DogRun.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animated cycle of a dog running'
    },{
        image: 'assets/media/thumb/thumbDogWalk.jfif',
        full: 'assets/media/DogWalk.gif',
        type: '0',
        gallery: 'anim',
        desc: 'Animated cycle  of a dog walking'
    },{
        image: 'assets/media/thumb/thumbGooseFlight.jfif',
        full: 'assets/media/GooseFlight.gif',
        type: '0',
        gallery: 'anim',
        desc: '2D animation of a goose in flight'
    }
]


//defining galleries
const anim = document.querySelector("#animGallery");
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

//anim is gallery 3 as it is the newest addition
function galleryLoad(galleryOneFilter = '', galleryTwoFilter = '', galleryThreeFilter = ''){
    //clear galleries every time button is clicked, so it doesnt duplicate
    anim.innerHTML = '';
    threeD.innerHTML = '';
    illus.innerHTML = '';
    
    data.filter((d) => {
        if (d.gallery === 'illus' && d.type.includes(galleryOneFilter)) {
            return d;
        }
        if (d.gallery === 'three' && d.type.includes(galleryTwoFilter)) {
            return d;
        }
        if (d.gallery === 'anim' && d.type.includes(galleryThreeFilter)) {
            return d;
        }
    }).forEach((d) => {
        //create div for gallery items
        const newEl = document.createElement('div');
        //add the class for gallery items
        newEl.classList.add('galleryItem');
        //inside the div will be
        newEl.innerHTML = `<img src="${d.image}">`;
        //check gallery in data(d) for illus or three
        switch(d.gallery){
            case 'illus':
                illus.appendChild(newEl);
            break;
            case 'three':
                threeD.appendChild(newEl);
            break;
            case 'anim':
                anim.appendChild(newEl);
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
                 newEl.innerHTML =`<img src="${d.image}" alt="${d.desc}">`;
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

