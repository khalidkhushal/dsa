function selectionSort(array) {
    const n = array.length
    let i,j,tmp
    for(i=0;i<n;i++){
        let min =i 
        for(j=i+1;j<n;j++){
            if(array[min]>array[j]){
                min=j
            }
        }
        tmp = array[i]
        array[i]=array[min]
        array[min] = tmp
    }
    return array
}

const array = [1,3,4,6,2,7,1,3]
const sortedArray = selectionSort(array)
console.log(sortedArray)