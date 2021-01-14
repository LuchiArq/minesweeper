export const plantFlag = (matrix,x,y) =>{
    if(matrix[x][y].show){
        return matrix
    }
    matrix[x][y].flag= !matrix[x][y].flag
    return matrix
}



export const getCellFlag = (game)=>{
    let matrix = game.matrix
    let flagArray = []
    matrix.map(row=>{
        return(
            row.map(cell=>{
                if(cell.flag===true){
                    flagArray.push({x:cell.x,y:cell.y})
                }
            })
        )
    })
    return flagArray
}
