box.onmousedown = function(e) {

    var shiftX = e.clientX - box.getBoundingClientRect().left;
    var shiftY = e.clientY - box.getBoundingClientRect().top;

    box.style.position = 'absolute';
    box.style.zIndex = 1000;

    document.body.append(box);

    function moveAt(pageX, pageY) {
        box.style.left = pageX - shiftX / 2 + 'px';
        box.style.top = pageY - shiftY / 2 + 'px';
    }

    moveAt(e.pageX, e.pageY);

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    box.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        box.onmouseup = null;
    };
};

box.ondragstart = function() {
    return false;
};