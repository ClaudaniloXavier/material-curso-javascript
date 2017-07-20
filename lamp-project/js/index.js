function acender() {
    var lamp = document.getElementById('lamp');

    // console.log(lamp.src);

    if (lamp.src === 'file:///C:/Users/user/Desktop/lampada_project/images/on.jpg') {
        lamp.src = 'file:///C:/Users/user/Desktop/lampada_project/images/off.jpg';
    } else {
        lamp.src = 'file:///C:/Users/user/Desktop/lampada_project/images/on.jpg';
    }

}