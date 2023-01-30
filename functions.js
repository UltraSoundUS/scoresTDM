/**
 * 
 * @param {Object} data 
 */
const createTables = data => {
  const songs = [];
  for (const song in data) {
    songs.push([song + '_m', data[song]['title']]);
    if (data[song]['has_ura']) {
      songs.push([song + '_x', data[song]['title'] + '(裏)']);
    }
  }
  songs.forEach(x => createTable(...x));
};

/**
 * 
 * @param {string} song 
 * @param {string} title 
 */
const createTable = (song, title) => {
  console.log(title);
  const outer = document.getElementById('tables');
  const h3 = document.createElement('h3');
  h3.innerText = title;
  outer.appendChild(h3);
  h3.setAttribute('id', song)
  const table = document.createElement('table');
  outer.appendChild(table);
  table.setAttribute('id', song + '-table');
  for (let i = 0; i < 10; ++i) {
    const line = document.createElement('tr');
    table.appendChild(line);
    const rank = document.createElement('th');
    line.appendChild(rank);
    rank.innerText = i + 1;
    const nameCell = document.createElement('td');
    line.appendChild(nameCell);
    const name = document.createElement('img');
    nameCell.appendChild(name);
    name.setAttribute('src', 'images/' + song + '_name' + i + '.png');
    name.setAttribute('id', song + '-name' + i);
    const scoreCell = document.createElement('td');
    line.appendChild(scoreCell);
    const score = document.createElement('img');
    scoreCell.appendChild(score);
    score.setAttribute('src', 'images/' + song + '_score' + i + '.png');
    score.setAttribute('id', song + '-score' + i);
  }
};


let s;


// 読み込み完了時の処理
window.addEventListener('load', () => {
  fetch('sorted_songs.json')
    .then(response => response.json())
    .then(data => createTables(data))
});