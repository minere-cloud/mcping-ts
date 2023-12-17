class MinecraftProtocol {
  static concat (chunks: Buffer[]) {
    let length = 0

    for (const chunk of chunks) {
      length += chunk.length
    }

    const buf = [
      MinecraftProtocol.writeVarInt(length),
      ...chunks
    ]

    return Buffer.concat(buf)
  }

  static writeString (val: string) {
    return Buffer.from(val)
  }

  static writeUShort (val: number) {
    return Buffer.from([val >> 8, val & 0xFF])
  }

  static writeVarInt (val: number) {
    // "VarInts are never longer than 5 bytes"
    // https://wiki.vg/Data_types#VarInt_and_VarLong
    const buf = Buffer.alloc(5)
    let written = 0

    for (;;) {
      if ((val & 0xFFFFFF80) === 0) {
        buf.writeUInt8(val, written++)
        break
      } else {
        buf.writeUInt8(val & 0x7F | 0x80, written++)
        val >>>= 7
      }
    }

    return buf.subarray(0, written)
  }
}

export default MinecraftProtocol