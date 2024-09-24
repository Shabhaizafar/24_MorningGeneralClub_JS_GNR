var Arr = [3, 5, 8, 5, 99, 1];
console.log("Main Array : ", Arr);

function Quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        var len = parseInt(arr.length / 2);
        var pivot = arr[len];
        var LeftArr = [];
        var RightArr = [];
        var NewArr = [];
        for (let i = 0; i < arr.length; i++) {
           if(i!==len)
            {
                if (pivot > arr[i]) {
                    LeftArr.push(arr[i]);
                }
                else {
                    RightArr.push(arr[i]);
                }
            }
        }
    }    
    return NewArr.concat([...Quicksort(LeftArr),pivot,...Quicksort(RightArr)]);
}

var sortedArr = Quicksort(Arr);
console.log("SortedArr :",sortedArr);