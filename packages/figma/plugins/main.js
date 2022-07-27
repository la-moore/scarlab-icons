figma.showUI(__html__)

figma.ui.onmessage = (message) => {
    console.log("got this from the UI", message)
}
