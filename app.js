const container = document.getElementById('container')
const clearBoard= document.getElementById('btn-clear')
 const grid_default= 16

const setBoard=(gridSize)=>{
    for( let i = grid_default*grid_default;i>0;i--){
        const block=document.createElement('DIV')
        block.classList.add('block')
        container.appendChild(block)
        console.log('vagina')
    block.addEventListener('mouseover',()=>{
        block.style.background= 'rgb(24,167,54)'
    })
    }
}
setBoard(grid_default)
clearBoard.addEventListener('click',()=>{
    const userInput = prompt('De cuanto lo queres el grid capo?')
    const grid=document.querySelectorAll('.block')
    grid.forEach((element)=>{
        container.removeChild(element)
        //element.style.background ='white';
    })
    setBoard(userInput)
})


