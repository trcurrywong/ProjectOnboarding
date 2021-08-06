function findLCS(X, Y){
    let point = 0;
    let total = 0;
    for(let i = 0; i < X.length(); i++){
        if(X.charAt(i) === Y.charAt(i)){
            point++;
        }else{
            if(point > total){
                total = point;
            }
            point = 0;
        }
    }
    return total;
}