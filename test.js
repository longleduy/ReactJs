var chuoi = "text1-text2-text3-text4-text5-text6";
var arr=[];
var arr2=[];
var count=0;
for(i=0;i<chuoi.length;i++){
    var index = chuoi.substring(i,i+1);
    if(index == '-'){
        count ++;
        arr.push(i);
        if(count == 1){
            var rs = chuoi.substring(0,arr[count-1]);
            arr2.push(rs);
        }
        else{
            var rs = chuoi.substring(arr[count-2]+1,arr[count-1]);
            arr2.push(rs);
        }
        
    }
}
console.log(arr2);


