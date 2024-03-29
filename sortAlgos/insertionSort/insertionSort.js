function insertionSort(arr, n){
    let i,j
    for(i=1;i<n;i++){
        let min = arr[i]
        j=i-1
        while(j<n &&  arr[j]>min){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = min
    }
    return arr
}

const arr = [2,3,1,5,3,0]
const sortedArray = insertionSort(arr, arr.length)
console.log({sortedArray})