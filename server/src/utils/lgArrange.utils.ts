export const lgArrange = (shit: Array<number>) => {
    shit.sort()
    const transformedArr: Array<number> = []
    shit.forEach((k, i) => {
        if (i % 2) {
            transformedArr.push(k)
        } else {
            transformedArr.unshift(k)
        }
    })
    return transformedArr
}