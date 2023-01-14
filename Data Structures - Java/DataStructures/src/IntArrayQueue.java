import java.util.Arrays;

public class IntArrayQueue {
    private int manyItems = 0;
    private int[] list = new int[1];
    
    public void enqueue(Integer data){
        if (manyItems == 0){
            list[0] = data;
            manyItems++;
            }else if (manyItems >= list.length){
            list = Arrays.copyOf(list, list.length + 1);
            list[list.length - 1] = data; 
            manyItems++;
            }
    }

    public void dequeue(){
        int[] temp = new int[list.length-1];
        int j = 0;
       
        for (int i = 1; i < list.length; i++) {
            temp[j] = list[i];
            j++;
        }

        list = temp;
        }

        public String toString(){
         
            String result = "";

            for (int i = 0; i < list.length; i++) {
                result = result + list[i] + " ";
            }
    
            return result;
        }

        public Integer get(int val){
            for (int i = 0; i < list.length; i++) {
                if (list[i] == val){
                    return i;
                }
            }

            return -1;
        }



        public Integer size(){
            return manyItems;
        }

        public Integer peek(){
            return list[0];
        }

        public void clear(){
            list = new int[1];
            manyItems = 0;
        }

        public boolean isEmpty(){
            return manyItems == 0;
        }


}
