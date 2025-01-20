export class TextSplitter {
  private wordsArray: string[][] = [];

  constructor(private className: string) {}

  public splitTextAndUpdateHTML(): void {
    const container = document.querySelector<HTMLElement>(`.${this.className}`)
    if (!container) return
    const text = container.innerText.trim();
    const words = text.split(/\s+/)
    this.wordsArray = words.map(word => word.split(''))
    this.updateHTML(container)
  }

  private updateHTML(container: HTMLElement): void {
    let updatedHTML = ''
    this.wordsArray.forEach(word => {
      updatedHTML += '<span class="word">'
      word.forEach(letter => {
        updatedHTML += `<span class="char">${letter}</span>`
      });
      updatedHTML += '</span> '
    })
    container.innerHTML = updatedHTML
  }

  public createHTMLArrayFromDOM(): HTMLElement[] {
    const container = document.querySelector<HTMLElement>(`.${this.className}`)
    if (!container) return []
    const wordElements = Array.from(container.querySelectorAll<HTMLElement>('.word'))
    return wordElements
  }
}
