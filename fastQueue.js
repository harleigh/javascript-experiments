/* Overview: Queue data structure with a twist: Rather than resize the queue for each
        dequeue operation, the queue only re-sizes when half of it's entries have
        been dequeued. That is, a little logic to reduce the number of times the array
        is reshaped (as growing/shrinking the array can be expensive).
   Implementation: The index of the front of the queue is maintained, and once the
        index of the front of the queue is at half or more of the size of the queue,
        the queue is re-shaped by removing the entries before the front of the index.
        A private method performs the maitenince of the queue, which involves updating
        the index that represents the front of the queue (ie. the next inline), and
        checks whether the condition for shaving (shrinking) the queue down is met 
 */
class Queue {
    #queue; #frontIdx   //private fields
    constructor() { this.#queue = []; this.#frontIdx = 0 }
    get view() { return this.#queue.slice(this.#frontIdx).join(" ")} //show only the non-dequeued entries
    #queueMatinence(){  //private method; called only after successful dequeue
        this.#frontIdx++
        const timeToShave = (2*this.#frontIdx >= this.#queue.length)
        if(timeToShave) {
             this.#queue = this.#queue.slice(this.#frontIdx)
             this.#frontIdx = 0
        }
    }//end matinence
    enqueue(v) { this.#queue.push(v); }
    get length() { return (this.#queue.length - this.#frontIdx) }
    dequeue()  {
        if( this.#queue.length<=0 ){ return undefined }         //return undefined if empty
        const frontObj = this.#queue[this.#frontIdx];   //get the element off front of queue
        this.#queueMatinence();                         
        return frontObj
    }//end dequeue
}//end Queue class

q = new Queue();
for( let i=0; i<20; i++){
    q.enqueue(i)
}

for( let i=0; i<15; i++){
    console.log("Before: ", q.view)
    let v = q.dequeue()
    console.log("      Removed: ", v, "Length ", q.length)
    console.log("After: ", q.view)
    console.log(" ")
}
console.log(q.view)