function swap(arr,i,j){
    let tmp = arr[i]
    arr[i]=arr[j]
    arr[j]=tmp
    return arr
}

function bubbleSort(arr, n){
    let i,j
    for(i =0;i<n;i++){
        let swapped = false
        for(j=0;j<n;j++){
            if(arr[j]>arr[j+1]){
                arr = swap(arr,j,j+1)
                swapped = true
            }
        }
        if(swapped==false)
            break
    }

    return arr
}

const arr = [1,3,2,5,3,7,6,4]
const sorted = bubbleSort(arr,arr.length)
console.log(sorted)
