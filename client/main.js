var uploadProgressEql = function(oldValue, newValue){
  return oldValue.value === newValue.value;
};

var UploadProgress = new ReactiveVar({
  value: 0,
}, uploadProgressEql);

Template.progress.helpers({
  value: function(){
    return UploadProgress.get().value;
  },
});


Template.hello.events({
  'change #fileToUpload': function (event) {
    var data = new FormData();
    data.append('file', event.target.files[0]);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        console.log("finished")
      };
    };
    request.upload.addEventListener('progress', function(event){
      var progress = Math.ceil((event.loaded / event.total) * 100);
      UploadProgress.set({value: progress});
    });

    request.open('POST', '/upload');
    // request.setRequestHeader("Content-type", 'multipart/form-data');
    request.send(data);
    false;
  }
});
