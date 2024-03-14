









function setup() {
    size(1500, 1000);
    background(51);

    new GameObject(width / 2,height -10)
    .addComponent(new RectRenderer(width, 20))
    .addComponent(new BoxCollider(width, 20))

    new GameObject(width / 2,height -50)
    .addComponent(new RectRenderer(50, 50, () => fill(255, 0, 0)))
    .addComponent(new DynamicBoxCollider(50, 50))
    .addComponent(new Player())

    new GameObject(width - 1000 ,height -150)
    .addComponent(new RectRenderer(100, 150))

    new GameObject(width / 2 ,height -300)
    .addComponent(new RectRenderer(100, 300))

    new GameObject(width / 2 + 300 ,height -450)
    .addComponent(new RectRenderer(100, 50))
   
    // new





}

function draw() {
    background(51);

}