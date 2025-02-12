class MinecraftBufferReader {
  private _buffer
  private _offset

  constructor(buffer: Buffer) {
    this._buffer = buffer
    this._offset = 0
  }

  offset() {
    return this._offset
  }

  readString() {
    const length = this.readVarInt()
    const val = this._buffer.toString('utf-8', this._offset, this._offset + length)

    // Advance the reader index forward by the string length
    this._offset += length

    return val
  }

  readVarInt() {
    let val = 0
    let count = 0

    for (; ;) {
      const b = this._buffer.readUInt8(this._offset++)

      val |= (b & 0x7F) << count++ * 7

      if ((b & 0x80) != 128) {
        break
      }
    }

    return val
  }
}

export default MinecraftBufferReader