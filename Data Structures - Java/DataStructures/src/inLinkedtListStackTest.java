public class inLinkedtListStackTest {
 public static void main(String[] args) {
pop();
    search();
 }
 private static void search() {
    IntLinkedListStack list = new IntLinkedListStack();
    list.push(8);
    list.push(10);
    list.push(5);
   System.out.println(list.search(8));
   System.out.println(list);


}
private static void pop() {
    IntLinkedListStack list = new IntLinkedListStack();
    list.push(8);
    list.push(10);
    list.push(5);
    list.pop();
    System.out.println(list);
}
private static void peek() {
    IntLinkedListStack list = new IntLinkedListStack();
    list.push(8);
    list.push(10);
    list.push(5);
    System.out.println(list.peek());
    System.out.println(list);
}


private static void push() {
    IntLinkedListStack list = new IntLinkedListStack();
    list.push(8);
    list.push(10);
    list.push(5);

    System.out.println(list);
}   
}
