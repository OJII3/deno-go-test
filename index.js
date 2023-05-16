import * as _ from "./.wasm/wasm_exec.js";

const go = new window.Go();
const f = await Deno.open("./.wasm/main.wasm");
const bytes = await Deno.readAll(f);
const inst = await WebAssembly.instantiate(bytes, go.importObject);
go.run(inst.instance);
