var view=function () {
	
	
	 this.showResult = function(Model){
            //var template = $("#template");
            document.getElementById('result').value=Model.result();

            // template.find('.task').html(Model.result());
            // $('#task-box').append(template.html());

    }
    
	
}