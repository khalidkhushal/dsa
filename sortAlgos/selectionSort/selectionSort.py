array = [1,2,4,3,6,5,1]

for i in range(len(array)):
    min_ind = i
    for j in range(i+1,len(array)):
        if (array[min_ind] > array[j]):
            min_ind = j
    array[i],array[min_ind] = array[min_ind],array[i]
print(array)