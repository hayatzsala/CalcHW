var controller =function (View) {
	this.init=function(){
		document.getElementById('add').on('click', function(){
			var xvalue=document.getElementById('xValue').value;
			var yvalue=document.getElementById('yValue').value;
			if(xvalue != '' && yvalue!=''){
				document.getElementById('xvalue').value='';
				var model=new Model();
				model.setValues(xvalue,yvalue);
				view.showResult();
							}
			else{
				alert("enter value");
				return;
							}
			
		});


	}
}