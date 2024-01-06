# WHAT IS DOM?

    --> A programming interface , not a program language .
        it is not lanuage dependent , it is independent ,
        you can use it in any language , not only java script.

# HOW TO ACCESS DOM ?
    --> thr dom is a tree like representatpion ina web page that gets loaded into the browser. :

                                Document
                                    |
                                    v
                                   HTML
                                    |
                          ______________________       
                          |                     |
                        HEAD                   BODY
                          |                     |
                        TITLE             ______________
                          |               |             |
                    "My document"       "Header"  "paragraph"

        --> When a web browser prsess an HTML document , it builds a DOM tree and then uses it 
            to display the document

# FINDING HTML ELEMENET IN DOM 
      1.   GET ELEMENT BY ID
                  var x = document.getElementId("<id_name>);

      2. GET ELEMENT BY TAG NAME 
                if <html>
                        <div> "hello vishal" </div> 
                  </html>
                then it can be accessed by using
              
              var x = docmuent.getElementByTagname("div");

        CONTINUE....
        *CHECK EX-3....*
