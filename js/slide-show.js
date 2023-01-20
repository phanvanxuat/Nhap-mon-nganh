var index = 1;
changeImage = function() {
    var imgs = ["/images/anh-thuc-te-1.jpg", "/images/anh-thuc-te.jpg", "/images/anh-thuc-te-2.jpg"];
    document.getElementById("slide-show").src = imgs[index];
    index++;
    if (index == 3) {
        return index = 0;
    }
};
setInterval(changeImage, 3000);