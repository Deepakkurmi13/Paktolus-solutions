<h5>Q.1) Print all pair of {x,y,z} such that x^2 + y^2 = z^2</h5>

<h6>Steps of Code:</h6>
<p>1. First we will create Array of Squares.</p>
<p>2. Create a map of all element of all Squares to check value is present or not in Array</p>
<p>3. Now we will implement two loops of X and Y. In Each Iteration we will do sum of sqr_arr[X] + sqr_arr[Y]. then we will check sum is present or not in sqr_arr using map that we have already created. if sum will be present then print the pair of {X, Y, Z}.</p>

<h6>Complexity:</h6>
 
 Time Complexity: O(n^2)</br>
 Space Complexity :O(n) </br>
 
 here n is the size of square array. here n = 3162.
 </br>
 here INT_MAX is 10000000. we have printed all pairs in range 1 to INT_MAX. 

<h5>Q.2) Print all pair of {x,y,z} such that x^3 + y^3= z^3</h5>

<p>
There is no pair such that x^3+y^3=z^3 when x,y,z will be in range 1 to INT_MAX </br>
 here INT_MAX is 10000000000. we have printed all pairs in range 1 to INT_MAX. 
</p>
