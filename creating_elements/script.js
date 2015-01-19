(function() {
    var doc = document,
        el = doc.createElement("p"),
        el2 = doc.createElement("p"),
        content = doc.createTextNode("<strong>This is dynamically created content!</strong>"),
        pFoo = doc.getElementById("foo");

    el.appendChild(content);
    el.setAttribute("align", "center");

    //doc.body.appendChild(el);

    //pFoo.parentNode.appendChild(el);

    pFoo.parentNode.insertBefore(el, pFoo);

    //pFoo.parentNode.replaceChild(el, pFoo);

    el2.innerHTML = "<strong>This is really bold text!</strong>";
    pFoo.parentNode.appendChild(el2);


}());