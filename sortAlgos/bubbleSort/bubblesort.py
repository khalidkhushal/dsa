def bubblesort(arr,n):
    for i in range(n):
        swapped = False
        for j in range(n):
            if(j<n-1 and arr[j]>arr[j+1]):
                arr[j], arr[j+1] = arr[j+1],arr[j]
                swapped = True
        if(swapped is False):
            break
    return arr


array = [1,2,4,7,5,3,6]
sortedarr = bubblesort(array,len(array))
print(sortedarr)
                