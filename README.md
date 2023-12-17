# mcping-ts
A modern Typescript fork of [mcping-js](https://github.com/Cryptkeeper/mcping-js) library for querying [Minecraft Java Edition](https://minecraft.net) servers using the vanilla [Server List Ping](https://wiki.vg/Server_List_Ping) protocol.

## Usage
```javascript
import mcping from "mcping-ts"

// 25565 is the default Minecraft Java Edition multiplayer server port
// The port may be omitted and will default to 25565
const server = new mcping.MinecraftServer('mc.hypixel.net', 25565)

server.ping(timeout, protocolVersion, (err, response) => {
	// ...
})
```

`protocolVersion` is ever changing as Minecraft updates. See [protocol version numbers](https://wiki.vg/Protocol_version_numbers) for a complete and updated listing.

If successful, `response` will be a parsed copy of the [Response](https://wiki.vg/Server_List_Ping#Response) packet.

## Compatibility
1. This does not support Minecraft's [legacy ping protocol](https://wiki.vg/Server_List_Ping#1.6) for pre-Minecraft version 1.6 servers.
2. This does not support the ```Ping``` or ```Pong``` behavior of the [Server List Ping](https://wiki.vg/Server_List_Ping) protocol. If you wish to determine the latency of the connection do you should do so manually. 
