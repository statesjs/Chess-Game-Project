import { FENChar, Coords, Color } from '../models';
import { Piece } from './pieces';

export class Knight extends Piece {
  protected override _FENChar: FENChar;
  protected override _directions: Coords[] = [
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
  ];

  constructor(private pieceColor: Color) {
    super(pieceColor);
    this._FENChar =
      pieceColor === Color.White ? FENChar.WhiteKnight : FENChar.BlackKing;
  }
}
