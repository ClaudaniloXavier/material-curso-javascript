function carregarXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      //Ação que será executada quando o documento estiver pronto
      document.getElementById('container').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'arquivo.txt', true);
  xhttp.send()
}
