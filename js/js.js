function load(){
    var text = document.getElementById("mensaje").value;
    var encryp = text.replace("a","ardg");
    var encryp2 = encryp.replace("e","gest");
    var encryp3 = encryp2.replace("i","sarc");
    var encryp4 = encryp3.replace("o","efsr");
    var encryp5 = encryp4.replace("u","fsyt");
    document.getElementById("T2").value=encryp5;
  }
  function decrypt(){
    var text = document.getElementById("T2").value;
    var decrypt = text.replace("ardg","a");
    var decrypt2 = decrypt.replace("gest","e");
    var decrypt3 = decrypt2.replace("sarc","i");
    var decrypt4 = decrypt3.replace("efsr","o");
    var decrypt5 = decrypt4.replace("fsyt","u");
    document.getElementById("T2").value=decrypt5;
  }
  function copy(){
    var content = document.getElementById('T2');

    content.select();
    document.execCommand('copy');

    alert("Copiado");
  }