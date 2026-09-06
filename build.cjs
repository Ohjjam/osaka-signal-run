// Static publication build: synchronize entries and cache revisions for changed modules.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'docs'),version=55;
const revised=['experience.js','app.js','curated-ui.js','curated.css','curated-required49.js','route-transport48.js','vnext.js','vnext-core.js','osaka-vnext-data.js','planner-v3.js','today.js','today-core.js','move-core.js'];
function revise(text){for(const name of revised)text=text.replace(new RegExp('(?<![\\w-])'+name.replaceAll('.','\\.')+'(?:\\?v=\\d+)?','g'),name+'?v='+version);return text;}
const html=revise(fs.readFileSync(path.join(root,'guide.html'),'utf8'));
fs.writeFileSync(path.join(root,'guide.html'),html);fs.writeFileSync(path.join(root,'index.html'),html);
let sw=revise(fs.readFileSync(path.join(root,'sw.js'),'utf8')).replace(/const CACHE = '[^']+';/,"const CACHE = 'osaka-guide-local-v"+version+"';");
fs.writeFileSync(path.join(root,'sw.js'),sw);
for(const name of [...new Set([...revised.filter(n=>n.endsWith('.js')),'move.js','curated-v45.js','curated-rich47.js','stay-private.js'])])new vm.Script(fs.readFileSync(path.join(root,name),'utf8'),{filename:name});
console.log('Static build complete: matching entries, revision '+version+', offline shell and JS syntax.');
