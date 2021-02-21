class calculadora {
    constructor() {
        this.numero = document.getElementById("recivir")
        this.resultado = document.getElementById("resultado")
        this.binario = []
        this.resto = []
        this.decimal = []
        this.a
        this.b
        this.d
        this.e
        this.c
        this.multiplicacion = []
        this.Nresultado=[]
        this.esponente = []
        this.dos = []
        this.numeros = []
        this.Ndatos
        this.Nexponentes
        this.Ndos
        this.Nnumeros
        this.multipli=0
    }
    binarios() {
        this.a = this.numero.value
        this.binario.push(parseInt(this.a))
        for(let i=0;i<this.a.length;i++){
            this.d = this.binario[i] / 2
            this.binario.push(this.d)
        }
        for (let i = 0; i<this.binario.length; i++) {
            this.c = this.binario[i] % 2
            this.resto.push(this.c)
        }
        this.resultado.value = this.resto.join('')
    }
    decimales() {

        this.b = this.numero.value

        for (let i = 0; i < this.b.length; i++) {
            this.Ndatos = this.b.substr([i], 1)
            this.numeros.push(parseInt(this.Ndatos))
        }

        for (let i = 0; i < this.b.length; i++) {
            this.Nexponentes = i
            this.esponente.push(this.Nexponentes)
        }

        for (let i = 0; i < this.b.length; i++) {
            this.Ndos = 2
            this.dos.push(this.Ndos)
        }

        for (let i = 0; i < this.dos.length; i++) {
            this.Nnumeros = this.dos[i] ** this.esponente[i]
            this.Nresultado.push(this.Nnumeros)
        }

        for(let i=0;i<this.dos.length;i++){
            this.e=this.numeros[i]*this.Nresultado[i]
            this.multiplicacion.push(this.e)
        }

        for (let i = 0; i < this.multiplicacion.length; i++) {
                this.multipli = this.multipli + this.multiplicacion[i]
                console.log(this.multipli)
        }
        this.resultado.value = this.multipli
    }
}

let b = new calculadora()