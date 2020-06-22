class node{
  constructor(val){
    this.val=val;
    this.next=null;
    this.prev=null;
  }
}


class DoublyLinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }

  pushToEnd(val){
    var newNode= new node(val);
   if(!this.head){                          // this.length===0
     this.head=newNode;
     this.tail=this.head;
   }
   else{
     this.tail.next=newNode;
     newNode.prev=this.tail;
     this.tail=newNode;
   }
   this.length++;
   return this;
  }
  popFromEnd(){
    if(this.length===0){
      return false;
    }
    else if(this.length===1){
      this.head=null;
      this.tail=null;
      this.length--;
    }
    else{
      var oldTail=this.tail;
      this.tail=oldTail.prev;
      this.tail.next=null;
      this.length--;
    }
  }
  popFromStart(){      
    var oldHead=this.head;                  //shift
   if(this.length===0){
     return false;
   }
   else if(this.length===1){
     this.head=null;
     this.tail=null;
     this.length--;
     return true;
   }
   else{
     var next = oldHead.next;
     this.head=next;
     this.head.prev=null;
     oldHead=null;
     this.length--;
     return true;
   }
  }

  pushAtStart(val){                         //unshift
  var newNode = new node(val);
  if(this.length===0){
    this.head=newNode;
    this.tail=newNode;
    this.length++;
  }
  else{
      this.head.prev=newNode;
      newNode.next=this.head;
      this.head=newNode;
      this.length++;
  }
  }
  get(position){
    var mid= Math.floor(this.length/2);
    console.log(mid);
    var current=this.head;
    var end=this.tail;
    if(position<0||position>=this.length){
      return null;
    }
    else if(position<=mid){
      console.log("start");
      var i=0;
      while(i!=position){
           i++;
           current=current.next;
      }
      return current;
    }
    else{
      console.log("end");
      var i=0;
      var fromEnd= (this.length-1)-position;
      while(i<fromEnd){
        i++;
        end=end.prev;
      }
      return end;
    }
  }

  set(val,position){

    var foundNode=this.get(position);

    // if(newNode){
    //   var newNode= new node(val);
    //   var prevNode= oldNode.prev;
    //   var nextNode= oldNode.next;
    //   prevNode.next=newNode;
    //   newNode.prev=prevNode;
    //   newNode.next=nextNode;
    //   nextNode.prev=newNode;
    //   return true;
    // }

    // else{
    //   return false;
    // }
   
    if(foundNode!==null){
      oldNode.val=val;
      return true;
    }
    else{
      return false;
    }
  }

  insert(val,position){
    
    if(position<0||position>this.length){
      return null;
    }
   else if(position===0){
       return this.pushAtStart(val);
    }
    else if(position===this.length){
      return this.pushToEnd(val);
    }
    else{
      var newNode= new node(val);
      var foundNode = this.get(position);
      var prevNode= foundNode.prev;


      prevNode.next=newNode;
      newNode.prev=prevNode;
      newNode.next=foundNode;
      foundNode.prev=newNode;
      this.length++;
      return this;
    }
    
  }


  remove(position){
    if(position<0||position>this.length){
      return null;
    }
    else if(position===0){
      return this.popFromStart();
    }
    else if(position===this.length){
      return this.popFromEnd();
    }
    else{
      var foundNode= this.get(position);

      var prevNode= foundNode.prev;
      var nextNode= foundNode.next;
      prevNode.next=nextNode;
      nextNode.prev=prevNode;
      this.length--;
      return this;
    }
  }

  reverse(){
    var start= this.head;
    var end= this.tail;
    var current=this.head;

    while(current!==null){
      var next=current.next;
      var prev=current.prev;
      current.prev=next;
      current.next=prev;
      current=next;
    }

    this.head=end;
    this.tail=start;

    return this;
    
  }
}



var list= new DoublyLinkedList();