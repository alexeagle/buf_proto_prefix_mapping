load("@protobuf//bazel:proto_library.bzl", "proto_library")

proto_library(
    name = "examplev1_proto",
    srcs = ["greeter.proto"],
    strip_import_prefix = "/proto",
    visibility = ["//visibility:public"],
    deps = [
        "@buf_deps//pet/v1:pet_v1_proto",
        "@buf_deps//validate:validate_proto",
    ],
)
