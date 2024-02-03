const path=require('path')

// print basename of path
const a1=path.basename('/foo/bar/baz/asdf/quux.html');
console.log(a1)
// print dirname
const a2=path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(a2)
// print extension name
const a3=path.extname('index.html');
console.log(a3)


