   
      var docDate = document.lastModified;
      var versionDate = new Date(docDate);
      var formattedVersionDate = versionDate.toDateString()
      document.getElementById("result").innerHTML = "<H1> CORIA FILES (Versie : " + formattedVersionDate + ")</H1>" ;
   
