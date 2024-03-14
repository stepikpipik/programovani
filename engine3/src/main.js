
function setup() {
    size(1500, 1000);
    background(51);

    new GameObject(width / 2,height -10)
    .addComponent(new RectRenderer(width, 20))

    new GameObject(width / 2,height -45)
    .addComponent(new RectRenderer(50, 50))


    new GameObject(width - 1000 ,height -150)
    .addComponent(new RectRenderer(100, 20))


    new GameObject(width / 2 ,height -300)
    .addComponent(new RectRenderer(100, 20))


    new GameObject(width / 2 + 300 ,height -450)
    .addComponent(new RectRenderer(100, 20))


    
}

function draw() {
    background(51);

}