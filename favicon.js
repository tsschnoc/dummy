function setTextFavicon() {
    var favIconUrl;
    var text;
    switch (SFDCSessionVars.oid) {
      case '00D19000000Diqk':
        text = 'EM';
        break;
      case '00DW0000003idiy':
        text = 'FA';
        break;
    }

    if (text) {
      canvas = document.createElement('canvas');
      canvas.width = 20
      canvas.height = 20
      context = canvas.getContext('2d');

      if (SFDCSessionVars.host === 'login.salesforce.com') {
        context.rect(0,0,20,20);
        context.fillStyle="blue";
        context.fill();         
      }
      
      if (SFDCSessionVars.host === 'test.salesforce.com') {
        context.rect(0,0,20,20);
        context.fillStyle="red";
        context.fill();     
      }

      context.fillStyle = '#000';
      context.font = "15px Georgia";
      context.fillText(text, 0, 17);

      favIconUrl = canvas.toDataURL('image/png');


      var link = document.querySelector("link[rel~='icon'], link[rel~='ICON']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "icon");
        link.type = "image/x-icon";
        document.head.appendChild(link);
      }
      link.href = favIconUrl;
    }
  }
  setTextFavicon();
