class MaxBinaryHeap{

  constructor(){
    this.values=[];
  }

  insert(val){
    if(this.values.length===0){
      this.values.push(val);
    }
    else{
      this.values.push(val);
      let newVal=this.values.length-1; 
      let parentIndex = Math.floor((newVal-1)/2);
      console.log(parentIndex);
      while(newVal>0){  
        if(this.values[newVal]<=this.values[parentIndex])  {
            break;
        }       //BubbleUp
        [this.values[parentIndex],this.values[newVal]]=[this.values[newVal],this.values[parentIndex]];
        newVal=parentIndex;
        console.log(newVal);
        parentIndex=Math.floor(Math.abs((newVal-1)/2));
        console.log(parentIndex);
      }     
    }
    return this.values; 
  }


  removeMax(){

    if(this.values.length===1){
      this.values.pop();
    }
 
    if(this.values.length===0){
      return null;
    }
     let end= this.values.pop();
     this.values[0]=end;
  
     let newVal=0;
     let greaterChild;
     let childIndex;
    
     while(true){

      if((2*newVal)+2<this.values.length){
        greaterChild= Math.max(this.values[2*(newVal)+1],this.values[2*(newVal)+2]);
        childIndex= this.values.indexOf(greaterChild);
       }
       else if((2*newVal)+1<this.values.length){
         greaterChild=this.values[2*(newVal)+1];
         childIndex= 2*(newVal)+1;
       }

       else{
         break;
       }

       if(this.values[newVal]<greaterChild){
        [this.values[newVal],this.values[childIndex]]=[this.values[childIndex],this.values[newVal]];
       }
       newVal=childIndex;

     }
  }
}

var maxBinaryHeap = new MaxBinaryHeap();