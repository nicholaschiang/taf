const people = [
  {
    name: 'Anthony Alfidi',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'William S. and Janice Anderson',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.',
    video: 'https://www.youtube.com/watch?v=RUCN4Q3egmw'
  },
  {
    name: 'Michael and Bonny Armacost',
    video: 'https://www.youtube.com/watch?v=RUCN4Q3egmw'
  },
  {
    name: 'David D. and Sherry Arnold',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Jerome and Thao Dodson',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Theodore L. Eliot, Jr.  and Patricia P. Eliot ',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Walter Jared Frost',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'William P. Fuller',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Ernest M. and Jean M.  Howell',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Kenneth I. Juster',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Tim Kochis',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Richard Lamb ',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Lan Thuc and Nga Le',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Gerald P. Martin',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'William McDougal ',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Susan J. Pharr',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Missie Rennie and Zach Taylor',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Thomas and Shelagh Rohlen',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Suzanne E. Siskel',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
  {
    name: 'Haydn Williams ',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, ornare vitae leo a, aliquet bibendum diam. Vestibulum eleifend nisi diam, nec ornare massa pharetra in. Praesent dictum felis dapibus tristique posuere. Phasellus consectetur neque condimentum leo porttitor, at pretium velit vulputate. Nam euismod nisi tincidunt libero consectetur, ut consectetur urna luctus. Quisque aliquam ante a urna hendrerit condimentum. Sed sed viverra ex, non aliquam ligula. Proin quam enim, placerat vel risus in, gravida venenatis lectus. Ut rutrum efficitur nibh ac ullamcorper. Maecenas mattis neque ac diam faucibus consectetur. Donec tristique elit lorem, eget tempus dolor rhoncus ut. Integer.'
  },
];

const NUM_ROWS = 6;
const NUM_COLS = 12;

const TOP_OFFET = 20;
const LEFT_OFFSET = 16;

const COL_OFFSET = 105;
const ROW_OFFSET = 105;

const modalEl = $('#modal');
const videoWrapperEl = $('#modal-video-wrapper');
const bioEl = $('#modal-bio');

function createBox(col, row) {
  const person = people[col + row * NUM_COLS];
  if (!person) return;

  const left = col * COL_OFFSET + LEFT_OFFSET;
  const top = row * ROW_OFFSET + TOP_OFFET;

  const el = $('<div class="box"></div>');
  el.css({ left: `${left}px`, top: `${top}px` });

  const imgEl = $('<img src="art.png" />');
  imgEl.css({ top: `${top * -1}px`, left: `${left * -1}px` });
  el.append(imgEl);

  const textEl = $('<p></p>');
  textEl.text(person.name);
  el.append(textEl);

  el.on('click', () => {
    $('#modal-name').text(person.name);
    if (person.bio) {
      bioEl.text(person.bio);
      bioEl.addClass('visible');
    }
    if (person.video) {
      const videoEl = $('#modal-video');
      const videoId = person.video.split('?v=')[1];
      videoEl.on('load', () => {
        videoEl.addClass('visible');
        videoEl.unbind('load');
      });
      videoEl.attr('src', `https://www.youtube.com/embed/${videoId}`);
      videoWrapperEl.addClass('visible');
    }
    modalEl.addClass('visible');
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

$('button.close')[0].onclick = function () {
  [modalEl, bioEl, videoWrapperEl].forEach((e) => e.removeClass('visible'));
};
window.onclick = function (event) {
  if (event.target === modalEl[0]) {
    [modalEl, bioEl, videoWrapperEl].forEach((e) => e.removeClass('visible'));
  }
};
