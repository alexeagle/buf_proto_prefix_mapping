# Example of using Bazel with JS/proto

Goals:

1. Use buf to manage external proto dependencies, fetching them from Buf Schema Registry
1. Gazelle should generate all BUILD file content
1. A TypeScript application serves the proto-defined API
1. Use of `proto_library#strip_import_prefix` doesn't break things
