function getImageData(url, callback) {
    var img = document.createElement("img");
    var canvas = document.createElement("canvas");

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        callback(ctx.getImageData(0, 0, img.width, img.height));
    };

    img.src = url;
}

function compare(firstImage, secondImage, callback) {
    getImageData(firstImage, function (img1) {
        getImageData(secondImage, function (img2) {
            if (img1.width !== img2.width || img1.height != img2.height) {
                console.log("Images are not the same size");
                console.log(img1.width, img1.height);
                console.log(img2.width, img2.height);
                callback(NaN);
                return;
            }

            var same = 0;
            for (let i = 0; i < img1.data.length; i += 4) {
                const r1 = img1.data[i];
                const g1 = img1.data[i + 1];
                const b1 = img1.data[i + 2];
                const r2 = img2.data[i];
                const g2 = img2.data[i + 1];
                const b2 = img2.data[i + 2];

                // Check if both pixels are black
                if (
                    r1 === 0 &&
                    g1 === 0 &&
                    b1 === 0 &&
                    r2 === 0 &&
                    g2 === 0 &&
                    b2 === 0
                ) {
                    same++;
                }
            }
            callback(same);
        });
    });
}

export default compare;
