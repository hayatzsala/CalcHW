var Model=function(){
    var x=0;
    var y=0;
    this.setValues = function(xVal,yVal){
            this.x=xVal;
            this.y=yVal;
    }    
     this.result =function(op){
       
        if(op=="add"){
            var res = Number(this.x) + Number(this.y);
            return res;
        }else if(op=="mult"){
             var res = Number(this.x) * Number(this.y);
            return res;
        }
        else if(op=="divi"){
             var res = Number(this.x) / Number(this.y);
            return res;
        }
        else if(op=='sub'){
             var res = Number(this.x) - Number(this.y);
            return res;
        }
        else if(op=='sqr'){
             var res= Math.pow(Number(this.x),0.5);
            return res;
        }
        else if(op == 'mod'){
             var res = Number(this.x) % Number(this.y);
            return res;
        }
        else if(op=='clear'){
             document.getElementById('operand').value='';
             var res='';
            return res;
        }
   
    }
    
  
    
}

var view=function () {
    
    
     this.showResult = function(Model,op){
            document.getElementById('result').value=Model.result(op);
    }
    
    
}

var controller =function (View) {
    this.init=function(){

      

            document.getElementById('equal').addEventListener('click',function(){

           var inputVal=document.getElementById('operand').value;
           if(inputVal !='' && inputVal!=null){
           var values=inputVal.split(' ');
           var xvalue=values[0];
           var yvalue=values[2];
          
           var op;
            if(values[1]=='*'){
                op='mult';
            }
            else if(values[1]=='/'){
                op='divi';
            }
            else if(values[1]=='+'){
                op='add';
            }
            else if(values[1]=='-'){
                op='sub';
            }
            else if(values[1]=='%'){
                op='mod';
            }
            else if(values[1]=='sqr'){
                op='sqr';
                yvalue=" ";
            }

                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel,op);
            }
            else{
                alert("enter value");
                return;
                            }});
       
    
            //clear operation
            document.getElementById('clear').addEventListener('click',function(){
                var op='clear';
    
                var mymodel=new Model();
                View.showResult(mymodel,op);
                            }
            );

     
                  
    }
  }

        var myview = new view();
        var mycontroller = new controller(myview);
        mycontroller.init();              
