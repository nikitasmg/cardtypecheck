export class View {
    constructor(root) {
        this.root = root
        this.addImageContainer()
        this.addInput()
        this.addButton()
        this.addCardType()
        this.addValidWrapper()
    }

    addImageContainer() {
        const cardTypes = ['american-express', 'visa', 'maestro', 'mir', 'visa-electron'];
        const imgWrapper = document.createElement('div')
        imgWrapper.classList.add('imgWrapper')
        for (let i = 0; i < cardTypes.length; i++) {
            let image = document.createElement('img')
            image.setAttribute('data-cardType', cardTypes[i])
            image.src = `../../src/assets/imgs/${cardTypes[i]}.png`
            imgWrapper.appendChild(image)
        }
        this.root.appendChild(imgWrapper)
    }

    addValidWrapper() {
        const validWrapper = document.createElement('span')
        validWrapper.classList.add('valid-wrapper')
        this.root && this.root.appendChild(validWrapper)

    }

    addInput() {
        const inputWrapper = document.createElement('div')
        inputWrapper.classList.add('input-wrapper')
        const input = document.createElement('input')
        input.classList.add('input')
        this.root && this.root.appendChild(inputWrapper)
        inputWrapper.appendChild(input)
    }

    addButton() {
        const inputWrapper = document.querySelector('.input-wrapper')
        const button = document.createElement('button')
        button.classList.add('button')
        button.innerText = 'Check'
        inputWrapper.appendChild(button)
    }

    addCardType() {
        const cardType = document.createElement('span')
        cardType.classList.add('cardTypeWrapper')
        this.root?.appendChild(cardType)
    }

    changeCardType(value) {
        if (value) {
            const targetImg = document.querySelector(`[data-cardType = ${value}]`)
            const allImgs = document.querySelectorAll('img')
            allImgs.forEach(el => el.classList.remove('current'))
            targetImg.classList.add('current')
        }
    }

    get inputValue() {
        const input = document.querySelector('input')
        return input.value
    }

}
