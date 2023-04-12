const img = document.createElement('img');

const imgURL = new URL('../media/cat.jpg', import.meta.url);
img.src = imgURL.href;
document.body.append(img);
