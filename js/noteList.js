$(() => {
  let notes;
  let noteKeys;
  function createCardCode(notes, noteKey, noteNumber) {
      return '<div class="noteCard" id="' + noteNumber + '"><div class="cardTitle">' + noteKey +'</div><div class="cardContent">' + notes[noteKey] + '</div></div>';
    }

  function initialize() {
    $('#cardContainer').html('<div class="noteCard" id="addCardButton"><i class="fa fa-plus-circle" aria-hidden="true"></i></div>');
      $('#addCardButton').on('click', () => {
        window.open('index.html', "window_name", "width=300,height=200,scrollbars=yes");
      });
      $('.noteCard').on('click', function() {
        let noteIndex = $(this).attr('id');
        let title = noteKeys[noteIndex];
        localStorage.setItem('openItemTitle', title);
        window.open('index.html', "window_name", "width=300,height=200,scrollbars=yes");
      });
    if (localStorage.getItem('notes')) {
      notes = JSON.parse(localStorage.getItem('notes'));
    } else {
      notes = {};
    }

    noteKeys = Object.keys(notes);
    for (let i = 0; i < noteKeys.length; i++) {
      $('#cardContainer').append(createCardCode(notes, noteKeys[i], i));
    }
  }

  initialize();

  $('#clear').on('click', () => {
    if (confirm('本当にノートを全て削除しますか？')) {
      if (confirm('後悔しませんね？')) {
        localStorage.removeItem('notes');
        $('#addCardButton').off('click');
        let note = {};
        alert('ノートを全て削除しました');
        initialize();
      }
    } 
  });

  $('.noteCard').on('click', function() {
    let noteIndex = $(this).attr('id');
    let title = noteKeys[noteIndex];
    localStorage.setItem('openItemTitle', title);
    window.open('index.html', "window_name", "width=300,height=200,scrollbars=yes");
  });

  $('#syncButton').on('click', () => {
    initialize();
  });

  $('#addCardButton').on('click', () => {
    window.open('index.html');
  });

});