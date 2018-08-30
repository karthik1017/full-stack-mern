var googlemap = {
        "destination_addresses" : [ "New York, NY, USA" ],
        "origin_addresses" : [ "Washington, DC, USA" ],
        "rows" : [
           {
              "elements" : [
                 {
                    "distance" : {
                       "text" : "225 mi",
                       "value" : 361715
                    },
                    "duration" : {
                       "text" : "3 hours 49 mins",
                       "value" : 13725
                    },
                    "status" : "OK"
                 }
              ]
           }
        ],
        "status" : "OK"
};
console.log(googlemap); 

function convert(result)
{
    return `The distance between ${result.origin_addresses[0]} and ${result.destination_addresses[0]} is ${result.rows[0].elements[0].distance.text} and the time taken is ${result.rows[0].elements[0].duration.text}`;
}
console.log(convert(googlemap));