// Static publication build: keep both entry URLs and cache keys consistent.
const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'docs');
let html=fs.readFileSync(path.join(root,'guide.html'),'utf8');
const revised=['planner-v3.js','today.js','vnext.js'];
for(const name of ['curated-ui.js','curated.css'])html=html.replace(new RegExp(name.replace('.','\\.')+'\\?v=\\d+','g'),name+'?v=47');
for(const name of revised)html=html.replace(new RegExp(name.replace('.','\\.')+'\\?v=\\d+','g'),name+'?v=45');
fs.writeFileSync(path.join(root,'guide.html'),html);fs.writeFileSync(path.join(root,'index.html'),html);
let sw=fs.readFileSync(path.join(root,'sw.js'),'utf8').replace(/const CACHE = '[^']+';/,"const CACHE = 'osaka-guide-local-v47';");
for(const name of ['curated-ui.js','curated.css'])sw=sw.replace(new RegExp(name.replace('.','\\.')+'\\?v=\\d+','g'),name+'?v=47');
if(!sw.includes("'./curated-rich47.js?v=47'"))sw=sw.replace("const SHELL = [","const SHELL = [\n  './curated-rich47.js?v=47',");
if(!sw.includes("'./stay-private.js?v=46'"))sw=sw.replace("const SHELL = [","const SHELL = [\n  './stay-private.js?v=46', './stay-private.css?v=46',");
for(const name of revised)sw=sw.replace(new RegExp(name.replace('.','\\.')+'\\?v=\\d+','g'),name+'?v=45');
if(!sw.includes("'./curated-v45.js?v=45'"))sw=sw.replace("const SHELL = [","const SHELL = [\n  './curated-v45.js?v=45',");
if(!sw.includes("'./move.js?v=44'"))sw=sw.replace("const SHELL = [","const SHELL = [\n  './move.js?v=44', './move-core.js?v=44', './move.css?v=44',");
fs.writeFileSync(path.join(root,'sw.js'),sw);
for(const name of ['move.js','move-core.js','today.js','today-core.js','planner-v3.js','vnext.js','curated-ui.js','curated-v45.js','stay-private.js'])new(require('node:vm').Script)(fs.readFileSync(path.join(root,name),'utf8'),{filename:name});
new(require('node:vm').Script)(fs.readFileSync(path.join(root,'curated-rich47.js'),'utf8'));
console.log('Static build complete: matching entries, revision 47, offline shell and JS syntax.');
