// Static publication build: keep both entry URLs and cache keys consistent.
const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'docs');
let html=fs.readFileSync(path.join(root,'guide.html'),'utf8');
const revised=['planner-v3.js','today.js','vnext.js'];
for(const name of revised)html=html.replace(new RegExp(name.replace('.','\\.')+'\\?v=\\d+','g'),name+'?v=45');
fs.writeFileSync(path.join(root,'guide.html'),html);fs.writeFileSync(path.join(root,'index.html'),html);
let sw=fs.readFileSync(path.join(root,'sw.js'),'utf8').replace(/const CACHE = '[^']+';/,"const CACHE = 'osaka-guide-local-v45';");
for(const name of revised)sw=sw.replace(new RegExp(name.replace('.','\\.')+'\\?v=\\d+','g'),name+'?v=45');
if(!sw.includes("'./curated-ui.js?v=45'"))sw=sw.replace("const SHELL = [","const SHELL = [\n  './curated-ui.js?v=45', './curated-v45.js?v=45', './curated.css?v=45',");
if(!sw.includes("'./move.js?v=44'"))sw=sw.replace("const SHELL = [","const SHELL = [\n  './move.js?v=44', './move-core.js?v=44', './move.css?v=44',");
fs.writeFileSync(path.join(root,'sw.js'),sw);
for(const name of ['move.js','move-core.js','today.js','today-core.js','planner-v3.js','vnext.js','curated-ui.js','curated-v45.js'])new(require('node:vm').Script)(fs.readFileSync(path.join(root,name),'utf8'),{filename:name});
console.log('Static build complete: matching entries, revision 45, offline shell and JS syntax.');
