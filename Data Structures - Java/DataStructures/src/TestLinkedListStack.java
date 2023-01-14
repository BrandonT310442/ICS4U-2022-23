public class TestLinkedListStack {
 public static void main(String[] args) {
    int testPassed = 0;
    int testFailed = 0;
    if (!pushTest()) {
       System.out.println("Test Failed: pushTest");
       testFailed++;
    } else {
       testPassed++;
    }
    if (!popTest()) {
      System.out.println("Test Failed: popTest");
      testFailed++;
   } else {
      testPassed++;
   }
   if (!searchTest()) {
      System.out.println("Test Failed: searchTest");
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
   if (!emptyTest()) {
      System.out.println("Test Failed: emptyTest");
      testFailed++;
   } else {
      testPassed++;
   }
   

    System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);

 }


private static IntLinkedListStack prepareLinkedListStack() {
    IntLinkedListStack list= new IntLinkedListStack();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    return list;
 }
 private static boolean searchTest() {
    IntLinkedListStack list = prepareLinkedListStack();

    if (list.search(5) != 0)
    return false;
   list.push(5);
   if (list.search(5) != 0)
   return false;
   if (list.search(3) != 3)
   return false;
   if (list.search(1) != 5)
   return false;
  return true;

}
private static boolean popTest() {
   IntLinkedListStack list = prepareLinkedListStack();
   list.pop();
   if (list.get(0) != 2 && list.size() != 4)
   return false;
   list.push(3);
   list.pop();
   if (list.get(0) != 2 && list.size() != 4)
   return false;
   list.pop();
   if (list.get(0) != 3 && list.size() != 3)
   return false;
   return true;
}
private static boolean peekTest() {
    IntLinkedListStack list = prepareLinkedListStack();
      if (list.peek() != 5)
      return false;
      list.pop();
      if (list.peek() !=4)
      return false;
      list.push(6);
      if (list.peek() !=6)
      return false;
      return true;
}


private static boolean pushTest() {
    IntLinkedListStack list = prepareLinkedListStack();
    list.push(8);
    if (list.get(0) != 8 && list.size() != 6)
    return false;
    list.push(10);
    if (list.get(0) != 10 && list.size() != 7)
    return false;
    list.push(5);
    if (list.get(0) != 5 && list.size() != 8)
    return false;
    return true;
}   


private static boolean emptyTest() {
   IntLinkedListStack list= prepareLinkedListStack();
   if (list.empty())
   return false;
    list= new IntLinkedListStack();
   if (!list.empty()){
       return false;
   }
   return true;
}
}
