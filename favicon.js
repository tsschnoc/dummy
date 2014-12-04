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
