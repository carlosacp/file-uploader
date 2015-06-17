var tmpDir = process.env.PWD + '/.#upload/tmp'
Picker.middleware(multer({dest: tmpDir}));
Picker.route('/upload', function(params, req, res, next) {
  console.log(req.files);
  res.end("teste 2");
});


Meteor.startup(function () {

});
