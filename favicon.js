function setTextFavicon() {
    var favIconUrl;
    var text = '?';
    var backgroundcolor = 'WHITE';
    var textcolor = 'BLACK';
    
    var oid;
    var host;
    if (typeof SFDCSessionVars !== 'undefined' &&  SFDCSessionVars && SFDCSessionVars.oid)
    {
      oid = SFDCSessionVars.oid;
      host = SFDCSessionVars.host;
    }
    else 
    {
        oid = SfdcDevConsole.SID.substring(0,15);    
        host = '';
    }
    if (host === 'login.salesforce.com') {
        backgroundcolor = 'RED';
        textcolor = 'BLACK';
    }
    if (host === 'test.salesforce.com') {
        backgroundcolor = 'BLUE';
        textcolor = 'WHITE';
    }

    
    switch (oid) {
        case '00D19000000Diqk':
            text = 'EM';
            break;
        case '00DW0000003idiy':
            text = 'FA';
            break;
            
            //parxch live
        case '00D200000001dcm':
            text = 'PX';
            backgroundcolor = 'GRAY';
            textcolor = 'WHITE';
            break;
            
            //nzz
        case '00Dg0000003M0D0':
            text = 'NZ';
            backgroundcolor = 'LIGHTBLUE';
            textcolor = 'WHITE';
            break;
            
            
            
    }

    if (text) {
        canvas = document.createElement('canvas');
        canvas.width = 20
        canvas.height = 20
        context = canvas.getContext('2d');

        context.rect(0,0,20,20);
        context.fillStyle=backgroundcolor;
        context.fill();     
        context.fillStyle=textcolor;

     
        
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
