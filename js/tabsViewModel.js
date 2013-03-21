var tabViewModel=function(title, active, model, templateName){ 
  this.title=ko.observable(title);
  this.active=ko.observable(active);
  this.model=ko.observable(model);
  this.templName=templateName;
};
var tabsViewModel=function(){  
  this.tabsArr=ko.observableArray([]);//new tabViewModel('home','active', new homeViewModel(),'homeTmpl'),new tabViewModel('search','' ,new searchViewModel(),'searchTmpl')]) ; 

 
  this.makeTabActive=function(data){
    
      $.each(this.tabsArr(),function(ind,item){
	      item.active('');
	  });
	  
     data.active('active');
	 
  }.bind(this);
  
  this.addTab=function(title, active, model, template){
    var nt=new tabViewModel(title, active, model, template);
	this.tabsArr.push(nt);
    this.makeTabActive(nt);
  }.bind(this);
};