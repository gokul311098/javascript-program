function fileExtension(f1) {

    let fileName = f1.split('.').pop();

    return fileName;
}

const result = fileExtension('module.js');
console.log(result);

const result2 = fileExtension('module.txt');
console.log(result2);



//using substring and lastIndexOf
function file(f2) {

    let filename = f2.substring(f2.lastIndexOf('.') + 1, f2.length || f2);

    return filename;
}

const file_name = file('module./js');
console.log(file_name);

const file_name1 = file('module.txt');
console.log(file_name1);