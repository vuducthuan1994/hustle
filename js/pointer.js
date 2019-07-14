(function() {
    document.onmousemove = handleMouseMove;
    var timeout;

    function handleMouseMove(event) {
        var eventDoc, doc, body;
        event = event || window.event;
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function() {
            document.getElementById('cursor-page').style.transform = 'matrix(1,0,0,1,' + parseInt(event.pageX) + ',' + parseInt(event.pageY) + ')';
        }, 100);

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }
        document.getElementById('cursor-page').style.transform = 'translate3d(' + event.pageX + 'px,' + event.pageY + 'px,0px)';
    }
})();