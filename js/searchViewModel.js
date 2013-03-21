
var searchViewModel=function(){
  
  this.typename='search';  
  var that=this;
  this.results=ko.observableArray([]);
  this.searchterm=ko.observable();

  this.clickSearch=function(){
  
    this.results([]);//empty the results array 
    switch(that.searchterm()){	  
      case 'k':
        this.results.push({firstname:'Kostia',lastname:'Baranov'});
        break;
      case 'v':	   
        this.results.push({firstname:'Vasia',lastname:'Kozlov'});
        break;
	  default :
	    this.results.push({firstname:'Vasia',lastname:'Kozlov'});
		this.results.push({firstname:'Kostia',lastname:'Baranov'});
    }
  };
  /*
  this.openPersonTab=function(data){
     alert(data.firstname)
  }*/  
  
  this.templName='searchTmpl';
};
