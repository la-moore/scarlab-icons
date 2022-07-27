figma.showUI(__html__, {
    width: 240,
    height: 300
})

figma.ui.on('message', (data) => {
    const message: { action: string, data: any } = JSON.parse(data)

    if (message.action === 'CREATE_SVG_FRAME') {
        createFrame(message.data)
    }
})

function createFrame({ svg, name }) {
    const frame = figma.createNodeFromSvg(svg)
    const bounds = figma.viewport.bounds
    const selection = figma.currentPage.selection[0]

    frame.name = name

    if (selection && (selection.type === 'FRAME' || selection.type === 'GROUP')) {
        if (selection.type === 'FRAME') {
            frame.x = selection.width / 2
            frame.y = selection.height / 2
        }

        if (selection.type === 'GROUP') {
            frame.x = selection.x + (selection.width / 2)
            frame.y = selection.y + (selection.height / 2)
        }

        selection.insertChild(selection.children.length, frame)
    } else {
        const center = {
            y: bounds.y + (bounds.height / 2),
            x: bounds.x + (bounds.width / 2)
        }

        frame.x = center.x
        frame.y = center.y
    }

    figma.currentPage.selection = [frame]
    figma.viewport.scrollAndZoomIntoView([frame])
}

// figma.ui.on('RESIZE_WINDOW', ({ width, height }) => {
//     resize(width, height)
// })
