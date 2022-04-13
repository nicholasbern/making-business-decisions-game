// TODO: rewrite to be generative
const checkWithinBounds = (
    rowIdx: number, 
    columnIdx: number, 
    rowMin: number, 
    rowMax: number, 
    columnMin: number, 
    columnMax: number
) => (
    rowIdx >= rowMin && rowIdx <= rowMax &&
    columnIdx >= columnMin && columnIdx <= columnMax)

export {checkWithinBounds}