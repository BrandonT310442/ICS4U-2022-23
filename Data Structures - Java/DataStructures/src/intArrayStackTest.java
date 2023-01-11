import java.util.Arrays;

public class intArrayStackTest {
    public static void main(String[] args) {
       
       search();
    }

    private static void search() {
        intArrayStack arr = new intArrayStack();
        arr.push(5);
        arr.push(7);
        arr.push(8);
        arr.push(9);
        System.out.println(Arrays.toString(arr.getStack()));

        System.out.println(arr.search(5));
       
    }

    private static void peak() {
        intArrayStack arr = new intArrayStack();
        arr.push(5);
        arr.push(7);
        arr.push(8);
        arr.push(9);

        arr.pop();
       
        System.out.print(Arrays.toString(arr.getStack()));
       System.out.println(arr.peak());
        
    }

    private static void pop() {
        intArrayStack arr = new intArrayStack();
        arr.push(5);
        arr.push(7);
        arr.push(8);
        arr.push(9);

        arr.pop();
        System.out.print(Arrays.toString(arr.getStack()));
        System.out.println(arr.getSize());
    }

    private static void add() {
        intArrayStack arr = new intArrayStack();
        arr.push(5);
        arr.push(7);
        arr.push(8);
        arr.push(9);

        System.out.print(Arrays.toString(arr.getStack()));
        System.out.println(arr.getSize());
    }
}
