
public class IntLinkedListStack {
    private IntNode head;
    private int manyItems = 0;

    public IntLinkedListStack() {
        this.head = null;

    }

    
    public boolean push(Integer data){
        head = new IntNode(data, head);
         manyItems++;
           return true;
       }

       
       public String toString(){
        String result = "{";
        IntNode curr = head;
        while(curr != null){
            result+=curr.getData() + ", ";
            curr = curr.getLink();
        }

        if (!empty()){
            result = result.substring(0,result.length()-2);
        }
        result+="}";

        return result;
    }

    public int peek(){
        return head.getData();
     }

     public Integer pop(){
        if (head == null){
            return null;
        }else{
            Integer temp = head.getData();
            head = head.getLink();
            manyItems--;
            return temp;
        }
    }

    public Integer search(int n){
        int count = 0;
        IntNode curr = head;
        while (curr.getData() != n){
            if (curr.getLink()== null){
                return-1;
            }else{
                curr = curr.getLink();
                count++;
            }
        }
        return count;
    }
    public boolean empty() {
        if (head == null){
            return true;
        }
        return false;
    }

    public int size(){
        return manyItems;
    }
    public Integer get(int index) {
        if (index < 0)
           throw new IndexOutOfBoundsException("Invalid index " + index + " must be greater than 0");
    
        if (head == null)
           throw new IllegalStateException("Can't get an element from an empty list.");
        else if (index > size()) {
           throw new IndexOutOfBoundsException("Invalid index " + index + " max index is " + (size() - 1));
        } else {
           IntNode curr = head;
           for (int i = 0; i < index; i++) {
              curr = curr.getLink();
           }
    
           return curr.getData();
        }
     }
}
