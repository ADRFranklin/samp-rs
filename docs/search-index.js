var searchIndex = {};
searchIndex["samp_sdk"] = {"doc":"SA:MP SDK `samp_sdk` is a Rust lang bindings for original C SA:MP SDK","items":[[0,"macros","samp_sdk","Some useful macros to easy access and define natives.",null,null],[0,"args","","",null,null],[3,"Parser","samp_sdk::args","",null,null],[11,"new","","",0,null],[11,"next","","",0,null],[0,"consts","samp_sdk","AMX Constants.",null,null],[4,"Exports","samp_sdk::consts","",null,null],[13,"Align16","","",1,null],[13,"Align32","","",1,null],[13,"Align64","","",1,null],[13,"Allot","","",1,null],[13,"Callback","","",1,null],[13,"Cleanup","","",1,null],[13,"Clone","","",1,null],[13,"Exec","","",1,null],[13,"FindNative","","",1,null],[13,"FindPublic","","",1,null],[13,"FindPubVar","","",1,null],[13,"FindTagId","","",1,null],[13,"Flags","","",1,null],[13,"GetAddr","","",1,null],[13,"GetNative","","",1,null],[13,"GetPublic","","",1,null],[13,"GetPubVar","","",1,null],[13,"GetString","","",1,null],[13,"GetTag","","",1,null],[13,"GetUserData","","",1,null],[13,"Init","","",1,null],[13,"InitJIT","","",1,null],[13,"MemInfo","","",1,null],[13,"NameLength","","",1,null],[13,"NativeInfo","","",1,null],[13,"NumNatives","","",1,null],[13,"NumPublics","","",1,null],[13,"NumPubVars","","",1,null],[13,"NumTags","","",1,null],[13,"Push","","",1,null],[13,"PushArray","","",1,null],[13,"PushString","","",1,null],[13,"RaiseError","","",1,null],[13,"Register","","",1,null],[13,"Release","","",1,null],[13,"SetCallback","","",1,null],[13,"SetDebugHook","","",1,null],[13,"SetString","","",1,null],[13,"SetUserData","","",1,null],[13,"StrLen","","",1,null],[13,"UTF8Check","","",1,null],[13,"UTF8Get","","",1,null],[13,"UTF8Len","","",1,null],[13,"UTF8Put","","",1,null],[17,"SUPPORTS_VERSION","","",null,null],[17,"SUPPORTS_VERSION_MASK","","",null,null],[17,"SUPPORTS_AMX_NATIVES","","",null,null],[17,"SUPPORTS_PROCESS_TICK","","",null,null],[17,"PLUGIN_DATA_LOGPRINTF","","",null,null],[17,"PLUGIN_DATA_AMX_EXPORTS","","",null,null],[17,"PLUGIN_DATA_CALLPUBLIC_FS","","",null,null],[17,"PLUGIN_DATA_CALLPUBLIC_GM","","",null,null],[17,"AMX_ERR_NONE","","",null,null],[17,"AMX_ERR_EXIT","","",null,null],[17,"AMX_ERR_ASSERT","","",null,null],[17,"AMX_ERR_STACKERR","","",null,null],[17,"AMX_ERR_BOUNDS","","",null,null],[17,"AMX_ERR_MEMACCESS","","",null,null],[17,"AMX_ERR_INVINSTR","","",null,null],[17,"AMX_ERR_STACKLOW","","",null,null],[17,"AMX_ERR_HEAPLOW","","",null,null],[17,"AMX_ERR_CALLBACK","","",null,null],[17,"AMX_ERR_NATIVE","","",null,null],[17,"AMX_ERR_DIVIDE","","",null,null],[17,"AMX_ERR_SLEEP","","",null,null],[17,"AMX_ERR_INVSTATE","","",null,null],[17,"AMX_ERR_MEMORY","","",null,null],[17,"AMX_ERR_FORMAT","","",null,null],[17,"AMX_ERR_VERSION","","",null,null],[17,"AMX_ERR_NOTFOUND","","",null,null],[17,"AMX_ERR_INDEX","","",null,null],[17,"AMX_ERR_DEBUG","","",null,null],[17,"AMX_ERR_INIT","","",null,null],[17,"AMX_ERR_USERDATA","","",null,null],[17,"AMX_ERR_INIT_JIT","","",null,null],[17,"AMX_ERR_PARAMS","","",null,null],[17,"AMX_ERR_DOMAIN","","",null,null],[17,"AMX_ERR_GENERAL","","",null,null],[17,"AMX_FLAG_DEBUG","","",null,null],[17,"AMX_FLAG_COMPACT","","",null,null],[17,"AMX_FLAG_BYTEOPC","","",null,null],[17,"AMX_FLAG_NOCHECKS","","",null,null],[17,"AMX_FLAG_NTVREG","","",null,null],[17,"AMX_FLAG_JITC","","",null,null],[17,"AMX_FLAG_BROWSE","","",null,null],[17,"AMX_FLAG_RELOC","","",null,null],[17,"AMX_EXEC_MAIN","","",null,null],[17,"AMX_EXEC_CONT","","",null,null],[0,"data","samp_sdk","",null,null],[3,"logprintf","samp_sdk::data","",null,null],[7,"amx_functions","","",null,null],[11,"deref","","",2,{"inputs":[{"name":"self"}],"output":{"name":"mutex"}}],[11,"initialize","","",2,{"inputs":[{"name":"self"}],"output":null}],[0,"types","samp_sdk","",null,null],[3,"AMX","samp_sdk::types","",null,null],[12,"base","","",3,null],[12,"data","","",3,null],[12,"callback","","",3,null],[12,"debug","","",3,null],[12,"cip","","",3,null],[12,"frm","","",3,null],[12,"hea","","",3,null],[12,"hlw","","",3,null],[12,"stk","","",3,null],[12,"stp","","",3,null],[12,"flags","","",3,null],[12,"usertags","","",3,null],[12,"userdata","","",3,null],[12,"error","","",3,null],[12,"paramcount","","",3,null],[12,"pri","","",3,null],[12,"alt","","",3,null],[12,"reset_stk","","",3,null],[12,"reset_hea","","",3,null],[12,"sysreq_d","","",3,null],[3,"AMX_NATIVE_INFO","","",null,null],[12,"name","","",4,null],[12,"func","","",4,null],[3,"AMX_FUNCSTUB","","",null,null],[12,"address","","",5,null],[12,"name","","",5,null],[3,"FUNCSTUBNT","","",null,null],[12,"address","","",6,null],[12,"nameofs","","",6,null],[3,"AMX_HEADER","","",null,null],[12,"size","","",7,null],[12,"magic","","",7,null],[12,"file_version","","",7,null],[12,"amx_version","","",7,null],[12,"flags","","",7,null],[12,"defsize","","",7,null],[12,"cod","","",7,null],[12,"dat","","",7,null],[12,"hea","","",7,null],[12,"stp","","",7,null],[12,"cip","","",7,null],[12,"publics","","",7,null],[12,"natives","","",7,null],[12,"libraries","","",7,null],[12,"pubvars","","",7,null],[12,"tags","","",7,null],[12,"nametable","","",7,null],[6,"Cell","","",null,null],[6,"Ucell","","",null,null],[6,"AmxNative","","",null,null],[6,"AmxCallback","","",null,null],[6,"AmxDebug","","",null,null],[6,"Align16","","",null,null],[6,"Align32","","",null,null],[6,"Allot","","",null,null],[6,"Callback","","",null,null],[6,"Cleanup","","",null,null],[6,"Clone","","",null,null],[6,"Exec","","",null,null],[6,"FindNative","","",null,null],[6,"FindPublic","","",null,null],[6,"FindPubVar","","",null,null],[6,"FindTagId","","",null,null],[6,"Flags","","",null,null],[6,"GetAddr","","",null,null],[6,"GetNative","","",null,null],[6,"GetPublic","","",null,null],[6,"GetPubVar","","",null,null],[6,"GetString","","",null,null],[6,"GetTag","","",null,null],[6,"GetUserData","","",null,null],[6,"Init","","",null,null],[6,"InitJIT","","",null,null],[6,"MemInfo","","",null,null],[6,"NameLength","","",null,null],[6,"NativeInfo","","",null,null],[6,"NumNatives","","",null,null],[6,"NumPublics","","",null,null],[6,"NumPubVars","","",null,null],[6,"NumTags","","",null,null],[6,"Push","","",null,null],[6,"PushArray","","",null,null],[6,"PushString","","",null,null],[6,"RaiseError","","",null,null],[6,"Register","","",null,null],[6,"Release","","",null,null],[6,"SetCallback","","",null,null],[6,"SetDebugHook","","",null,null],[6,"SetString","","",null,null],[6,"SetUserData","","",null,null],[6,"StrLen","","",null,null],[6,"UTF8Check","","",null,null],[6,"UTF8Get","","",null,null],[6,"UTF8Len","","",null,null],[6,"UTF8Put","","",null,null],[6,"Logprintf_t","","",null,null],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"amx"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"amx_native_info"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"amx_funcstub"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"funcstubnt"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"amx_header"}}],[0,"amx","samp_sdk","",null,null],[3,"AMX","samp_sdk::amx","AMX struct that holds raw `types::AMX` pointer.",null,null],[4,"AmxError","","Custom error type for AMX errors. Can be casted from i32",null,null],[13,"Exit","","",8,null],[13,"Assert","","",8,null],[13,"StackError","","",8,null],[13,"Bounds","","",8,null],[13,"MemoryAccess","","",8,null],[13,"InvalidInstruction","","",8,null],[13,"StackLow","","",8,null],[13,"HeapLow","","",8,null],[13,"Callback","","",8,null],[13,"Native","","",8,null],[13,"Divide","","",8,null],[13,"Sleep","","",8,null],[13,"InvalidState","","",8,null],[13,"Memory","","",8,null],[13,"Format","","",8,null],[13,"Version","","",8,null],[13,"NotFound","","",8,null],[13,"Index","","",8,null],[13,"Debug","","",8,null],[13,"Init","","",8,null],[13,"UserData","","",8,null],[13,"InitJit","","",8,null],[13,"Params","","",8,null],[13,"Domain","","",8,null],[13,"General","","",8,null],[13,"Unknown","","",8,null],[6,"AmxResult","","",null,null],[11,"new","","Convert raw `types::AMX` pointer.",9,null],[11,"register","","Register natives functions",9,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"amxresult"}}],[11,"allot","","Allocates memory cells inside AMX.",9,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"amxresult"}}],[11,"release","","Frees all memory above input address.",9,{"inputs":[{"name":"self"},{"name":"cell"}],"output":{"name":"amxresult"}}],[11,"get_address","","Get an address of a reference value given to native.",9,{"inputs":[{"name":"self"},{"name":"cell"}],"output":{"name":"amxresult"}}],[11,"push","","Push a primitive value or an address to AMX stack.",9,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"amxresult"}}],[11,"push_array","","Push a slice to AMX stack.",9,null],[11,"push_string","","",9,{"inputs":[{"name":"self"},{"name":"str"},{"name":"bool"}],"output":{"generics":["cell"],"name":"amxresult"}}],[11,"exec","","Exec an AMX function.",9,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"generics":["i64"],"name":"amxresult"}}],[11,"find_public","","Return an index of a public by its name.",9,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["i32"],"name":"amxresult"}}],[11,"find_native","","Return an index of a native by its name.",9,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["i32"],"name":"amxresult"}}],[11,"find_pubvar","","",9,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["i32"],"name":"amxresult"}}],[11,"string_len","","Get length of a string.",9,null],[11,"get_string","","Get a string from AMX.",9,null],[11,"raise_error","","Raise an AMX error.",9,{"inputs":[{"name":"self"},{"name":"amxerror"}],"output":{"name":"amxresult"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",8,{"inputs":[{"name":"i32"}],"output":{"name":"self"}}],[14,"lazy_static","samp_sdk","",null,null],[14,"natives","","Clear macros that makes a new `Vec<AMX_NATIVE_INFO>`.",null,null],[14,"new_plugin","","Hides ugly C code from your eyes.",null,null],[14,"log","","Useful macro to log to SA:MP server output.",null,null],[14,"define_native","","Define native and hide raw C export functions.",null,null],[14,"expand_args","","",null,null],[14,"args_count","","Get count of passed arguments in a native.",null,null],[14,"exec","","Executes `AMX::exec` with given arguments.",null,null],[14,"exec_public","","Finds a public and executes `AMX::exec` with given arguments.",null,null],[14,"exec_native","","Finds a native function and executes `AMX::exec` with given arguments.",null,null],[14,"get_string","","Gets a string from a raw pointer to `Cell`.",null,null],[14,"get_array","","Get a slice (an array) from arguments.",null,null]],"paths":[[3,"Parser"],[4,"Exports"],[3,"logprintf"],[3,"AMX"],[3,"AMX_NATIVE_INFO"],[3,"AMX_FUNCSTUB"],[3,"FUNCSTUBNT"],[3,"AMX_HEADER"],[4,"AmxError"],[3,"AMX"]]};
initSearch(searchIndex);