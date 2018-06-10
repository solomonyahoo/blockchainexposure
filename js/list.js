  function loadlist(){
    var NebPay = require("nebpay"); 
    var nebpay = new NebPay();

    var dappAddress = "n1zBgWRjs4tmZcBPU9F3XVtBayeM6R8ftai";

        var to = dappAddress;
        var value = "0";
        var callFunction = "readinfo";
        var callArgs = "[]";
        nebpay.simulateCall(to, value, callFunction, callArgs, {
            listener: function(resp) {
                var myArr = JSON.parse(resp.result);

             myArr.sort(function(a,b)
		 {
             return  b.index -  a.index
          });
                var tempStr = "";

                for (var i = 0; i < myArr.length; i++) {
                    if (i % 2 == 0) {
                        tempStr += '<div class="panel-body"> ';
                    } else {
                        tempStr += '<div class="panel-footer">';
                    }
					
					
					tempStr += '<h2>';
					tempStr += myArr[i].strTitle;
					
					tempStr += '</h2>';
					tempStr += '<small><cite>' + '&#x4F5C;&#x8005;&#xFF1A;' + myArr[i].author + '</cite><cite>' + '&#x65F6;&#x95F4;&#x6413;;' + myArr[i].createDate + '</cite></small>';
					tempStr += '<p><br>';
					tempStr += myArr[i].strNote;
					tempStr += '</p>';
					tempStr += '<p>';
					
					tempStr += '</p> </div> <div class="container shareReplys"></div>';
                }
                console.log(tempStr);
                $("#indexlist").html(tempStr);
            }
        });
}

  function loadSearch(){
	var strText = $("#search_value").val();
	     if (strText == "") {
            alert("&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&#x3002;");
            return;
        }
    var NebPay = require("nebpay"); 
    var nebpay = new NebPay();

    var dappAddress = "n1zBgWRjs4tmZcBPU9F3XVtBayeM6R8ftai";

        var to = dappAddress;
        var value = "0";
        var callFunction = "readinfo";
        var callArgs = "[]";
        nebpay.simulateCall(to, value, callFunction, callArgs, {
            listener: function(resp) {
                var myArr = JSON.parse(resp.result);

             myArr.sort(function(a,b)
		 {
             return  b.index -  a.index
          });
                var tempStr = "";

                for (var i = 0; i < myArr.length; i++) {
                    if (i % 2 == 0) {
                        tempStr += '<div class="panel-body"> ';
                    } else {
                        tempStr += '<div class="panel-footer">';
                    }
					
					var str = myArr[i].strNote;
                    var reg = RegExp(/3/);
                   if(str.match(strText)){
                      tempStr += '<h2>';
					  tempStr += myArr[i].strTitle;
					
					  tempStr += '</h2>';
					  tempStr += '<small><cite>' + '&#x4F5C;&#x8005;&#xFF1A;' + myArr[i].author + '</cite><cite>' + '&#x65F6;&#x95F4;&#x6413;;' + myArr[i].createDate + '</cite></small>';
					  tempStr += '<p><br>';
					  tempStr += myArr[i].strNote;
					  tempStr += '</p>';
					  tempStr += '<p>';
					
					  tempStr += '</p> </div> <div class="container shareReplys"></div>';     
                    }
					
                }
                console.log(tempStr);
                $("#indexlist").html(tempStr);
            }
        });
}

function writeinfo() {
    var NebPay = require("nebpay"); 
    var nebpay = new NebPay();

    var dappAddress = "n1zBgWRjs4tmZcBPU9F3XVtBayeM6R8ftai";
	
        var strTitle = $("#strTitle").val();
        var strNote = $("#strNote").val();

        if (strTitle == "") {
            alert("&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&#x3002;");
            return;
        }
        if (strNote == "") {
            alert("&#x8BF7;&#x8F93;&#x5165;&#x5185;&#x5BB9;&#x3002;");
            return;
        }
		
		strNote= strNote.replace(/\n/g,"<br>"); 
		
        var to = dappAddress;
        var value = "0";
        var callFunction = "writeinfo";
        var callArgs = "[\"" + strTitle + "\",\"" + strNote + "\"]";
        nebpay.call(to, value, callFunction, callArgs, {
            listener: function(resp) {
                console.log(JSON.stringify(resp));
            }
        });
	
	loadlist();
}