//document.cookie="lang=-1;";
//document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

let x=getCookie("lang");
console.log("lang val:"+x);
console.log(document.cookie);
$('[lang]').show();
if(x==""||x=="0"){
  $('[lang="es"], [lang="z"]').hide();
}else if(x=="1"){
  $('[lang="en"], [lang="z"]').hide();
}else if(x=="2"){
  $('[lang="es"], [lang="en"]').hide();
}


$('#lang-switch').change(function () {
  var lang = $(this).val();
  $('[lang]').hide();
  switch (lang) {
    case 'en':
      document.cookie="lang=0;"; 
      $('[lang="en"]').show();
      break;
    case 'es':
      document.cookie="lang=1;";
      $('[lang="es"]').show();
      break;
    case 'z':
      document.cookie="lang=2;";
      $('[lang="z"]').show();
      break;
    default:
      if(x==""||x=="0"){
        $('[lang="en"]').show();
      }else if(x=="1"){
        $('[lang="es"]').show();
      }else if(x=="2"){
        $('[lang="z"]').show();
      }
  }
});

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}