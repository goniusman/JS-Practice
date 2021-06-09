// 1. HEAP // memory allocated
// 2. CallStack // last in first out..   lifo
// 3. Web API/C++ API // for storing  all asyncrounous function
// 4. Event Loop // alayes compare calll stack and callback quee. and it check callstack. if free then pass all callback function... it is something while loop.....
// 5. render queue : after a while will be loading > priority 1
// 6. microtask queue: all promise will be here... > priority 2
// 7. callback queue: // comming back all asyncroous func > priority 3

//
