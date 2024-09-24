function TowerOfHanoi(n,main_origin,target,temp){
    if(n===0){
        return;
    }
    TowerOfHanoi(n-1,main_origin,temp,target);
    console.log(`Number of ${n} || move to TowerNo : ${target} from Tower No :  ${main_origin}`);
    TowerOfHanoi(n-1,temp,target,main_origin);
}
var num= 3;
TowerOfHanoi(num,1,2,3); 