
$(function(){
  let notes;
  if (localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
  } else {
    notes = {};
  }

  if (localStorage.getItem('openItemTitle')) {
    let title = localStorage.getItem('openItemTitle');
    if (title === 'undefined') {
      title = '';
    }
    localStorage.removeItem('openItemTitle');
    $('#noteName').val(title);
    $('#text_area').val(notes[title]);
  }

  $('#save').on('click', () => {

    let noteName = $('#noteName').val()
    notes[noteName] = $('#text_area').val();
    let stringifiedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', stringifiedNotes);
    alert('記事の保存が完了しました。');
  });

  $('#reset').on('click', () => {
    if (confirm('本当に内容を削除しますか？')) {
      $('textarea').val('');
      alert('タイトルと内容を全部消しました');
    }
  });
  
});