const createTable =  (row,columns,mines) => {
     //se crea el tablero
    let minesLocation=[]
    let matrix = new Array(row)
         for(let i=0;i<matrix.length;i++){
            matrix[i]=new Array(columns)
        }
    
       for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            matrix[i][j]={
                value:0,
                y:i,
                x:j,
                flag:false,
                show:false,
            }
        }
       }
    // se colocan minas de manera aleatoria por todo el tablero
    while(mines>0){
        let y = Math.floor(Math.random() * row)
        let x = Math.floor(Math.random() * columns)
        if(matrix[x][y].value !== 'x'){
            matrix[x][y].value = 'x'
            mines--
        }
    }

    //contar minas de celdas vecinas

    for(let i =0; i<row; i++){
        for(let j=0; j<columns;j++){
            
            //arriba
            if(i>0 && matrix[i-1][j].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }
            //arriba derecha
            if(i>0 && j<columns-1 && matrix[i-1][j+1].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }
            //derecha
            if( j<columns-1 && matrix[i][j+1].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }
            //abajo derecha
            if(i<row-1 && j<columns-1 &&  matrix[i+1][j+1].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }
            //abajo
            if(i<row-1 && matrix[i+1][j].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }
            //abajo izquierda
            if(i<row-1 && j>0 && matrix[i+1][j-1].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }
            //izquierda
            if(j>0 && matrix[i][j-1].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }
            //arriba izquierda
            if(i>0 && j>0 && matrix[i-1][j-1].value==='x'){
                matrix[i][j].value!=='x' && matrix[i][j].value++
            }

        }
    }

    
    matrix.map(row=>{
        return(
            row.map(cell=>{
                if(cell.value=='x'){
                    minesLocation.push({x:cell.x,y:cell.y})
                }
            })
        )
    })

       return {
                matrix,
                minesLocation
            } 
    
}

export default createTable