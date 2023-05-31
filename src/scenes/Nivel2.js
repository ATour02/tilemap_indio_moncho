export default class Juego extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("nivel2");
  }

  create() {
    // todo / para hacer: texto de puntaje
    //Se agrega como funcion la key que con la que se cargo el tilemap en la precarga
    const map = this.make.tilemap({ key: "game2" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    // para introducir la tilesetimage, se pone el parametro de TILES y el que se precargo en laa precarga
    const capaFondo = map.addTilesetImage("sky", "tilesFondo");
    //lo mismo para platform, primero el nombre del de tiles y el segundo del de la precarga
    const capaPlataformas = map.addTilesetImage("platform", "tilesPlataforma");

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    //y para que aparezca en
    const fondoLayer = map.createLayer("sky", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer("platform", capaPlataformas, 0, 0);
    const objectosLayer = map.getObjectLayer("objetos");

    plataformaLayer.setCollisionByProperty({ colision: true });

    console.log("spawn point player", objectosLayer);
    // The player and its settings
    this.jugador = this.physics.add.sprite(200, 400, "dude");

    //  Player physics properties. Give the little guy a slight bounce.
    this.jugador.setBounce(0.1);
    this.jugador.setCollideWorldBounds(true);
    //physics
    this.physics.add.collider(this.jugador, plataformaLayer);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0);
  }
}
