$(function() {
    $(document).on('input','#txtencriptar',function () { 
      encriptar();
    });
    $(document).on('input','#txtdesencriptar',function () { 
        desencriptar();
      });
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var qwerty = "qwertyuiopasdfghjklzxcvbnm".split("");
    
    
    function encriptar() {
      var chars = $('#txtencriptar').val();
      var ciphertext = "";
      var indivChars = chars.split('');
      for (i = 0; i < indivChars.length; i++) {
        lowerChar = indivChars[i].toLowerCase();
        characterIndex = alfabeto.indexOf(lowerChar);
        if (characterIndex > -1) {
            ciphertext += qwerty[characterIndex];
        } else {
          ciphertext += indivChars[i];
        }
      }
      $('#txtdesencriptar').val(ciphertext);
    }

    function desencriptar(){
      var chars = $('#txtdesencriptar').val();
      var ciphertext = "";
      var indivChars = chars.split(' ');
      for (i = 0; i < indivChars.length; i++) {
        var j = 0;
        while (j < indivChars[i].length) {
            charGroup = indivChars[i].substr(j, 1);
            characterIndex = qwerty.indexOf(charGroup.toLowerCase());
          if (characterIndex > -1) {
            ciphertext += alfabeto[characterIndex];
          } else {
            ciphertext += charGroup.charAt(0);
          }
          j = j + 1;
        }
        if ((i + 1) < indivChars.length) {
          ciphertext += ' ';
        }
      }
      $('#txtencriptar').val(ciphertext);
    }
});








