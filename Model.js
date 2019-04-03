// var Model ={
// 	x:0;
// 	y:0;

// }
//  Model.prototype={
//  	result : function(){
//  		var res = eval("this.x + this.y");
//  		return res;
//  	}
//  	setValues: function(xVal,yVal) {
//  		this.x=xVal;
//  		this.y=yVal;
//  	}
//  }
var Model=function(){
	var x=0;
 	var y=0;
 	this.setValues = function(xVal,yVal){
  		 	this.x=xVal;
    		this.y=yVal;
    }    
    var result =function(){
    var res = eval("this.x + this.y");
  			return res;
  	}
    
  
    
}