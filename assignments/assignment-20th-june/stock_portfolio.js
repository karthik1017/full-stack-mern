function totalPortfolioValue(a, b) {
    var value = 0, mul = 0;
    var obj = {};
    for(var i = 0; i < b.length; i++) {
        if(a.includes(b[i][0])) {
            mul = a[a.indexOf(b[i][0])+1] * b[i][1];
            value += mul;
            obj[b[i][0]] = mul;
        }
        else {
            obj[b[i][0]] = 'company doesnot exist';
        }
    }
    obj['total'] = value;
    return obj;
  }

  
var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];  
console.log(totalPortfolioValue(ticker, portfolio));