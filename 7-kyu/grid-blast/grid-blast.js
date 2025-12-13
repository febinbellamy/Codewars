const fire = (x,y) => {
  return [
    ['top left',    'top middle',    'top right'],
    ['middle left', 'center',        'middle right'],
    ['bottom left', 'bottom middle', 'bottom right']
  ][y][x];
}