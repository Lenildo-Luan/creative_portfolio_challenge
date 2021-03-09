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
    ondrop: function(event) {},
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

var audio1 = {
    isDragged: 0,
    isInProjectArea: 0,
    actualSong: -1,
    audio: [document.getElementById("sound1"), document.getElementById("sound2")],
    play(sound) {
        this.audio[sound].play();
        this.actualSong = sound;
    },
    stop(sound) {
        if (this.isDragged == 0 && this.isInProjectArea == 0) {
            this.audio[sound].pause();
            audio1.setCurrentTime(2, sound);
        }
    },
    setCurrentTime(time, sound) {
        this.audio[sound].currentTime = time;
    },
};

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

audio1.setCurrentTime(2, 0);

window.audio1 = audio1;