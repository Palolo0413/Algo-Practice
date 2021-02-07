const merge = function(intervals) {
    let res = [];
    intervals.sort((a,b)=>a[0]-b[0])
    for (let interv of intervals) {
      //beginning, so we add the first, or we don't need to merge
        if (res.length === 0 || res[res.length-1][1] < interv[0]) {
            res.push(interv)
        } else { //we need to merge
            let topTime = res[res.length-1][1]
            res[res.length-1][1] = Math.max(interv[1], topTime)
        }
    }
    
    return res
};
