/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_client_free(a: number): void;
export function signingKeyNew(a: number): void;
export function signingKeySign(a: number, b: number, c: number, d: number, e: number): void;
export function verifyingKeyNew(a: number, b: number, c: number): void;
export function verifyingKeyVerify(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function jsonrpcClientNew(a: number, b: number, c: number): void;
export function accountNew(a: number, b: number, c: number, d: number, e: number): number;
export function accountAddress(a: number, b: number): void;
export function accountChainId(a: number, b: number): void;
export function accountSetBlockId(a: number, b: number, c: number, d: number): void;
export function accountExecuteRaw(a: number, b: number): number;
export function waitForTransaction(a: number, b: number, c: number): number;
export function hashGetContractAddress(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
export function accountDeployBurner(a: number): number;
export function client_getEntities(a: number, b: number, c: number): number;
export function client_getEntitiesByKeys(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function client_getModelValue(a: number, b: number, c: number, d: number, e: number): number;
export function client_addModelsToSync(a: number, b: number, c: number): number;
export function client_removeModelsToSync(a: number, b: number, c: number): number;
export function client_onSyncModelChange(a: number, b: number, c: number, d: number): void;
export function client_onEntityUpdated(a: number, b: number, c: number, d: number): number;
export function createClient(a: number, b: number, c: number): number;
export function __wbg_queuingstrategy_free(a: number): void;
export function queuingstrategy_highWaterMark(a: number): number;
export function __wbg_intounderlyingsource_free(a: number): void;
export function intounderlyingsource_pull(a: number, b: number): number;
export function intounderlyingsource_cancel(a: number): void;
export function __wbg_intounderlyingbytesource_free(a: number): void;
export function intounderlyingbytesource_type(a: number, b: number): void;
export function intounderlyingbytesource_autoAllocateChunkSize(a: number): number;
export function intounderlyingbytesource_start(a: number, b: number): void;
export function intounderlyingbytesource_pull(a: number, b: number): number;
export function intounderlyingbytesource_cancel(a: number): void;
export function __wbg_intounderlyingsink_free(a: number): void;
export function intounderlyingsink_write(a: number, b: number): number;
export function intounderlyingsink_close(a: number): number;
export function intounderlyingsink_abort(a: number, b: number): number;
export function __wbg_readablestreamgetreaderoptions_free(a: number): void;
export function readablestreamgetreaderoptions_mode(a: number): number;
export function __wbg_pipeoptions_free(a: number): void;
export function pipeoptions_preventClose(a: number): number;
export function pipeoptions_preventCancel(a: number): number;
export function pipeoptions_preventAbort(a: number): number;
export function pipeoptions_signal(a: number): number;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function wasm_bindgen__convert__closures__invoke1_mut__hf98f9cc6c53368fe(a: number, b: number, c: number): void;
export function wasm_bindgen__convert__closures__invoke1_mut__h43d945927ecd0948(a: number, b: number, c: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__h3515c005283ee1fc(a: number, b: number, c: number, d: number): void;
