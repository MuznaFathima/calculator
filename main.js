let str=" "
let buttons=document.querySelectorAll('.btn')

Array.from(buttons).forEach((button)=>{

button.addEventListener('click',(e)=>{

    if(e.target.innerHTML=="="){

        str=eval(str)
        document.querySelector('input').value=str

    }

    else if(e.target.innerHTML=="X"){

        str=" "
        document.querySelector('input').value=str
    }

    else{

        str=str+e.target.innerHTML
        console.log(e.target);
        document.querySelector('input').value=str

    }



})


})