
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
    private boolean empty() {
        return head.getLink() == null;
    }
}
