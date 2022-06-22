class FirstUnique {
    LinkedHashSet<Integer> queue;
    HashSet<Integer> hash;

    public FirstUnique(int[] nums) {
        queue = new LinkedHashSet<>();
        hash = new HashSet<>();
        for(int item : nums){
            this.add(item);
        }
    }
   
    public int showFirstUnique() {
        if(queue.isEmpty()) {
            return -1;
        }

        return queue.iterator().next();
    }
   
    public void add(int item) {
        if(!hash.contains(item)){          
            if(queue.contains(item)){
                queue.remove(item);
                hash.add(item);
            }else{
                queue.add(item);
            }
        }
    }
}
 
/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */