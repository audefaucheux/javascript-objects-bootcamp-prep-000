var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist (playlist, artistName, songTitle) {
  var playlist2 = artistName = "songTitle";
  return Object.assign(playlist, playlist2)

function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName;
  return playlist.artistName
}
