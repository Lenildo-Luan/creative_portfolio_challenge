import interact from 'https://cdn.interactjs.io/v1.10.8/interactjs/index.js'

/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    ondropactivate: function(event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
        audio1.isDragged = 1;
    },
    ondragenter: function(event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
        audio1.isInProjectArea = 1;


        let template = document.getElementById('project-template').innerHTML;
        // console.log(projectTemplate);
        document.getElementById('project1').innerHTML = Mustache.render(template, projects[draggableElement.id]);

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
    },
    ondragleave: function(event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        audio1.isInProjectArea = 0;
    },
    ondrop: function(event) {
        audioLibrarie.transition.play();
        event.target.classList.add('fullBlackHole');
        setTimeout(() => { window.document.getElementById('project1').classList.add('showProject'); }, 200);

    },
    ondropdeactivate: function(event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        audio1.isDragged = 0;
    }
})

interact('.drag-drop').draggable({
    inertia: true,
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
})

function dragMoveListener(event) {
    var target = event.target
        // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// ===========================================================================

var projects = {
    planet1: {
        img: './assets/images/BecoDaEletronica.webp',
        title: 'O beco',
        subtitle: 'Não o diagonal, mas sim o da eletrônica',
        text1: 'Desde o ensino médio técnico, comprar componentes eletrônicos era complicado. Tinhamos que nos deslocar até o centro da cidade, onde tinham lojas com esses produtos, na esperança de encontra-los. Mesmo assim, as opções eram bem limitadas, nos restando duas opções. Comprar caro aqui pelo Brasil, ou',
        text2: 'importar e esperar um bom tempo para receber nosso material. No ensino superior esse problema se repetiu. Então eu mais dois amigos decidimos montar nossa própria loja de eletrônicos, para oferecer a estudantes como nós, componentes eletrônicos por um preço acessivel e sem ter que esperar meses por isso.',
        link: 'https://www.instagram.com/becodaeletronica/',
        linkImg: './assets/images/instagram_white.svg'
    },
    planet2: {
        img: './assets/images/RAS.webp',
        title: 'RAS',
        subtitle: 'Sociedade e Robótica e Automação do IEEE (RAS)',
        text1: 'O Instituto de Engenheiros Elétricos e Eletricistas (IEEE) é uma instituição a nível global. Porém, se existir um grupo de estudantes engajados dentro de alguma universdade, estes podem abrir uma ramificação dessa instituição nela. A RAS é um capítulo dessa instituição, voltada a robótica e automação.',
        text2: 'Eu e uns amigos abrimos esse capítulo em nossa universidade. Começando como um grupo voltado ao ensino robótica para os novatos da graduação, crescemos e nos tornamos um dos maiores capítulos do Brasil, contando hoje com diversas atividades internas, externas e uma comunidade forte e ativa.',
        link: 'https://www.instagram.com/rasufpb/',
        linkImg: './assets/images/instagram_white.svg'
    },
    planet3: {
        img: './assets/images/JornadaWeb.webp',
        title: 'Jornada Web',
        subtitle: 'Compartilhar conhecimento é preciso',
        text1: 'Acredito que conhecimento é algo que deve ser compartilhado com o máximo de pessoas possível. Compartilhar conhecimento é algo vital para crescermos enquanto sociedade. Além disso, quando eu ensino, sinto que aprendo duas vezes. Com esse pensamento eu iniciei um projeto pessoal',
        text2: 'chamado #jornadaweb. Durante alguns meses revisei e estudei os fundamentos do desenvolvimento web, e comecei a compartilhar parte do que aprendia nas redes sociais. Nesse momento estou planejando dar um próximo passo e convidar outras pessoas a fazerem parte disso comigo.',
        link: 'https://www.instagram.com/lenildoluan/',
        linkImg: './assets/images/instagram_white.svg'
    },
    planet4: {
        img: './assets/images/Bravadus.webp',
        title: 'Bravadus',
        subtitle: 'Nós adoramos desafios',
        text1: 'Sou fascinado por tudo que envolve computação, desde a hardware a desenvolvimento de software. Aprender a criar projetos com minhas próprias mãos me dá a impressão de que posso moldar a realidade da forma como desejo. Porém, esse poder pode conter cosnsigo algumas responsabilidades no mundo.',
        text2: 'Existêm muitas pessoas e empresas ao redor desse Brasil e até do mundo que necessitam de pessoas como eu para resolver problemas. Assim nasceu a Bravadus, onde eu e mais alguns amigos nos tornamos disponíveis para ajudar quem precisa, e tornar o mundo um lugar melhor, um projeto por vez.',
        link: 'https://www.instagram.com/bravadusagency/',
        linkImg: './assets/images/instagram_white.svg'
    },
    planet5: {
        img: './assets/images/Optlife.webp',
        title: 'Optlife',
        subtitle: 'Quer saber qual a rotina da sua melhor versão?',
        text1: 'Já teve a sensação de que não teve tempo? De que administrar seu tempo tem se tornado algo cansativo? Não consegue separar hora de trabalho da hora para sua vida pessoal? Se sim, eu também, e estou cansado disso. Por isso, tenho feito desse problema foco da minha pesquisa em um laboratório ',
        text2: 'referência em criação de algorítimos para resolver problemas da vida real, como esse. Mas decidi dar um próximo passo, e em conjunto com outros pesquisadores/desenvolvedores, estamos criando algo que qualquer pessoa possa usar para encontrar a rotina da sua melhor versão, e vive-la.',
        link: 'https://me8z666e0w5.typeform.com/to/xPAKT5X7?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx',
        linkImg: './assets/images/form.svg'
    }
}

var audio1 = {
    isDragged: 0,
    isInProjectArea: 0,
    actualSong: -1,
    audio: [document.getElementById("sound1"), document.getElementById("sound2")],
    play(sound) {
        // this.audio[sound].play();
        this.actualSong = sound;
    },
    stop(sound) {
        if (this.isDragged == 0 && this.isInProjectArea == 0) {
            // this.audio[sound].pause();
            audio1.setCurrentTime(2, sound);
        }
    },
    setCurrentTime(time, sound) {
        this.audio[sound].currentTime = time;
    },
};

var audioLibrarie = {
    universe: document.getElementById("universeAudio"),
    transition: document.getElementById("transition"),
    planet1: document.getElementById("planet1Hover"),
    planet2: document.getElementById("planet2Hover"),
    planet3: document.getElementById("planet3Hover"),
    planet4: document.getElementById("planet4Hover"),
    planet5: document.getElementById("planet5Hover")
}

audioLibrarie.universe.volume = 0.02;
audioLibrarie.universe.play();

let planet1Audio = document.getElementById("planet1");
planet1Audio.addEventListener('mouseenter', () => {
    if (audio1.isDragged == 0)
        audioLibrarie.planet1.play();
})

let planet2Audio = document.getElementById("planet2");
planet2Audio.addEventListener('mouseenter', () => {
    if (audio1.isDragged == 0)
        audioLibrarie.planet2.play();
})

let planet3Audio = document.getElementById("planet3");
planet3Audio.addEventListener('mouseenter', () => {
    if (audio1.isDragged == 0)
        audioLibrarie.planet3.play();
})

let planet4Audio = document.getElementById("planet4");
planet4Audio.addEventListener('mouseenter', () => {
    if (audio1.isDragged == 0)
        audioLibrarie.planet4.play();
})

let planet5Audio = document.getElementById("planet5");
planet5Audio.addEventListener('mouseenter', () => {
    if (audio1.isDragged == 0)
        audioLibrarie.planet5.play();
})

setTimeout(() => {
    window.document.getElementById('loading').classList.remove('showProject');
    window.document.getElementById('sum').classList.remove('fullSum')
}, 1000)

// ===========================================================================

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

window.audio1 = audio1;
window.closeProject = () => {
    window.document.getElementById('blackHole').classList.remove('fullBlackHole');
    window.document.getElementById('project1').classList.remove('showProject');
}
window.openAbout = () => {
    audioLibrarie.transition.play();
    window.document.getElementById('sum').classList.add('fullSum');
    setTimeout(() => { window.document.getElementById('about').classList.add('showProject'); }, 200);
}
window.closeAbout = () => {
    window.document.getElementById('sum').classList.remove('fullSum')
    window.document.getElementById('about').classList.remove('showProject');
}