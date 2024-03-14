class Player extends Component {

    start() {
        this.rb = this.getComponent(DynamicBoxCollider)
    }

    update() {
        let mov = 0
        if (Input.keyPressed('d')) mov = 1
        if (Input.keyPressed('a')) mov = -1

        this.rb.vel.x = mov * 5

        if (Input.keyJustPressed(' ')) this.rb.vel.y = -10
    }
}