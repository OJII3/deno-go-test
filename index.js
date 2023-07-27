import * as _ from "./.wasm/wasm_exec.js";

import { readAll } from "https://deno.land/std@0.187.0/streams/read_all.ts";

const go = new window.Go();
const f = await Deno.open("./.wasm/main.wasm");
const bytes = await readAll(f);
const inst = await WebAssembly.instantiate(bytes, go.importObject);
go.run(inst.instance);
