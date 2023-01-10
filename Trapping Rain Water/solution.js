var trap = function(height) {
    let start = 0; 
    let end = height.length-1;
    let water = 0;
    let rightmax = 0;

    while(start <= end){
        let leftmax = height[height[start] < height[end] ? start++ : end--];
        rightmax = Math.max(rightmax, leftmax);
        water += rightmax - leftmax;
    }
    return water;
};
