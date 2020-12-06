function downloadInnerHtml(filename, elId, mimeType) {
  var elHtml = document.getElementById(elId).innerHTML;
  var link = document.createElement('a');
  mimeType = mimeType || 'text/plain';

  link.setAttribute('download', filename);
  link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
  link.click(); 
}

var fileName =  'sharkroom.txt'; // You can use the .txt extension if you want

$('#dwnlnk').click(function(){
  downloadInnerHtml(fileName, 's2t','text');
});
