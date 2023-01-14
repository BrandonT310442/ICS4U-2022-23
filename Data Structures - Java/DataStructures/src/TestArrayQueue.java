public class TestArrayQueue {
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
   
    private static IntArrayQueue prepArrayQueue() {
        IntArrayQueue list = new IntArrayQueue();
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.enqueue(4);
        list.enqueue(5);
  
        return list;
     }
     private static boolean peekTest() {
        IntArrayQueue list = prepArrayQueue();
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
        IntArrayQueue list = prepArrayQueue();
        list.dequeue();
        if (list.get(2) != 0 && list.size()!=5)
        return false;
        list.dequeue();
        if (list.get(3) != 0 && list.size()!=4)
        return false;
        list.dequeue();
        if (list.get(4) != 0 && list.size()!=3)
        return false;
        return true;
    }

    private static boolean enqueueTest() {
        IntArrayQueue list = prepArrayQueue();
        list.enqueue(6);
        if (list.get(6) != 0 && list.size()!=6)
        return false;
        list.enqueue(7);
        if (list.get(7) != 0 && list.size()!=7)
        return false;
        return true;
    }

    private static boolean clearTest(){
        IntArrayQueue list = prepArrayQueue();
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
        IntArrayQueue list = prepArrayQueue();
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
