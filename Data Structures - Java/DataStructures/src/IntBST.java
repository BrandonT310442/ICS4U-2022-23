public class IntBST {
    private IntBSTNode root;

    public IntBST(){
        this.root = null;
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

    public void preOrderPrintTraversal(){
        preOrderPrintTraversal(root);
    }

    public void postOrderPrintTraversal(){
        postOrderPrintTraversal(root);
    }
    public void inOrderPrintTraversal(){
        inOrderPrintTraversal(root);
    }

    private void preOrderPrintTraversal(IntBSTNode root){
        System.out.println(root.getValue());
        if (root.hasLeftChild()){
            preOrderPrintTraversal(root.getLeftChild());
        }

        if (root.hasRightChild()){
            preOrderPrintTraversal(root.getRightChild());

        }
        
    }

    private void postOrderPrintTraversal(IntBSTNode root){
        if (root.hasLeftChild()){
            postOrderPrintTraversal(root.getLeftChild());
        }

        if (root.hasRightChild()){
            postOrderPrintTraversal(root.getRightChild());

        }
        System.out.println(root.getValue());

        
    }

    private void inOrderPrintTraversal(IntBSTNode root){

        if (root.hasLeftChild()){
            inOrderPrintTraversal(root.getLeftChild());
        }
        System.out.println(root.getValue());


        if (root.hasRightChild()){
            inOrderPrintTraversal(root.getRightChild());

        }
        
    }

    private IntBSTNode findRecursive(IntBSTNode root, Integer val) {
        if (root.getValue() == val){
            return root;
        }else if (val < root.getValue()){
            if (root.hasLeftChild()){
                addRescursive(root.getLeftChild(), val);
            }else{
               return null;
            }
        }else if (val > root.getValue()){
            if (root.hasRightChild()){
                addRescursive(root.getLeftChild(), val);
            }else{
               return null;
            }
        }
        return null;
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


