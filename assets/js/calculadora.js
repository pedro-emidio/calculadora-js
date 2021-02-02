function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        clearDisplay() {
            this.display.value = ''
        },

        inicia: function () {
            this.click()
            this.pressionaEnter()
            this.pressionaBackSpace()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', evento => {
                if (evento.keyCode === 13) {
                    this.calcular()
                }
            })
        },

        pressionaBackSpace() {
            this.display.addEventListener('keyup', evento => {
                if (evento.keyCode === 8) {
                    this.clearDisplay()
                }
            })
        },


        calcular() {
            let valores = this.display.value
            try {
                valores = eval(valores)
                if (valores === NaN) {
                    alert('Conta invalida')
                    this.clearDisplay()
                    return
                }
                this.display.value = valores
            } catch (e) {
                alert('Conta invalida')
                return
            }
        },

        click() {
            // A ARROW FUNCTION foi usada aqui para evitar problemas com o this (outra solução é usar {}.binder(this))
            document.addEventListener('click', (evento) => {
                const elemento = evento.target
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText)
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (elemento.classList.contains('btn-del')) {
                    this.apagaUm()
                }
                if (elemento.classList.contains('btn-eq')) {
                    this.calcular()
                }
            })

        },

        btnParaDisplay: function (valor) {
            this.display.value += valor
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()