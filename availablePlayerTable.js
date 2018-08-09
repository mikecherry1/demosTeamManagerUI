$(document)
    .ready(function() {
        $
            .getJSON("https://cors-anywhere.herokuapp.com/http://s3.amazonaws.com/dii-test/data.json#", function(data) {

                var arrItems = []; // THE ARRAY TO STORE JSON ITEMS.
                $.each(data, function(index, value) {
                    arrItems.push(value); // PUSH THE VALUES INSIDE THE ARRAY.
                });

                // EXTRACT VALUE FOR TABLE HEADER.
                var col = [];
                for (var i = 0; i < arrItems.length; i++) {
                    for (var key in arrItems[i]) {
                        if (col.indexOf(key) === -1) {
                            col.push(key);
                        }
                    }
                }

                // CREATE DYNAMIC TABLE.
                var table = document.createElement("table");

                // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

                var tr = table.insertRow(-1); // TABLE ROW.

                for (var i = 0; i < col.length; i++) {
                    var th = document.createElement("th"); // TABLE HEADER.
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }

                // ADD JSON DATA TO THE TABLE AS ROWS.
                for (var i = 0; i < arrItems.length; i++) {

                    tr = table.insertRow(-1);

                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = arrItems[i][col[j]];
                    }
                }

                //ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
            });
    });