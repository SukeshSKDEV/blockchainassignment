// 4. Output of following closure ?
// 3 (3 times)
// Explanation : since setTimeout is a asynchronous function it will sent to the webAPI. for loop will never wait and fastly execute the next iteration. i will increase till i=3 and loop stops; at the end event loop call setTiemout, send it to the call stack. since, var is a global variable, value of i is 3.
