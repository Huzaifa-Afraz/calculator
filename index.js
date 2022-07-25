let string='';
let buttons=document.querySelectorAll('.btn');
let screen=document.getElementById('screen');
Array.from(buttons).forEach(
    (button)=>{
        button.addEventListener("click", (e)=>{

            console.log(e.target.innerHTML);
            if(e.target.innerHTML=="="){
               
                string=eval(string);
                screen.value=string;
            }
            else if(e.target.innerHTML=="c"){
                string='';
                screen.value=string;
            }
            else{

                string +=e.target.innerHTML;
                screen.value=string;
            }

        })
    }
)