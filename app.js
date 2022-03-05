
const input=document.querySelectorAll('input')[1];
const sonuc=document.querySelectorAll('input')[0];
var btns=document.querySelectorAll('button');
var control="";
let cout=1;
    
for(i=0;i<btns.length;i++){
    btns[i].addEventListener('click',yazdir)
}
function yazdir(){
    if(this.innerText>=0 && this.innerText<10 /*|| this.innerText=='.' */){
           input.value+=this.innerText; 

    }else if(this.innerText=='.' && !input.value.includes('.')){
        input.value+=this.innerText;
        if(input.value[0]=='.'){
            input.value='0'+input.value;
        }

    }else if(this.innerText=='AC' || this.innerText=='%' || this.innerText=='+/-' ){
        
        switch(this.innerText){
            case 'AC':
                input.value="";
                sonuc.value="";
                break;
            case '+/-':
                
                 control = control == "" ? "-" : "";
                if(control.includes('-')){
                    input.value=control+input.value;
                }else if(!control.includes('-')){
                    input.value=input.value.substring(1);
                }
                console.log("first")
                break;
            case '%':
                if(sonuc.value=="" && input.value!==""){
                    sonuc.value=input.value+'%';
                    input.value=""; 
                }else if(sonuc.value!=""&&input.value!="" && !sonuc.value.includes('=')){

                    operant(sonuc.value,this.innerText);
                }else if(sonuc.value.includes('=') || sonuc.value.includes('+') || sonuc.value.includes('x') || sonuc.value.includes('-')){
                    sonuc.value=sonuc.value.slice(0,-1)+'%';
                }
                break;

        }
    }else if(this.innerText=='/' || this.innerText=='x' || this.innerText=='+' || this.innerText=='-' || this.innerText=='='){
        switch(this.innerText){
            case '/':
                if(sonuc.value=="" && input.value!==""){
                    sonuc.value=input.value+'/';
                    input.value=""; 
                }else if(sonuc.value!=""&&input.value!="" && !sonuc.value.includes('=')){

                    operant(sonuc.value,this.innerText);
                }else if(sonuc.value.includes('=') || sonuc.value.includes('+') || sonuc.value.includes('x') || sonuc.value.includes('-')){
                    sonuc.value=sonuc.value.slice(0,-1)+'/';
                }
                break;

            case 'x':
                if(sonuc.value=="" && input.value!==""){
                    sonuc.value=input.value+'x';
                    input.value=""; 
                }else if(sonuc.value!=""&&input.value!="" && !sonuc.value.includes('=')){

                    operant(sonuc.value,this.innerText);
                }else if(sonuc.value.includes('=') || sonuc.value.includes('+') || sonuc.value.includes('/') || sonuc.value.includes('-')){
                    sonuc.value=sonuc.value.slice(0,-1)+'x';
                }
                break;

            case '-':
                if(sonuc.value=="" && input.value!==""){
                    sonuc.value=input.value+'-';
                    input.value=""; 
                }else if(sonuc.value!=""&&input.value!="" && !sonuc.value.includes('=')){

                    operant(sonuc.value,this.innerText);
                }else if(sonuc.value.includes('=') || sonuc.value.includes('+') || sonuc.value.includes('x') || sonuc.value.includes('/')){
                    sonuc.value=sonuc.value.slice(0,-1)+'-';
                }
                break;

            case '+':
                if(sonuc.value=="" && input.value!==""){
                    sonuc.value=input.value+'+';
                    input.value=""; 
                }else if(sonuc.value!=""&&input.value!="" && !sonuc.value.includes('=')){

                    operant(sonuc.value,this.innerText);
                }else if(sonuc.value.includes('=') || sonuc.value.includes('/') || sonuc.value.includes('x') || sonuc.value.includes('-')){
                    sonuc.value=sonuc.value.slice(0,-1)+'+';
                }
                break;

            case '=':
                if(sonuc.value!="" && input.value!=""){
                    console.log("hello")
                    operant(sonuc.value,this.innerText);
                }
                break;

        }
    }
}

function operant(innerText,operants){

    // console.log(eval((Number(sonuc.value))+innerText+(Number(input.value))));
    // sonuc.value=eval((Number(sonuc.value))+innerText+(Number(input.value)));
    if(innerText.includes('/')){
        innerText=innerText.slice(0,-1);
        sonuc.value=(Number(innerText)/Number(input.value))+operants;
    }else if(innerText.includes('+')){
        innerText=innerText.slice(0,-1);
        sonuc.value=Number(innerText)+Number(input.value)+operants;
    }
    else if(innerText.includes('x')){
        innerText=innerText.slice(0,-1);
        sonuc.value=Number(innerText)*Number(input.value)+operants;
    }
    else if(innerText.includes('-')){
        innerText=innerText.slice(0,-1);
        sonuc.value=Number(innerText)-Number(input.value)+operants;
    }else if(innerText.includes('%')){
        innerText=innerText.slice(0,-1);
        sonuc.value=(Number(innerText)*Number(input.value))/100+operants;
    }
    
    input.value="";
}