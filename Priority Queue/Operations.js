class node{
  constructor(val,priority){
    this.val=val;
    this.priority=priority;
  }
}

class PriorityQueue{

  constructor(){
    this.values=[];
  }

  enqueque(val,priority){
    var newNode= new node(val,priority);
    if(this.values.length===0){
      this.values.push(newNode);
    }
    else{
      this.values.push(newNode);
      let newVal=this.values.length-1; 
      let parentIndex = Math.floor((newVal-1)/2);
      console.log(parentIndex);
      while(newVal>0){  
        if(this.values[newVal].priority>=this.values[parentIndex].priority)   {
          break;
        }      //BubbleUp
        [this.values[parentIndex],this.values[newVal]]=[this.values[newVal],this.values[parentIndex]];
        newVal=parentIndex;
        parentIndex=Math.floor((newVal-1)/2);
        console.log(parentIndex);
      }     
    }
    return this.values; 
  }


  dequeue(){

    if(this.values.length===1){
      this.values.pop();
    }
 
    if(this.values.length===0){
      return null;
    }
     let end = this.values.pop();
     this.values[0]=end;
  
     let newVal=0;
     //let smallerChild;
     let childIndex;
    
     while(true){

      if((2*newVal)+2<this.values.length){
        if(this.values[2*(newVal)+1].priority<=this.values[2*(newVal)+2].priority){
          childIndex = 2*(newVal)+1;
        }
        else{
          childIndex = 2*(newVal)+2;
        }
       }
       else if((2*newVal)+1<this.values.length){
         //smallerChild=this.values[2*(newVal)+1];
         childIndex= 2*(newVal)+1;
       }

       else{
         break;
       }

       if(this.values[newVal].priority>this.values[childIndex].priority){
        [this.values[newVal],this.values[childIndex]]=[this.values[childIndex],this.values[newVal]];
       }
       newVal=childIndex;

     }
  }
 }

var priority = new PriorityQueue();