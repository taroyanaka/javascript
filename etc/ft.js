const execSync = require('child_process').execSync;
const result =  execSync('echo \'東京\'|./mecab -Owakati > queries.txt;./fasttext predict new_female_male_model.bin queries.txt');
console.log(result.toString());
