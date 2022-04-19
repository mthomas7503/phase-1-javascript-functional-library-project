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

    function myMap(col, cb) {
        let newArr = []
        if (Array.isArray(col)) {
            for (const ele of col) {
                newArr.push(cb(ele))
            }
        }
        else {
            let arr = Object.values(col)
            for (const ele of arr) {
                newArr.push(cb(ele))
            }
        }
        return newArr
    }

    function myReduce(col, cb, acc) {
        let value
        if (Array.isArray(col)) {
            if (acc) {
                for (let i = 0; i<col.length; i++) {
                    let accl = acc
                 value += cb(accl, col[i])}
            }
            else {for (let i=0; i < col.length; i++){
                value = cb(col[i]) + cb(col[i + 1])
            }}
        }
        else{
            arr = Object.values(col)
            for(let i = 0; i < col.length; i++) {
                accl = cb(col[i]) + cb(col[i +1])
            }
        }
        return value
    }

    function myFind(col, pred) {
        if (Array.isArray(col)) {
            for (const ele of col) {
                if (pred(ele)) {return ele}
            }
        }

        else {
            let newArr = Object.values(col);
            for (const ele of newArr) {
                if (pred(ele)) {return ele}
            }
        }
        return undefined
    }

    function myFilter(col, pred) {
        let arr = []
        if (Array.isArray(col)) {
            for (const ele of col) {
                if (pred(ele)) {arr.push(ele)}
            }
        }

        else {
            let newArr = Object.values(col);
            for (const ele of newArr) {
                if (pred(ele)) {arr.push(ele)}
            }
        }
        return arr
    }

    function mySize(col){
        if (Array.isArray(col)) {
            return col.length
        }
        else {let arr = Object.keys(col);
        return arr.length}
    }

    function myFirst(arr, n) {
        if (n) {
            return arr.slice(0, n)
        }
        else {return arr[0]}
    }

    function myLast(col, n){
        if (n) {
            return col.slice(col.length - n)
        }
        else {return col[col.length - 1]}
    }

    function myKeys(obj) {
        let arr = []
        for (const prop in obj) {
            arr.push(prop)
        }
        return arr
    }

    function myValues(obj) {
        let arr = []
        for (const prop in obj) {
            arr.push(obj[prop])
        }
        return arr
    }