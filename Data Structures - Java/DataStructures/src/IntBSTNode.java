public class IntBSTNode {

    private IntBSTNode leftChild; 
    private IntBSTNode rightChild; 
    private int value;

    public IntBSTNode(Integer d){
        value = d;
    }

    public IntBSTNode(Integer d, IntBSTNode l, IntBSTNode r){
        value = d;
        leftChild = l;
        rightChild = r;
    }

    public boolean hasLeftChild(){
        return leftChild != null;
    }
    public boolean hasRightChild(){
        return rightChild != null;
    }


    public void setValue(Integer val){
        value = val;
    }

    public int getValue(){
       return value;
    }
    public void setLeftChild(IntBSTNode leftn){
        leftChild = leftn;
    }

    public void setRightChild(IntBSTNode rightn){
        rightChild = rightn; 
    }

    public IntBSTNode getLeftChild(){
        return leftChild;
    }

    public IntBSTNode getRightChild(){
        return rightChild;
    }

    
}
