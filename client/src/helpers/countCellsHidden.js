export const countCellsHidden = (game) =>{
    let table = game.table
    let arr=[];

    table.map(row=>{
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
    let table = game.table
    table.map(row=>{
        return(
            row.map(cell=>{
                if(cell.value!=='x'){
                    cell.show=true
                }
            })
        )
    })
    return table

}

