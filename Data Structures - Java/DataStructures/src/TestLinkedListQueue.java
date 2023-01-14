public class TestLinkedListQueue {
    public static void main(String[] args) {

        int testPassed = 0;
       int testFailed = 0;
       if (!enqueueTest()) {
          System.out.println("Test Failed: enqueueTest");
          testFailed++;
       } else {
          testPassed++;
       }
 
       if (!dequeueTest()) {
        System.out.println("Test Failed: dequeueTest");
        testFailed++;
     } else {
        testPassed++;
     }

     if (!peekTest()) {
        System.out.println("Test Failed: peekTest");
        testFailed++;
     } else {
        testPassed++;
     }

     if (!clearTest()) {
        System.out.println("Test Failed: clearTest");
        testFailed++;
     } else {
        testPassed++;
     }

     if (!isEmpty()) {
        System.out.println("Test Failed: isEmptyTest");
        testFailed++;
     } else {
        testPassed++;
     }
 
       System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
    }
   
    private static IntLinkedListQueue prepList() {
        IntLinkedListQueue list = new IntLinkedListQueue();
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.enqueue(4);
        list.enqueue(5);
  
        return list;
     }
     private static boolean peekTest() {
        IntLinkedListQueue list = prepList();
        if (list.peek() != 1)
        return false;
        list.dequeue();
        if (list.peek() != 2)
        return false;
        list.dequeue();
        if (list.peek() != 3)
        return false;
        return true;
    }
    private static boolean dequeueTest() {
        IntLinkedListQueue list = prepList();
        list.dequeue();
        if (list.get(0) != 2 && list.size()!=4)
        return false;
        list.dequeue();
        if (list.get(0) != 3 && list.size()!=3)
        return false;
        list.dequeue();
        if (list.get(0) != 4 && list.size()!=2)
        return false;
        return true;
    }

    private static boolean enqueueTest() {
        IntLinkedListQueue list = prepList();
        list.enqueue(6);
        if (list.get(0) != 6 && list.size()!=6)
        return false;
        list.enqueue(7);
        if (list.get(0) != 7 && list.size()!=7)
        return false;
        return true;
    }

    private static boolean clearTest(){
        IntLinkedListQueue list = prepList();
        list.clear();
        if (list.size() != 0){
            return false;
        }
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.clear();
        if (list.size() != 0){
            return false;
        }
        return true;
    }

    private static boolean isEmpty(){
        IntLinkedListQueue list = prepList();
        list.clear();
        if (!list.isEmpty())
        return false;
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        if (list.isEmpty()){
            return false;
        }
        return true;
    }
}
