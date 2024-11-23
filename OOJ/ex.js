function all(...Arr){
    var sum = 0;
    for (const iterator of Arr) {
        sum+=iterator;
    }
    console.log(sum);
};

all(1,2); //55