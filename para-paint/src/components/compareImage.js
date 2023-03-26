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

            // var diff = 0;
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
            // for (var i = 0; i < img1.data.length / 4; i++) {
            //     if (
            //         img1.data[4 * i + 0] === 0 &&
            //         img1.data[4 * i + 1] === 0 &&
            //         img1.data[4 * i + 2] === 0 &&
            //         img2.data[4 * i + 0] === 0 &&
            //         img2.data[4 * i + 1] === 0 &&
            //         img2.data[4 * i + 2] === 0
            //     ) {
            //         same++;
            //     }
            //     // same += img1.data[4 * i + 0] === img2.data[4 * i + 0] ? 1 : 0;
            //     // diff +=
            //     //     Math.abs(img1.data[4 * i + 0] - img2.data[4 * i + 0]) / 255;
            //     // diff +=
            //     //     Math.abs(img1.data[4 * i + 1] - img2.data[4 * i + 1]) / 255;
            //     // diff +=
            //     //     Math.abs(img1.data[4 * i + 2] - img2.data[4 * i + 2]) / 255;
            //     // if (img1.data[i] === img2.data[i]) {
            //     //     console.log("color ?", img1.data[i], img2.data[i]);
            //     //     same++;
            //     // }
            // }
            callback(same);
        });
    });
}

export default compare;
// compare("Lenna50.jpg", "Lenna100.jpg", function (result) {
//     console.log(result);
// });
