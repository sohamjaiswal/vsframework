export const screenArranger = (screens: Array<any>) => {
    screens.sort()
    const arrangedScreens: Array<any> = []
    screens.forEach((x, i) => {
        if (i % 2 === 0) {
            arrangedScreens.push(x)
        } else {
            arrangedScreens.unshift(x)
        }
    })
    return arrangedScreens
}