class node{
  constructor(val){
    this.val=val;
    this.next=null;
  }
}


class Stack{
  constructor(){
    this.first=null;
    this.last=null;
    this.length=0;
  }
  unshift(val){
    var newNode= new node(val);
    if(!this.first){
      this.first=newNode;
      this.last=newNode;
      this.length++;
    }
    else{
      newNode.next=this.first;
      this.first=newNode;
      this.length++;
    }
    return this.length;
  }
 shift(){
   var temp = this.first;
   if(!this.first){
     return null;
   }
   else{
     var newN=this.first.next;
     this.first=newN;
     this.length--;
   }
   return temp.val;
 }
 
}

var stack = new Stack();


