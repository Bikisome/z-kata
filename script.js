let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
 let turnO=true;
 const winPattern=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
    ];
    let cnt=0;
    const resetGame=()=>{
        turnO=true;
        cnt=0;
        enableBoxes();
        msgContainer.classList.add("hide");
    };

    const showDraw=()=>{
        msg.innerText=("Match  was a Draw ");
        msgContainer.classList.remove("hide");
        disableBoxes();
    };+

    boxes.forEach((val)=>{
        val.addEventListener("click",()=>{
            
            if(turnO){
                cnt++;
                val.innerText="O";
                val.style.color="red";
                turnO=false;
                
            }
            else{
                cnt++;
                val.innerText="x";
                val.style.color="orange";
                turnO=true;
                
            }
            val.disabled=true;
           let isWinner= checkWinner();
           if(cnt===9 && !isWinner){
            showDraw();
        }
        
        });
    });
    const disableBoxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    };


    const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
   const showWinner=(winner)=>{
               msg.innerText=`congratulation winner is ${winner}`;
               msgContainer.classList.remove("hide");
               disableBoxes();
   }



   checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=(boxes[pattern[0]]).innerText;
        let pos2Val=(boxes[pattern[1]]).innerText;
        let pos3Val=(boxes[pattern[2]]).innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos1Val===pos3Val){
               
                showWinner(pos1Val);
            }
            
            
        
           };
           
        }
       
    }
   
  

   newBtn.addEventListener("click",resetGame);
   resetBtn.addEventListener("click",resetGame);


 
   








