var playlist = {artistName: 'songTitles'};

function updatePlaylist (playlist, artistName, songTitles) {
  return Object.assign({}, playlist, { [artistName]: songTitles });
}
