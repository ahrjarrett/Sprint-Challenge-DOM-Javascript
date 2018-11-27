
class Button {
  constructor(button) {
    this.button = button
    this.button.addEventListener('click', this.handleClick.bind(this))
  }
  handleClick() {
    this.button.classList.add('hidden')
  }
}

const buttons = document.querySelectorAll('.Button')
buttons.forEach(button => new Button(button))

