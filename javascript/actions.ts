export const listStylesheets = () => {
    for (const sheet of document.styleSheets) {
        console.log(sheet)
    }
}

export const hideEditor = () => {
    const editor = document.querySelector("#editor");
    console.log(editor)
    if (editor) {
        editor.classList.add("hide-editor")
    }
}

export const showEditor = () => {
    const editor = document.querySelector("#editor");
    if (editor) {
        editor.classList.remove("hide-editor")
    }
}