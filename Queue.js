// function Queue() {
//     collection = [];

//     this.print = function(){ 
//         console.log(collection);
//     };
    
//     this.enqueue = function(element){ 
//         collection.push(element);
//     }

//     this.dequeue = function () {
//         return collection.shift();
//     }

//     this.front = function () {
//         return collection[0];
//     }

//     this.rear = function() {
//         return collection[collection.length - 1];
//     }

//     this.size = function () {
//         return collection.length;
//     }

//     this.isEmpty = function () {
//         return (collection.length === 0);
//     }
// }

// var q = new Queue();
// q.enqueue('V')
// q.enqueue('A')
// q.enqueue('M')
// q.enqueue('S')
// q.enqueue('H')
// q.enqueue('I')
// q.print()
// console.log(q.size());
// console.log(q.front());
// console.log(q.rear());
// q.dequeue()
// q.print()
// console.log(q.size());
// console.log(q.front());
// console.log(q.rear());

function PriorityQueue() {
    var colllection = [];
    
    this.printCollection = function(element) {
        (console.log(colllection));
    }
    
    this.enqueue = function(element) {
        if(this.isEmpty()){
            colllection.push(element);
        } else {
            var added = false;
            for(var i = 0; i < colllection.length; i++ ) {
                if(element[1] < colllection[i][1]) {
                    colllection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                colllection.push(element);
            }
        }
    }

    this.dequeue = function() {
        var value = colllection.shift();
        return value[0];
    }

    this.front = function () {
        return colllection[0];
    }

    this.rear = function () {
        return colllection[colllection.length - 1]
    }

    this.size = function () {
        return colllection.length;
    }

    this.isEmpty = function () { 
        return (colllection.length === 0);
    }
}

var pq = new PriorityQueue();
pq.enqueue(['vamshi', 1]);
pq.enqueue(['krishna', 2]);
pq.enqueue(['jay', 2]);
pq.enqueue(['sai', 4]);
pq.enqueue(['vijaya', 3]);
pq.printCollection();
pq.dequeue();
// console.log(pq.front());
// console.log(pq.rear());
pq.printCollection();