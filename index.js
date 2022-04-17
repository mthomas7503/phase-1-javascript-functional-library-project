function myEach(col, cb) {
    if (Array.isArray(col)) {
        for (const ele of col) {
            cb(ele)
        }
    }
    
    else {
       let newArray = Object.values(col)
       for (const ele of newArray) {
           cb(ele)
       } 
        }
        return col
    }