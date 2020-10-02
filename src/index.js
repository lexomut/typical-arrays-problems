
exports.min = function min (array) {
    if (!array ) return 0
    if (array.length==0 || !array ) return 0
    let result=array[0]
    for (let i of array){
        if(result>i) result=i
    }
    return result;
}

exports.max = function max (array) {
    if (!array ) return 0
    if (array.length==0 || !array ) return 0

    let result=array[0]
    for (let i of array){
        if(result<i) result=i
    }
    return result;
}

exports.avg = function avg (array) {
    if (!array ) return 0
    if (array.length==0 || !array ) return 0


    let result = array.reduce((sum,item)=>sum+item,0)/array.length
  return result;
}
