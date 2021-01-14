const showCell = (game,y,x) =>{
    console.log(reveal(game.matrix,y,x))
    let newTableGame = revealCell(game.matrix,y,x)

    if(newTableGame.lose){
       let gameLose = lose(newTableGame.matrix,game.minesLocation)
        return JSON.parse(JSON.stringify({lose:true,table:gameLose})) 
    }

    return  JSON.parse(JSON.stringify({lose:false,table:newTableGame}));
}


function lose(matrix,mines){
    for(let i=0;i<mines.length;i++){
        matrix[mines[i].x][mines[i].y].show=true
    }

    return matrix
}

function revealCell(matrix,y,x){
    matrix[y][x].show=true

    if(matrix[y][x].value==='x'){
        return {lose:true,
                matrix:matrix}
    } 
    if(matrix[y][x].value!==0){
        matrix[y][x].show=true 
        return matrix
    }
    let arr = reveal(matrix,y,x)
    arr.map(data=>{
        if(data.value!==0 && matrix[data.y][data.x].show==false){
            matrix[data.y][data.x].show=true
        }
        if(data.value===0 && matrix[data.y][data.x].show==false){
            matrix[data.y][data.x].show=true
            revealCell(matrix,data.y,data.x)
        }
    })
    return matrix

}

function reveal(matrix,y,x){
    let row = matrix.length
    let columns = matrix[0].length
    let arr =[]
        //arriba
        if(y>0){
            arr.push(matrix[y-1][x])
        }
        //arriba derecha
        if(y>0 && x<columns-1){
            arr.push(matrix[y-1][x+1])
        }
        //derecha
        if( x<columns-1){
            arr.push(matrix[y][x+1])
        }
        //abajo derecha
        if(y<row-1 && x<columns-1){
            arr.push(matrix[y+1][x+1])
        }
        //abajo
        if(y<row-1){
            arr.push(matrix[y+1][x])
        }
        //abajo izquierda
        if(y<row-1 && x>0){
            arr.push(matrix[y+1][x-1])
        }
        //izquierda
        if(x>0){
            arr.push(matrix[y][x-1])
        }
        //arriba izquierda
        if(y>0 && x>0){
            arr.push(matrix[y-1][x-1])
        }
    return arr
}


export default showCell