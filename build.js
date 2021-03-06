var fs = require('fs');
var Remarkable = require('remarkable');
var pdf = require('phantomjs-pdf');

var remarkableOptions = {
  html: true
};

var pdfOptions = {
  'html' : './dist/daniel_koss_resume.html',
  'css' :  './build.css'
};

var convertToHtml = function (data) {
  var md = new Remarkable(remarkableOptions);
  var renderedHtml = md.render(data);
  fs.writeFile('./dist/daniel_koss_resume.html', renderedHtml);
};

var convertToPdf = function () {
  pdf.convert(pdfOptions, function(result) {
    var stream = result.toStream();
    var tmpPath = result.getTmpPath();
    result.toFile("./dist/daniel_koss_resume.pdf");
  });
};

// copy md file to dist
fs.createReadStream('./src/resume.md').pipe(fs.createWriteStream('./dist/daniel_koss_resume.md'));

fs.readFile('./src/resume.md', 'utf8', function (err, data) {
  if (err) {
    console.err('build failed: ' + err);
  }
  else {
    convertToHtml(data);
    convertToPdf();
  }
});
