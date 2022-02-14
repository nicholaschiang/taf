const NUM_ROWS = 6;
const NUM_COLS = 12;

const TOP_OFFET = 20;
const LEFT_OFFSET = 16;

const COL_OFFSET = 105;
const ROW_OFFSET = 105;

const modal = $('#modal');

function hideModal() {
  modal.css({ display: 'none' });
  $('#modal-video').css({ display: 'none' });
  $('#modal-bio').css({ display: 'none' });
}
hideModal();

function createBox(col, row) {
  const person = people[col + row * NUM_COLS];
  if (!person) {
    return;
  }

  const left = col * COL_OFFSET + LEFT_OFFSET;
  const top = row * ROW_OFFSET + TOP_OFFET;

  const el = $('<div class='box'></div>');
  el.css({ left: left + 'px', top: top + 'px' });

  const imgEl = $('<img src='art.png' />');
  imgEl.css({
    top: top * -1 + 'px',
    left: left * -1 + 'px',
  });
  el.append(imgEl);
  const textEl = $('<p></p>');
  textEl.text(person.name);
  el.append(textEl);

  el.on('click', () => {
    $('#modal-name').text(person.name);
    if (person.bio) {
      const bioEl = $('#modal-bio');
      bioEl.text(person.bio);
      bioEl.css({ display: 'block' });
    }
    if (person.video) {
      const videoEl = $('#modal-video');
      const videoId = person.video.split('?v=')[1];
      videoEl.on('load', () => {
        videoEl.css({ display: 'block' });
        videoEl.unbind('load');
      });
      videoEl.attr('src', `https://www.youtube.com/embed/${videoId}`);
    }
    modal.css({ display: 'block' });
  });
  return el;
}
const rootImage = $('#image');
for (let row = 0; row < NUM_ROWS; row++) {
  for (let col = 0; col < NUM_COLS; col++) {
    const box = createBox(col, row);
    if (box) {
      rootImage.append(box);
    }
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  hideModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal[0]) {
    hideModal();
  }
};
