var Model=function(){
    var x=0;
    var y=0;
    this.setValues = function(xVal,yVal){
            this.x=xVal;
            this.y=yVal;
    }    
     this.result =function(){
        
    var res = Number(this.x) + Number(this.y);
    // alert(res);
            return res;
    }
    
  
    
}

var view=function () {
    
    
     this.showResult = function(Model){
            //var template = $("#template");
            
            document.getElementById('result').value=Model.result();

            // template.find('.task').html(Model.result());
            // $('#task-box').append(template.html());

    }
    
    
}

var controller =function (View) {
    this.init=function(){
        document.getElementById('add').addEventListener('click', function(){
            var xvalue=document.getElementById('xValue').value;
            var yvalue=document.getElementById('yValue').value;
            if(xvalue != '' && yvalue!='' && xvalue!=null && yvalue !=null){
                // document.getElementById('xvalue').value='';
                var mymodel=new Model();
                mymodel.setValues(xvalue,yvalue);
                View.showResult(mymodel);
                            }
            else{
                alert("enter value");
                return;
                            }
            
        });


    }
}
        var myview = new view();
        var mycontroller = new controller(myview);
        mycontroller.init();