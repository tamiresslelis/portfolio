const typing = () => {
    const words = ['Hello, my name is Tamires Lelis'];
    const skip_delay = 5;
    const speed = 150;
    const size = words.length;
    let skip_count = 0;
    let forwards = true;
    let offset = 0;
    let part = '';
    let position = 0;

  setInterval(() => {
      if (forwards) {
        if (offset >= words[position].length){
            ++skip_count;

            if (skip_count == skip_delay) {
                forwards = false;
                skip_count = 0;
            }
        }
      } else {
        if (offset == 0) {
            forwards = true;
            position++;
            offset = 0;

            if (position >= size){
                position = 0;
            } 
        }
      }

      part = words[position].substr(0, offset);

      if (skip_count == 0) {
        if (forwards) {
            offset++;
        } else {
            offset--;
        }
      }

    $('.title h1').text(part);

  }, speed);
};

$(document).ready(() => {
    typing();
});