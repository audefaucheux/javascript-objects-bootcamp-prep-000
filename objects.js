var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist (playlist, artistName, songTitle) {
  update playlist.artistName = songTitle;
  return playlist.artistName
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName;
  return playlist
}
