export default class Win extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("win");
    }
  
    init(data) {
      // this is called before the scene is created
      // init variables
      // take data passed from other scenes
      // data object param {}
      console.log("esto es " + data.cantidadEstrellas);
      this.cantidadEstrellas = data.cantidadEstrellas;
    }
  
    create() {
      this.add.image(400, 350, "win").setScale(1.4);
      this.cantidadEstrellasTexto = this.add.text(
        170,
        550,
        "Estrellas recolectadas: " + this.cantidadEstrellas,
        { fontSize: "30px",
          fontStyle: "bold",
          fill: "##CF9FF5" }
      );
    }
  }