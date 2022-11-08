const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const upper_alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const number = [1,2,3,4,5,6,7,8,9,0];
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array
    }

["sample_str_0", "sample_str_1", "sample_number_0", "sample_number_1", "sample_time_0", "sample_time_1"]

function make_sample_array(){
    return [
            shuffleArray(alphabet).join("").slice(0, 3),
            shuffleArray(upper_alphabet).join("").slice(0, 5),
            Number(shuffleArray(number).join("").slice(0, 3)),
            Number(shuffleArray(number).join("").slice(0, 10)),
            randomDate(new Date(2012, 0, 1), new Date()),
            randomDate(new Date(2012, 0, 1), new Date()),
        ]
}

[...Array(1222).keys()].map(V=>make_sample_array());