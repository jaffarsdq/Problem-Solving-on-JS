// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(Merge (nums1,m,nums2,n));

function Merge (nums1,m,nums2,n){
    let result = Array(m+n).fill(0);
    console.log(result);
    let i=0,j=0,k=0;
    while( i<m && j<n){
        if(nums1[i] < nums2[j]){
            result[k] = nums1[i];
            k++;
            i++;
        }else {
            result[k] = nums2[j];
            k++;
            j++;
        }
    }
    while(j < n){
        result[k] = nums2[j];
        k++;
        j++;
    }
    while(i < m){
        result[k] = nums1[i];
        k++;
        i++;
    }
    for(let i=0; i<nums1.length; i++){
        nums1[i] = result[i];
    }
    return nums1;
}