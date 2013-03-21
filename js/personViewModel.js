var personViewModel=function(fn,ln){
  var that=this;
  this.firstname=ko.observable(fn);
  this.lastname=ko.observable(ln);
  /*
  this.addFriend=function(){
     alert(that.firstname() +' and you are friends now' );
  }*/

  this.templName="personTmpl";  
}