// Using-JavaScript language

var max_int = 10000000; 

// STEP-1 : create array of squares arr_sqr
var arr_sqr = [];
for(var i=0;;i++)
{
    if(i*i > max_int) break;
    arr_sqr.push(i*i);
}

//STEP-2 : create a map of all element of arr_sqr to check value is present or not in arr_sqr
var map = {}; 
var n = arr_sqr.length; // length of arr_sqr
for(var i=0;i<n;i++)
{
    map[arr_sqr[i]]=1;
}

//STEP-3 : Now we will print all pairs {x,y,z} such that x^2+y^2=z^2

for(var x=1;x<n;x++)
{
    for(var y=x+1;y<n;y++)
    {
        var x2_plus_y2  = arr_sqr[x] + arr_sqr[y];
        if(map[x2_plus_y2] === 1)
        {
            console.log(x+" "+y+" "+ Math.sqrt(x2_plus_y2));
        }
    }
}


// Time complexity O(n^2)
// Space complexity O(n)