public class TestIntBST {
    public static void main(String[] args) {

        int testPassed = 0;
        int testFailed = 0;
        if (!addTest()) {
           System.out.println("Test Failed: addTest");
           testFailed++;
        } else {
           testPassed++;
        }
        if (!findTest()) {
            System.out.println("Test Failed: findTest");
            testFailed++;
         } else {
            testPassed++;
         }
  
         if (!preOrderTraversalTest()){
            System.out.println("Test Failed: preOrderTraversalTest");
            testFailed++;
         }else{
            testPassed++;
         }

         
         if (!postOrderPrintTraversalTest()){
            System.out.println("Test Failed: postOrderPrintTraversalTest");
            testFailed++;
         }else{
            testPassed++;
         }

         if (!inOrderPrintTraversalTest()){
            System.out.println("Test Failed: inOrderPrintTraversalTest");
            testFailed++;
         }else{
            testPassed++;
         }

         if (!removeTest()){
            System.out.println("Test Failed: removeTest");
            testFailed++;
         }else{
            testPassed++;
         }

         

        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
         
        
    }


    private static boolean removeTest() {
      IntBST bst = prepareList();
      bst.remove(11);
     if (!(bst.inOrderPrintTraversal().equals("1 3 6 7 8 9 13 ")))
     return false;
     bst.remove(1);
     if (!(bst.inOrderPrintTraversal().equals("3 6 7 8 9 13 ")))
     return false;
     bst.remove(13);
     if (!(bst.inOrderPrintTraversal().equals("3 6 7 8 9 ")))
     return false;

     return true;
      
   }


   private static boolean preOrderTraversalTest() {
        return prepareList().preOrderPrintTraversal().equals("6 3 1 8 7 13 9 11 ");
   }

   private static boolean postOrderPrintTraversalTest() {
    return prepareList().postOrderPrintTraversal().equals("1 3 7 11 9 13 8 6 ");
}

private static boolean inOrderPrintTraversalTest() {
    return prepareList().inOrderPrintTraversal().equals("1 3 6 7 8 9 11 13 ");
}


    private static boolean findTest() {
        IntBST bst = prepareList();
        if (bst.find(6).getValue() !=6)
        return false;
        if (bst.find(3).getValue() !=3)
        return false;
        if (bst.find(15) !=null)
        return false;
        if (bst.find(11).getValue() !=11)
    return false;
        return true;
    }


    private static IntBST prepareList() {
        IntBST bst = new IntBST();
  bst.add(6);
  bst.add(8);
  bst.add(3);
  bst.add(1);
  bst.add(13);
  bst.add(9);
  bst.add(7);
  bst.add(11);
  return bst;

    }

    private static boolean addTest() {

       IntBST bst = new IntBST();;
      IntBSTNode add1 = bst.add(6);
    
      IntBSTNode add2 = bst.add(8);

        if (add1.getRightChild() != add2)
        return false;

        IntBSTNode add3 = bst.add(3);
        if (add1.getLeftChild() !=add3 )
        return false;

       IntBSTNode add4 = bst.add(1);

       if (add3.getLeftChild() != add4)
       return false;

     return true;  
    }



}
