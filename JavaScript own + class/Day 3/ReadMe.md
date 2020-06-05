# Day 3

## New things learned today.

1. JS errors.
2. JS hoisting.

---
* **JS errors**

1. Error handling in JS comprises of three things, Try, Catch, Throw, Finally.

2. Try is something we apply to a piece of code, and asking the interpreter to try this thing.

3. No, now result of trying could be either failure or success. If its a success then all well and good, but if its a failure, then what ?
   should or code stop ?? No, that is not the right thing right ? If our code fails, we could *throw* an error message (that we have acquired
   an error).

4. Now since we 'threw' this error message it has to caught by something right ? Yes, it is caught by a variable called `err` inside *catch*

5. Now using this `err` we can, print our error message, if something wrong does happen.

6. *finally* can also be attached to Try, error, thro. It simply executes regardless the result of Try and Catch.

7. Checkout my personal assignment code.

---

* **JS hoisting**

1. *Hoisting* as the name suggests, we have heard *Flag hoisting*, what does it mean ? Getting a flag at the top of the pole right ??
   Same is the meaning here, instead of flag, here JS hoists **declared variables** and **functions**.

2. So hosting in JS is simply, no matter where we declare a JS variable in a code, JS will automatically declare it at the beginning of the
   function. That is why were able to call a function which we declared after the call.

3. Remember, initialisations are not hoisted, only declarations are hoisted. 

4. So, it is always a good practice to declare your variable at the **TOP**.
