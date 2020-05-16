# Day 6

## New things learned today

1. What is DOM ?

2. addEventListener()

    - Bubbling (default)
    - Capturing

3. DOM Navigation (using nodes)

4. HTMLCollection and NodeList

---

-   **What is DOM ?**

1. DOM is document object module, which means when a web page is loaded, the browser creates a DOM of the page.

2. All the HTML tags are made as objects, but why do we need them as objects ??
   So that JS can work on these objects and make our HTML dynamic in nature.

3. Using this DOM objects, JS can manipulate HTML elements, their attributes, even CSS.

4. In DOM, document is the root object.

---

-   **addEventListener()**

1. Just as the name suggests, it **does** something when an event is generated.

2. It takes 3 parameters, addEventListener( <event>, <function>, <propagation(default is Bubbling)> )

3. When a button is clicked, the function mentioned inside is called.

4. Suppose there is a `div` tag and inside it there is a `p` tag. If we add click event listener to it,
   which tag's event listener should be invoked first ? So by default `p` then `div`. This is _Bubbling_.
   _Capturing_ is `div` first then `p`.

---

-   \*_HTMLCollection and NodeList_

1. When we say `let x = document.getElementsByClassName('demo')`, it returns us a collection of all the tags with class
   name 'demo'. We can access each of the element using array like syntax Eg: `x[0]`...
   But it is not array, it behaves like it, but they are not array, array functions wont apply to them.

2. Same applies to **NodeList**. When we say `var myNodeList = document.querySelectorAll("p");`, we get a collection
   of all the nodes with that tag.

3. Node concept is that, **EVERYTHING** in the html document is a **NODE**.
   From all the elements, even to the _Text_ inside a tag is also a node. And we can access each one of them.

4. The root node is **document**.
