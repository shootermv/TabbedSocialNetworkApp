var tabViewModel=function(title, active, content){ 
 this.title=ko.observable(title);
 this.active=ko.observable(active);
 this.content=ko.observable(content);
};
var tabsViewModel=function(){  
  this.tabsArr=ko.observableArray([]); 
  this.makeTabActive=function(data){
     //make all the tabs unactive
     $.each(this.tabsArr(),function(ind,item){
	      item.active('');
	 });
     //activate current tab	 
     data.active('active');	 
  }.bind(this);
  
  
  this.addTab=function(title, active, content){
    var nt=new tabViewModel(title, active, content);
	this.tabsArr.push(nt);
    this.makeTabActive(nt);
  }.bind(this);
};
var tabs=new tabsViewModel();
tabs.addTab('home','active', 'This is a home tab')
ko.applyBindings(tabs);