var pdf = require('phantomjs-pdf');

var options = {
    'html' : './dist/resume.html',
    'css' : './github-markdown-pdf.css'
};

pdf.convert(options, function(result) {
    result.toBuffer(function(returnedBuffer) {});
    var stream = result.toStream();
    var tmpPath = result.getTmpPath();
    result.toFile("./dist/resume.pdf", function() {});
});
