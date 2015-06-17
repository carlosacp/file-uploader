Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.hello.events({
  'change #fileToUpload': function (event) {
    var data = new FormData();
    data.append('file', event.target.files[0]);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        console.log("finalizado");
      };
    };
    request.upload.addEventListener('progress', function(event){
      var progress = Math.ceil((event.loaded / event.total) * 100);
      console.log("progress " + progress);
    });

    request.open('POST', '/upload');
    // request.setRequestHeader("Content-type", 'multipart/form-data');
    request.send(data);
    false;
  }
});
