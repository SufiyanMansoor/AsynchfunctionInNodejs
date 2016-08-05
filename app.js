/**
 * Created by Sufiyan on 8/5/2016.
 */
var fs=require('fs')
function hello(){
    console.log('end! really?')
}
console.log('starting');
fs.readFile('../home/myfile.txt', function (err, data) {
    if (err) throw err;
    console.log('Data From File: ' + data);
});
hello();