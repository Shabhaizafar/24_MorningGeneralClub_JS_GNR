const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    //json object 
    // var obj = {
    //     data : "Promise Successfully Execute !!",
    //     status : 200
    // };
    var obj = {};
    // 
    // data : ___Zafar___
    // status : __200___

    var data2 = {
        data : "Somthing wrong !!"
    };
    
    var mypromise = new Promise(function(success,reject){
        if(obj.status == 200){
            success(obj.data);
        }else{
            reject(data2.data);
        }
    });


    mypromise.then((output)=>{
        console.log(output);
    },(rejection)=>{
        console.log(rejection);
    });
});

/*
1) btn : click counter 
    counter = 0 

    counter >=10  success

    reject()


2) btn onclick 

    obj1 : 
        data : user prompt
        status : user 

*/ 