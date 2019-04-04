var Model=function(){
    var x=0;
    var y=0;
    this.setValues = function(xVal,yVal){
            this.x=xVal;
            this.y=yVal;
    }    
     this.result =function(op){
        // alert(op);
        if(op=="add"){
            var res = Number(this.x) + Number(this.y);
            // alert(res);
            return res;
        }else if(op=="mult"){
             var res = Number(this.x) * Number(this.y);
            // alert(res);
            return res;
        }
        else if(op=="divi"){
             var res = Number(this.x) / Number(this.y);
            // alert(res);
            return res;
        }
        else if(op=='sub'){
             var res = Number(this.x) - Number(this.y);
            // alert(res);
            return res;
        }
        else if(op=='sqr'){
             document.getElementById('yValue').value='';
             var res= Math.pow(Number(this.x),0.5);
            return res;
        }
        else if(op == 'mod'){
             var res = Number(this.x) % Number(this.y);
           
            return res;
        }
        else if(op=='clear'){
             document.getElementById('xValue').value='';
             document.getElementById('yValue').value='';
             var res='';
            // alert(res);

            return res;
        }
    // var res = Number(this.x) + Number(this.y);
    // // alert(res);
    //         return res;
    }
    
  
    
}

var view=function () {
    
    
     this.showResult = function(Model,op){
            //var template = $("#template");
            
            document.getElementById('result').value=Model.result(op);

            // template.find('.task').html(Model.result());
            // $('#task-box').append(template.html());

    }
    
    
}

var controller =function (View) {
    this.init=function(){

      

       /******************************************************/
            //multiplication *
            
            document.getElementById('mult').addEventListener('click',function(){
                var op='mult';
            var xvalue=document.getElementById('xValue').value;
                 var yvalue=document.getElementById('yValue').value;
            if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
                 
                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel,op);
                            }
            else{
                alert("enter value");
                return;
                            }});
       
       //division 
            
            document.getElementById('divi').addEventListener('click',function(){
                var op='divi';
            var xvalue=document.getElementById('xValue').value;
                 var yvalue=document.getElementById('yValue').value;
            if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
                 
                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel,op);
                            }
            else{
                alert("enter value");
                return;
                            }});
       
           
            //add
            
            document.getElementById('add').addEventListener('click',function(){
                var op='add';
            var xvalue=document.getElementById('xValue').value;
                 var yvalue=document.getElementById('yValue').value;
            if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
                 
                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel,op);
                            }
            else{
                alert("enter value");
                return;
                            }});

            //subtract
            
            document.getElementById('sub').addEventListener('click',function(){
                var op='sub';
            var xvalue=document.getElementById('xValue').value;
                 var yvalue=document.getElementById('yValue').value;
            if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
                 
                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel,op);
                            }
            else{
                alert("enter value");
                return;
                            }});
       
       //clear
            
            document.getElementById('clear').addEventListener('click',function(){
                var op='clear';
            var xvalue=document.getElementById('xValue').value;
                 var yvalue=document.getElementById('yValue').value;
                var mymodel=new Model();
                View.showResult(mymodel,op);
                            }
            );

            //square root
            document.getElementById('sqr').addEventListener('click',function(){
                var op='sqr';
            var xvalue=document.getElementById('xValue').value;
                 var yvalue=document.getElementById('yValue').value;
            if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
                 
                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel,op);
                            }
            else{
                alert("enter value");
                return;
                            }});

            //module
            document.getElementById('mod').addEventListener('click',function(){
                var op='mod';
            var xvalue=document.getElementById('xValue').value;
                 var yvalue=document.getElementById('yValue').value;
            if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
                 
                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel,op);
                            }
            else{
                alert("enter value");
                return;
                            }});

/******************************************************************************************/
           
       
        }
        //   document.getElementById('add').addEventListener('click', function(){
        //     // var xvalue=document.getElementById('xValue').value;
        //     // var yvalue=document.getElementById('yValue').value;
        //     if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
        //         // document.getElementById('xvalue').value='';
        //         var mymodel=new Model();
        //         mymodel.setValues(xvalue,yvalue);
        //         View.showResult(mymodel);
        //                     }
        //     else{
        //         alert("enter value");
        //         return;
        //                     }
            
        // });
        

              this.write=function(){
                var flag;
                document.getElementById('xValue').addEventListener('click',function(){flag=1; });

                if(flag==1){
                    var number=document.getElementById('numbers').querySelectorAll('num');
                for (var i = 0; i < number.length; i++) {
                    document.getElementById('xValue').value +=number[i].id.value;
                }

                }
                 document.getElementById('yValue').addEventListener('click',function(){flag=2; });
                 if(flag==2){
                    var number=document.getElementById('numbers').querySelectorAll('num');
                for (var i = 0; i < number.length; i++) {
                    document.getElementById('yValue').value +=number[i].id.value;
                }

                }
              }
                  
    }
  

        var myview = new view();
        var mycontroller = new controller(myview);
        mycontroller.init();              
