var playlist = {artistName: 'songTitle'};

function updatePlaylist (playlist, "Phil Ochs", songTitle) {
  playlist.[Phil Ochs] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
