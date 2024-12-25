class LRUCache{
   constructor(capacity){
      this.capacity=capacity;
      this.cache=new Map();
   }

   get(key){
      if(!this.cache.has(key))return -1;

      const value=this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key,value);

      return value;
   }

   put(key,value){
      if(this.cache.has(key)){
          this.cache.delete(key);
      }else if(this.cache.size==this.capacity){
          this.cache.delete(this.cache.keys().next().value); 
      }

      this.cache.set(key,value); 
   }
}

// Example usage:
const lruCache=new LRUCache(2);
lruCache.put(1,'one');
lruCache.put(2,'two');
console.log(lruCache.get(1)); // Output:'one'
lruCache.put(3,'three'); 
console.log(lruCache.get(2)); // Output:-1
