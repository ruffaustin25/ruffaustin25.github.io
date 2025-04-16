const fs = require('fs');
const Handlebars = require('handlebars');
const sass = require('sass');
const path = require('path');

// Collect all handlebars partials
const partialsDir = __dirname + '/source/partials';
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

// Render templates for project description pages, save page relative urls for ajax loads
const projectPageFile = fs.readFileSync(__dirname + '/source/templates/projectPage.hbs');
var projectPageTemplate = Handlebars.compile(projectPageFile.toString());
var projectPages = JSON.parse(fs.readFileSync(__dirname + '/source/projectPages/projects.json'));
for (var page of projectPages)
{
  page.outputHtml = projectPageTemplate(page);
}

// Render template for index page
const indexTemplateFile = fs.readFileSync(__dirname + '/source/templates/index.hbs');
var indexTemplate = Handlebars.compile(indexTemplateFile.toString());
var indexContext = {
  projectPages: projectPages
};
fs.writeFileSync(__dirname + '/index.html', indexTemplate(indexContext));

// Compile the sass file to css
fs.writeFileSync(__dirname + '/static/css/app.css', sass.compile(__dirname + '/source/scss/app.scss').css);

// Compile js files into one app.js
var siteScript = '// Projects json\n';
siteScript += 'projectsJson = ' + fs.readFileSync(__dirname + '/source/projectPages/projects.json');

siteScript += '\n\n// Global site script\n';
siteScript += fs.readFileSync(__dirname + '/source/js/global.js');

// Add project page ajax load script
siteScript += '\n\n// Project specific js\n';
const projectPageAjaxFile = fs.readFileSync(__dirname + '/source/js/projectPages.js');
var projectPageAjaxTemplate = Handlebars.compile(projectPageAjaxFile.toString());
for (var page of projectPages)
{
  var projectPageAjaxContext = {
    page: page,
  }
  siteScript += projectPageAjaxTemplate(projectPageAjaxContext) + '\n';
}
fs.writeFileSync(__dirname + '/static/js/app.js', siteScript);

console.log('Successfully built site');