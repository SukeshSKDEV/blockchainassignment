function computeDash(number){
    let arr=[...number];
    let char=``;
    for(let i=0;i<arr.length;i++){

        if(Number(arr[i])%2===0 && Number(arr[i-1])%2===0){
        char+=`-`;
        }

    char+=arr[i];
    }

return char;
}

    console.log(computeDash('025468'));