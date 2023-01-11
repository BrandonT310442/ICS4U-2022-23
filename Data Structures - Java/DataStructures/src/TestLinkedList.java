public class TestLinkedList {
    public static void main(String[] args) {
        // IntLinkedList list = new IntLinkedList();
        // list.add(5);
        // list.add(1, 2);
        testAddNodes();
        testRemoveNode();
    }

    private static void testRemoveNode() {
        IntLinkedList list = new IntLinkedList();
        Integer temp = list.remove(6);
        System.out.println(temp);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);
list.remove(3);
list.remove(1);
list.remove(5);
System.out.println(list);


    }

    private static void testAddNodes() {
        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list);
        list.addFront(4);
        list.addFront(5);
        System.out.println(list);

     


    }

    
}
