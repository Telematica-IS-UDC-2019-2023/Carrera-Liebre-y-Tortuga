class Dado {
    lanzarDado() {
        return Math.ceil(Math.random() * 100);
    }
}
class Corredor {
    constructor(nombre) {
        this.nombre = nombre
        this.posicion = 0
        this.dado = new Dado
    }
}
class Tortuga extends Corredor {
    constructor(nombre, posicion, dado) {
        super({nombre, posicion, dado})
        this.nombre = nombre
    }
    acciones() {
        let resultado = this.dado.lanzarDado()
        if (resultado <= 20) {
            this.posicion -= 6
        } else if (resultado <= 50) {
            this.posicion += 1
        } else if (resultado <= 100) {
            this.posicion += 3
        }
    }
}
class Liebre extends Corredor {
    constructor(nombre, posicion, dado) {
        super({nombre, posicion, dado})
        this.nombre = nombre
    }
    acciones() {
        let resultado = this.dado.lanzarDado()
        if (resultado <= 10) {
            this.posicion -= 12
        } else if (resultado <= 25) {
            this.posicion -= 2
        } else if (resultado <= 45) {
            this.posicion += 0
        } else if (resultado <= 65) {
            this.posicion += 9
        } else if (resultado <= 100) {
            this.posicion += 1
        }
    }
}
let tortuga = new Tortuga('Tortuman');
let liebre = new Liebre('Copito');
while (tortuga.posicion < 90 && liebre.posicion < 90) {
    tortuga.acciones();
    console.log(`${tortuga.nombre} avanzó a: ${tortuga.posicion}`);
    liebre.acciones();
    console.log(`${liebre.nombre} avanzó a: ${liebre.posicion}`);
}
if (tortuga.posicion >= 90 && liebre.posicion >= 90) {
    console.log('Ambos empataron');
} else if (tortuga.posicion >= 90) {
    console.log(`${tortuga.nombre} ganó`);
} else if (liebre.posicion >= 90) {
    console.log(`${liebre.nombre} ganó`);
}