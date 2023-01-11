import java.util.Arrays;

public class intArrayStack {
    private int manyItems = 0;
    private int[] list = new int[1];
    public void push(Integer data){
        if (manyItems == 0){
        list[0] = data;
        manyItems++;
        }else if (manyItems >= list.length){
        list = Arrays.copyOf(list, list.length + 1);
        list[list.length - 1] = data; 
        manyItems++;
        }

        }
    

    public void pop(){
        if (manyItems == 0){
        list = Arrays.copyOf(list, list.length -1);
        }else{
            list = Arrays.copyOf(list, list.length -1);
            manyItems--;

        }
        }
    

    public int[] getStack(){
      return list;
    }

    public int getSize(){
        return manyItems;
    }

    public int peak(){
        return list[list.length-1];
    }

    public int search(Integer data){
        int count = 0;
        for (int i = list.length-1; i >= 0; i--) {
            if (list[i] == data){
                return count;
            }
            count++;
        }

        return -1;
    }

    public boolean empty(){
        return manyItems ==0;
    }



}