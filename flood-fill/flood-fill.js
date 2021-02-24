/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, color = image[sr][sc]) {
    if (
        sr < 0
        || sr >= image.length
        || sc < 0
        || sc >= image[sr].length
        || color !== image[sr][sc]
        || image[sr][sc] === newColor
    ) {
        return image
    };

    image[sr][sc] = newColor;

    floodFill(image, sr - 1, sc, newColor, color);
    floodFill(image, sr + 1, sc, newColor, color);
    floodFill(image, sr, sc - 1, newColor, color);
    floodFill(image, sr, sc + 1, newColor, color);

    return image;
};