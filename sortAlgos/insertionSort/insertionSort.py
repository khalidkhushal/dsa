def insertionSort(arr, n):
    for i in range(1,n):
        mini = arr[i]
        j = i-1
        while (j<n and j>=0 and arr[j]>mini):
            arr[j+1]=arr[j]
            j=j-1
        arr[j+1] = mini
    return arr


array = [5,3,7,2,9,0]
sortedArray = insertionSort(array, len(array))
print(sortedArray)