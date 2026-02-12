"Locally declared toolchains resolving to tools managed in this repo"

load("@aspect_rules_js//js:proto.bzl", "js_proto_toolchain")

js_proto_toolchain(
    name = "gen_es_protoc_plugin",
    plugin_bin = "//tools:protoc_gen_es",
    plugin_name = "es",
    # See https://github.com/bufbuild/protobuf-es/tree/main/packages/protoc-gen-es#plugin-options
    plugin_options = [
        "keep_empty_files=true",
        "target=js+dts",
        "import_extension=js",
    ],
    runtime = "//:node_modules/@bufbuild/protobuf",
)
