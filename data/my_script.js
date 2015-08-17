//var alertsounddata="data:audio/wav;base64,UklGRhwMAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAZGF0Ya4LAACAgICAgICAgICAgICAgICAgICAgICAgICAf3hxeH+AfXZ1eHx6dnR5fYGFgoOKi42aloubq6GOjI2Op7ythXJ0eYF5aV1AOFFib32HmZSHhpCalIiYi4SRkZaLfnhxaWptb21qaWBea2BRYmZTVmFgWFNXVVVhaGdbYGhZbXh1gXZ1goeIlot1k6yxtKaOkaWhq7KonKCZoaCjoKWuqqmurK6ztrO7tbTAvru/vb68vbW6vLGqsLOfm5yal5KKhoyBeHt2dXBnbmljVlJWUEBBPDw9Mi4zKRwhIBYaGRQcHBURGB0XFxwhGxocJSstMjg6PTc6PUxVV1lWV2JqaXN0coCHhIyPjpOenqWppK6xu72yxMu9us7Pw83Wy9nY29ve6OPr6uvs6ezu6ejk6erm3uPj3dbT1sjBzdDFuMHAt7m1r7W6qaCupJOTkpWPgHqAd3JrbGlnY1peX1hTUk9PTFRKR0RFQkRBRUVEQkdBPjs9Pzo6NT04Njs+PTxAPzo/Ojk6PEA5PUJAQD04PkRCREZLUk1KT1BRUVdXU1VRV1tZV1xgXltcXF9hXl9eY2VmZmlna3J0b3F3eHyBfX+JgIWJiouTlZCTmpybnqSgnqyrqrO3srK2uL2/u7jAwMLFxsfEv8XLzcrIy83JzcrP0s3M0dTP0drY1dPR1dzc19za19XX2dnU1NjU0dXPzdHQy8rMysfGxMLBvLu3ta+sraeioJ2YlI+MioeFfX55cnJsaWVjXVlbVE5RTktHRUVAPDw3NC8uLyknKSIiJiUdHiEeGx4eHRwZHB8cHiAfHh8eHSEhISMoJyMnKisrLCszNy8yOTg9QEJFRUVITVFOTlJVWltaXmNfX2ZqZ21xb3R3eHqAhoeJkZKTlZmhpJ6kqKeur6yxtLW1trW4t6+us7axrbK2tLa6ury7u7u9u7vCwb+/vr7Ev7y9v8G8vby6vru4uLq+tri8ubi5t7W4uLW5uLKxs7G0tLGwt7Wvs7avr7O0tLW4trS4uLO1trW1trm1tLm0r7Kyr66wramsqaKlp52bmpeWl5KQkImEhIB8fXh3eHJrbW5mYGNcWFhUUE1LRENDQUI9ODcxLy8vMCsqLCgoKCgpKScoKCYoKygpKyssLi0sLi0uMDIwMTIuLzQ0Njg4Njc8ODlBQ0A/RUdGSU5RUVFUV1pdXWFjZGdpbG1vcXJ2eXh6fICAgIWIio2OkJGSlJWanJqbnZ2cn6Kkp6enq62srbCysrO1uLy4uL+/vL7CwMHAvb/Cvbq9vLm5uba2t7Sysq+urqyqqaalpqShoJ+enZuamZqXlZWTkpGSkpCNjpCMioqLioiHhoeGhYSGg4GDhoKDg4GBg4GBgoGBgoOChISChISChIWDg4WEgoSEgYODgYGCgYGAgICAgX99f398fX18e3p6e3t7enp7fHx4e3x6e3x7fHx9fX59fn1+fX19fH19fnx9fn19fX18fHx7fHx6fH18fXx8fHx7fH1+fXx+f319fn19fn1+gH9+f4B/fn+AgICAgH+AgICAgIGAgICAgH9+f4B+f35+fn58e3t8e3p5eXh4d3Z1dHRzcXBvb21sbmxqaWhlZmVjYmFfX2BfXV1cXFxaWVlaWVlYV1hYV1hYWVhZWFlaWllbXFpbXV5fX15fYWJhYmNiYWJhYWJjZGVmZ2hqbG1ub3Fxc3V3dnd6e3t8e3x+f3+AgICAgoGBgoKDhISFh4aHiYqKi4uMjYyOj4+QkZKUlZWXmJmbm52enqCioqSlpqeoqaqrrK2ur7CxsrGys7O0tbW2tba3t7i3uLe4t7a3t7i3tre2tba1tLSzsrKysbCvrq2sq6qop6alo6OioJ+dnJqZmJeWlJKSkI+OjoyLioiIh4WEg4GBgH9+fXt6eXh3d3V0c3JxcG9ubWxsamppaWhnZmVlZGRjYmNiYWBhYGBfYF9fXl5fXl1dXVxdXF1dXF1cXF1cXF1dXV5dXV5fXl9eX19gYGFgYWJhYmFiY2NiY2RjZGNkZWRlZGVmZmVmZmVmZ2dmZ2hnaGhnaGloZ2hpaWhpamlqaWpqa2pra2xtbGxtbm1ubm5vcG9wcXBxcnFycnN0c3N0dXV2d3d4eHh5ent6e3x9fn5/f4CAgIGCg4SEhYaGh4iIiYqLi4uMjY2Oj5CQkZGSk5OUlJWWlpeYl5iZmZqbm5ybnJ2cnZ6en56fn6ChoKChoqGio6KjpKOko6SjpKWkpaSkpKSlpKWkpaSlpKSlpKOkpKOko6KioaKhoaCfoJ+enp2dnJybmpmZmJeXlpWUk5STkZGQj4+OjYyLioqJh4eGhYSEgoKBgIB/fn59fHt7enl5eHd3dnZ1dHRzc3JycXBxcG9vbm5tbWxrbGxraWppaWhpaGdnZ2dmZ2ZlZmVmZWRlZGVkY2RjZGNkZGRkZGRkZGRkZGRjZGRkY2RjZGNkZWRlZGVmZWZmZ2ZnZ2doaWhpaWpra2xsbW5tbm9ub29wcXFycnNzdHV1dXZ2d3d4eXl6enp7fHx9fX5+f4CAgIGAgYGCgoOEhISFhoWGhoeIh4iJiImKiYqLiouLjI2MjI2OjY6Pj46PkI+QkZCRkJGQkZGSkZKRkpGSkZGRkZKRkpKRkpGSkZKRkpGSkZKRkpGSkZCRkZCRkI+Qj5CPkI+Pjo+OjY6Njo2MjYyLjIuMi4qLioqJiomJiImIh4iHh4aHhoaFhoWFhIWEg4SDg4KDgoKBgoGAgYCBgICAgICAf4CAf39+f35/fn1+fX59fHx9fH18e3x7fHt6e3p7ent6e3p5enl6enl6eXp5eXl4eXh5eHl4eXh5eHl4eXh5eHh3eHh4d3h4d3h3d3h4d3l4eHd4d3h3eHd4d3h3eHh4eXh5eHl4eHl4eXh5enl6eXp5enl6eXp5ent6ent6e3x7fHx9fH18fX19fn1+fX5/fn9+f4B/gH+Af4CAgICAgIGAgYCBgoGCgYKCgoKDgoOEg4OEg4SFhIWEhYSFhoWGhYaHhoeHhoeGh4iHiIiHiImIiImKiYqJiYqJiouKi4qLiouKi4qLiouKi4qLiouKi4qLi4qLiouKi4qLiomJiomIiYiJiImIh4iIh4iHhoeGhYWGhYaFhIWEg4OEg4KDgoOCgYKBgIGAgICAgH+Af39+f359fn18fX19fHx8e3t6e3p7enl6eXp5enl6enl5eXh5eHh5eHl4eXh5eHl4eHd5eHd3eHl4d3h3eHd4d3h3eHh4d3h4d3h3d3h5eHl4eXh5eHl5eXp5enl6eXp7ent6e3p7e3t7fHt8e3x8fHx9fH1+fX59fn9+f35/gH+AgICAgICAgYGAgYKBgoGCgoKDgoOEg4SEhIWFhIWFhoWGhYaGhoaHhoeGh4aHhoeIh4iHiIeHiIeIh4iHiIeIiIiHiIeIh4iHiIiHiIeIh4iHiIeIh4eIh4eIh4aHh4aHhoeGh4aHhoWGhYaFhoWFhIWEhYSFhIWEhISDhIOEg4OCg4OCg4KDgYKCgYKCgYCBgIGAgYCBgICAgICAgICAf4B/f4B/gH+Af35/fn9+f35/fn1+fn19fn1+fX59fn19fX19fH18fXx9fH18fXx9fH18fXx8fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x8e3x7fHt8e3x7fHx8fXx9fH18fX5+fX59fn9+f35+f35/gH+Af4B/gICAgICAgICAgICAgYCBgIGAgIGAgYGBgoGCgYKBgoGCgYKBgoGCgoKDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KCgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGBgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCAgICBgIGAgYCBgIGAgYCBgIGAgYCBgExJU1RCAAAASU5GT0lDUkQMAAAAMjAwOC0wOS0yMQAASUVORwMAAAAgAAABSVNGVBYAAABTb255IFNvdW5kIEZvcmdlIDguMAAA";

function titleModified() {
    var title=document.title;
    var w1=title.charAt(0);
	if(w1=='('){
		var thissound=document.getElementById("audio1");
  		thissound.play();
  		self.port.emit('clip', "");
  		
	}
    //window.alert("Title modifed");
    //http://stackoverflow.com/questions/tagged/java
}
  var titleEl = document.getElementsByTagName("title")[0];
    var docEl = document.documentElement;

    if (docEl && docEl.addEventListener) {
        docEl.addEventListener("DOMSubtreeModified", function(evt) {
            var t = evt.target;
            if (t === titleEl || (t.parentNode && t.parentNode === titleEl)) {
                titleModified();
            }
        }, false);
    } else {
        document.onpropertychange = function() {
            if (window.event.propertyName == "title") {
                titleModified();
            }
        };
    }
function addsound(){
	document.body.insertAdjacentHTML('beforeend', '<audio id="audio1" src="data:audio/mpeg;base64,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5AATBVUho+Vtgu+q4/SdZbDhUDB3Foq0tqVq92tlVmpmMzrBY1hnje5v/w3jS1ozKWjsVf6VY0tJvn///zn1quHe/j////lvdX//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wG3JrJZZI0AvyKYsu4syZeYktLZrTY/j+95bq8lUyw1gs1cv6yy7/5KSNiRLgTYCjGZwnGaLJLooJIsoaQtJQdFL1upJF3ODDGylo+uYmrdFFTqSU9LVUiijfb6VTuoyfeQBxy6yaWSNALyMSodPMTIwBEkuO9LL5rH86TPW6/d1lZTSlf0sv493cxy/A+svmIAlgNMqJRB1dNCs6bCzCRlo9GMJ50E33NFj3PoLVQa/M3WgcKCaZ9BvemZpGI9zyb/6lpy+bxO/re9n1vL////////////6ksBCVf+AJSlXI6frDYGGoqR0HDVx//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4bcl1c0tlaAaqW0Nc0ZCIANJ4w22AxhHK0nn/3z8u87HKiH5lI48cPwNWxw3l/crGD1Tg4AlYfG5fVmk0FrWZmRbKZPEyDY6KmaFdjNBJlLnFFIiZdBUEYSh9RixeZaTlAvDnGBTEaTijJrU6aTltIYxZmkpJabV1vNzMgB5N6d19dCYoLff+tUxdNAsk10nttsQGf+S17leBoVAlBQVjDQWNMuiuVr8u8/WuteJQT6hU9GYHtU2OW898t8nLiwLcqbl2s3/cmKTxpYsUHEI1mN3lMRL4heWJhgHVFnjyOfvm9O9vNWxOWXFL61XGs11vVTucba+df//4tbUOLjf3/+pLAwnz/gB/9DyOg4auCLCokdH3FsWL6////iuv9ZH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DggmsllkiACsvfWs8bBsg2TYumj2rZHSYWAGEYlufjna9hoqgs23S19TVFC2LsSuBnCUkrT6Aw3Jo5ZY4iAr59A3FjDLFyGY6bIv3n+mKQ5JjPDnfxnbIJ61IJGpJj8CsCULSZNWhW6Ci4McpM63bVWrUfNFIKWkv1vUgsuMTobww38T/////////////////////////////////////////////////////qSwOqe/4AqmS8lpOXtgNkRZLQWoSj//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GA47G65JGQF/sgNiQAaYWOa5TTP/sqfCzgWlFamv9aKRiQI7HzXrU9bsTDE1jkbadOqYWDcmMZDknmzyEwoaC4PSUt+i+pq0/8xCRVfYc/sEsCSC+iZ2WtALyKL1flQjMOdSeqaz7///63zBrQXCW/TxTbO//2nAQgGmk09d0z+5q6HonlqTmzUbeHmpJJQ/LLufxMSjTn0SSTcsv5mPr+Trk/QLX0///////////////////////////////////////////6ksAUbf+AJyzLI6C9q0FGIWR0Gilw///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4DjYjD4gAHVBjlgkn0LBISOW39DoqAAYmbkTRIAC/3qWZCKgD49fXstJZgR4oQWw+eX+k5DhA5Fa/+6nOhU9utggjfdp/////////////////////////////////////////////////////////////////////////////////////////////+pLAmqX/gC606yWg5WtAVQAkcAAABP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AYEmbdbjiIC5F4taA1QMoLibL9nVzwtYmiaT/Z9CIr+VehJVAUNc76fsYKEXBpqWFjAqYdZvgn/JAAG3YJE2SAAv9pW4Qg5Gpxc39TUOVAhBycPVz9t+HPaxJdFvDud3O49Yv6xoNP+V/////////////////////////////////////////////////////////////////////////////////////////////qSwC5H/4AqOKkjoMBLYOSVJHQZFWj////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADzIIAAd9+c//o0YAAABgO/2kf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////6ksAwDf+AL+iHI6CdaSAtgCRkAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDAMBBdf6Wf////Y3oX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+pLAFZr/gC+4ASKAAAAgNQBkYBAABP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////qSwBMB/4AxXAMgAIAAIAAAJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/6ksBYY/+AMWABLgAAACAAACXAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" controls="" preload="auto" autobuffer="" ></audio>');
	
	//document.body.insertAdjacentHTML('beforeend', '<audio id="audio1" src="file:///C:/wamp/www/test/sunds/beep.mp3" controls="" preload="auto" autobuffer="" ></audio>');
}
addsound();
