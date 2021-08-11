const fs = require('fs');
const Handlebars = require('handlebars');

const indexTemplateFile = fs.readFileSync(__dirname + '/templates/index.hbs');
var indexTemplate = Handlebars.compile(indexTemplateFile.toString());

const partialsDir = __dirname + '/partials';
var partialsFilenames = fs.readdirSync(partialsDir);

partialsFilenames.forEach(function (filename) {
  var matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  Handlebars.registerPartial(name, template);
});

fs.writeFileSync(__dirname + '/index.html', indexTemplate({}));