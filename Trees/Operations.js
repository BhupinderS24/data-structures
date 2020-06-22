class node{
  constructor (val){
    this.value=val;
    this.left=null;
    this.right=null;
  }
}


class BinarySearchTree {
  constructor(){
    this.root =null;
  }
  insert(val){
    var newNode= new node(val);
    var current=this.root;
    if(!this.root){
      this.root=newNode;
      return this.root;
    }
  
      console.log("inside else")
      var check=true;
      while(true){  
        if(val===current.value){
          break;
        }
        if(val>current.value){
          if(!current.right){
            current.right=newNode;
            break;
          }
         
            current=current.right;  
  
        }
           
        
        else if(val<current.value){
          console.log(current.value);
          if(!current.left){
            current.left=newNode;
            break;
          }
         
            current=current.left;
          
        }
      }
      console.log(current);
    
    return this.root;
}

find(val){
  if(!this.root){
    return null;
  }
  var current=this.root;
  while(current){
    if(val===current.value){
      return "found";
    }
    else if(val<current.value){
     
        current=current.left;
      
    }
    else if(val>current.value){
      
         current=current.right;
      
    }
  }
  return "not found";
}

BreadthFirstSearch(){
  var que=[];
  var finalArr=[];
  que.push(this.root);
  while(que.length!==0){
     var tempnode = que.shift();
     finalArr.push(tempnode.value);   
      if(tempnode.left){
        que.push(tempnode.left);
      }
      if(tempnode.right){
        que.push(tempnode.right);
      }
  }
 return finalArr;
}

DFSPreOrder(){

  var finalArr=[];
  var current=this.root;
  traverse(current);
  console.log(finalArr);
  function traverse(newNode){

    finalArr.push(newNode.value);
    if(newNode.left){
      traverse(newNode.left);
    }
    if(newNode.right){
      traverse(newNode.right);
    }

  }
}

DFSPostOrder(){
  var finalArr=[];
  var current=this.root;
  traverse(current);
  console.log(finalArr);
  function traverse(newNode){
    if(newNode.left){
      traverse(newNode.left);
    }
    if(newNode.right){
      traverse(newNode.right);
    }
    finalArr.push(newNode.value);
  }
}
DFSInOrder(){
  var finalArr=[];
  var current=this.root;
  traverse(current);
  console.log(finalArr);
  function traverse(newNode){
    if(newNode.left){
      traverse(newNode.left);
    }
    finalArr.push(newNode.value);
    if(newNode.right){
      traverse(newNode.right);
    }
  }
}

maxHeight(current){
  console.log(current);
  let left ;
  let right;
if(current===null){
  return -1 
}

left=this.maxHeight(current.left);
right=this.maxHeight(current.right);
return Math.max(left,right)+1;
}


isSameTree(p,q){
  console.log(p);
  console.log(q);
   if (!p && !q) {
       return true;
   }
   if (!p || !q || p.val !== q.val) {
       return false;
   }
   return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
};

binaryTreePaths() {
  let finalArr=[];
  function explore(current,tempArr){
      if(!current){
        return;
      }
      if(!current.left&&!current.right){
          tempArr.push(current.value);
          finalArr.push(tempArr);
          return;
      }
      // if(!current.left||!current.right){
      //     tempArr.push(current.value);
      //     return;
      // }
      
      tempArr.push(current.value);
      explore(current.left,tempArr.slice());
      explore(current.right,tempArr.slice()); 
      return;
  }
  explore(this.root,[]);
  console.log(finalArr);
  
};

  
} 


var tree= new BinarySearchTree();
var tree2=new BinarySearchTree();
var newNode= new node();

function sortedArrayToBST(nums,start=0,end=nums.length-1){
  if(end-start<0){
    return null;
}
  let mid=Math.floor(nums.length/2);
 let val=nums[mid];
 const node={val:val,left:null,right:null};

if(end-start===0){
    return node;
}

 node.left=sortedArrayToBST(nums.slice(0,mid));
 node.right=sortedArrayToBST(nums.slice(mid+1,nums.length));
 return node;
}

