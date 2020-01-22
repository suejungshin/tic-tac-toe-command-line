process.stdin.setEncoding('utf8');

let board = [ [null, null, null],
              [null, null, null],
              [null, null, null]];

console.log(board);

let args = process.argv;

const xMove = (row, column) => {
  board[row][column] = 'X';
  return;
}

xMove(args[2], args[3]);
console.log(board);


process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});