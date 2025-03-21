class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    atacar() {
        const ataques = {
            "mago": "usou magia",
            "guerreiro": "usou espada",
            "monge": "usou artes marciais",
            "ninja": "usou shuriken"
        };
        const ataque = ataques[this.tipo] || "usou um ataque desconhecido";
        console.log(`0 ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Sininho", 150, "Mago");
heroi1.atacar();

const heroi2 = new Heroi("Shenna", 35, "Guerreiro");
heroi2.atacar();

const heroi3 =  new Heroi("Lara", 32, "Monge");
heroi3.atacar();

const heroi4 = new Heroi("Miyuki", 28, "Ninja");
heroi4.atacar();