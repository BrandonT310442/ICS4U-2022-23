public class IntBST {
    private IntBSTNode root;
    public IntBST(){
        this.root = null;
    }

    public class Global {
        public static String res = "";
        public static String res2 = "";
        public static String res3 = "";
    }

    public IntBSTNode add(Integer val){
        if (root == null){
        root = new IntBSTNode(val);
        }

        return addRescursive(root, val);
    }

    public IntBSTNode find(Integer val){
        return findRecursive(root, val);
    }

    public String preOrderPrintTraversal(){
        Global.res = "";
        return preOrderPrintTraversal(root);
    }

    public String postOrderPrintTraversal(){
        Global.res2 = "";
        return postOrderPrintTraversal(root);
    }
    public String inOrderPrintTraversal(){
        Global.res3 = "";
        return inOrderPrintTraversal(root);
    }

    private String preOrderPrintTraversal(IntBSTNode root){
     Global.res = Global.res+root.getValue()+" ";
        if (root.hasLeftChild()){
            preOrderPrintTraversal(root.getLeftChild());
        }

        if (root.hasRightChild()){
            preOrderPrintTraversal(root.getRightChild());

        }

        return Global.res;
        
    }

    private String postOrderPrintTraversal(IntBSTNode root){
        if (root.hasLeftChild()){
            postOrderPrintTraversal(root.getLeftChild());
        }

        if (root.hasRightChild()){
            postOrderPrintTraversal(root.getRightChild());

        }
        Global.res2 = Global.res2 + root.getValue()+" ";

        return Global.res2;
    }

    private String inOrderPrintTraversal(IntBSTNode root){

        if (root.hasLeftChild()){
            inOrderPrintTraversal(root.getLeftChild());
        }
        Global.res3 = Global.res3 + root.getValue()+" ";


        if (root.hasRightChild()){
            inOrderPrintTraversal(root.getRightChild());

        }

        return Global.res3;
        
    }

    private IntBSTNode findRecursive(IntBSTNode root, Integer val) {
        if (root.getValue() == val)
           return root;
        else if (root.hasLeftChild() && root.getValue() > val)
           return findRecursive(root.getLeftChild(), val);
        else if (root.hasRightChild() && root.getValue() < val)
           return findRecursive(root.getRightChild(), val);
        else
           return null;
     }

     private IntBSTNode findLargest(IntBSTNode root){
        return findLargestRecursive();
     }

    private IntBSTNode findLargestRecursive() {
        if (root.getRightChild() != null && root.getRightChild().getRightChild()!= null){
            return findLargest(root.getRightChild());
        }else if (root.getRightChild() != null){
            return root.getRightChild();
        }   
        return root;
        
    }

    public void remove (Integer val){
        root = removeRecursive(root, val);
    }

    

    private IntBSTNode removeRecursive(IntBSTNode root, Integer val) {
        if (root == null)
        return root;

     if (val < root.getValue()) {
        root.setLeftChild(removeRecursive(root.getLeftChild(), val));
     } else if (val > root.getValue()) {
        root.setRightChild(removeRecursive(root.getRightChild(), val));
     } else {
        if (root.getLeftChild() == null) {
           return root.getRightChild();
        } else if (root.getRightChild() == null) {
           return root.getLeftChild();
        } else {
           Integer biggest = findSmallest(root.getRightChild());
           root.setValue(biggest);
           root.setRightChild(removeRecursive(root.getRightChild(), root.getValue()));
        }
     }

     return root;
    }

    private Integer findSmallest(IntBSTNode root) {
        Integer min = root.getValue();
  
        while (root.getLeftChild() != null) {
           min = root.getLeftChild().getValue();
           root = root.getLeftChild();
        }
  
        return min;
     }
    /**
     * 
     * @param root root of the subtree we are adding val to
     * @param val the integer we are adding to the bst no duplicates
     * @return a reference to the IntBSTNode we inserted
     */
    private IntBSTNode addRescursive(IntBSTNode root, Integer val) {
        if (val < root.getValue()){
            if (root.hasLeftChild()){
                return addRescursive(root.getLeftChild(), val);
            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftChild(child);
                return child;
            }
        }else if (val > root.getValue()){
            if (root.hasRightChild()){
                return addRescursive(root.getRightChild(), val);
            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setRightChild(child);
                return child;
            }
        }else{
                return root;
            }
        }


    }


