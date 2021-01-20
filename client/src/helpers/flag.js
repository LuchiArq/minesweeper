export const plantFlag = (table,x,y) =>{
    if(table[x][y].show){
        return table
    }
    table[x][y].flag= !table[x][y].flag
    return table
}



export const getCellFlag = (game)=>{
    let table = game.table
    let flagArray = []
    table.map(row=>{
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
