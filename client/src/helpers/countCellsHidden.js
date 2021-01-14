export const countCellsHidden = (game) =>{
    let matrix = game.matrix
    let arr=[];

    matrix.map(row=>{
        return(
            row.map(cell=>{
                if(cell.show===false){
                    arr.push({x:cell.x,y:cell.y})
                }
            })
        )
    })
    return arr
}
export const showAll = (game) =>{
    let matrix = game.matrix
    matrix.map(row=>{
        return(
            row.map(cell=>{
                if(cell.value!=='x'){
                    cell.show=true
                }
            })
        )
    })
    return matrix

}

