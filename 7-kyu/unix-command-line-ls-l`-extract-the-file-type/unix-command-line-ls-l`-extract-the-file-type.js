function linuxType(fileAttribute) {
  const types = {
    '-': 'file',
    'd': 'directory',
    'l': 'symlink',
    'c': 'character_file',
    'b': 'block_file',
    'p': 'pipe',
    's': 'socket',
    'D': 'door',
  };
  return types[fileAttribute[0]];
}