var Arr = [3, 5, 8, 5, 99, 1];


function Mergesort(arr){
    if(arr.length<=1)
    {
        return arr;
    }
    var len = Math.floor(arr.length/2);
    var Arr1 = arr.slice(0,len);  //[3,5,8]     [3]           ||    [5]         || 
    var Arr2 = arr.slice(len);   // [5,99,1]    [5,8]         ||   [99,1]       || 
    return Merge(Mergesort(Arr1),Mergesort(Arr2)); 
}
function Merge(Arr1,Arr2){
    var result = [];
    var i = 0,j=0;
    while(i<Arr1.length && j<Arr2.length)
    {
        if(Arr1[i]<Arr2[j])
        {
            result.push(Arr1[i]);
            i++;
        }   
        else{
            result.push(Arr2[j]);
            j++;
        }
    }

    while(i<Arr1.length)
    {
        result.push(Arr1[i]);
        i++;
    }
    while(j<Arr2.length)
    {
        result.push(Arr2[j]);
        j++;
    }
    return result;
}


console.log(Mergesort(Arr));



/*
            [3, 5, 8, 5, 99, 1]
            [3,5,8]        [5,99,1]
          [3]  [5,8]     [5]    [99,1]
          [3] [5] [8]    [5]   [99] [1]
*/