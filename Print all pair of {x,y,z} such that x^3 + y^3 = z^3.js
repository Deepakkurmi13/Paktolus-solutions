// Using-JavaScript language


var max_int = 10000000000;

// STEP-1 : create array of cubes arr_cubes
var arr_cubes = [];
for(var i=0;;i++)
{
    if((i*i*i) > max_int) break;
    arr_cubes.push(i*i*i);
}

//STEP-2 : create a map of all element of arr_cubes to check value is present or not in arr_cubes
var map = {}; 
var n = arr_cubes.length; // length of arr_cubes
for(var i=0;i<n;i++)
{
    map[arr_cubes[i]]=1;
}

//STEP-3 : Now we will print all pairs {x,y,z} such that x^3+y^3=z^3


for(var x=1;x<n;x++)
{
    for(var y=x+1;y<n;y++)
    {
        var x3_plus_y3  = arr_cubes[x] + arr_cubes[y];
        if(map[x3_plus_y3] === 1)
        {
            console.log(x+" "+y+" "+ Math.cbrt(x3_plus_y3));
        }
    }
}

// Time complexity O(n^2), n is the size of array. now n = 3162
// Space complexity O(n)
 
// There is no pair such that x^3+y^3=z^3 when x,y,z will be in range 1 to INT_MAX