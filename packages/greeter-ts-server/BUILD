load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")

# Simpler: Bazel package 1:1 with npm package
# Only create a BUILD file for each package.json
# gazelle:generation_mode update_only
npm_link_all_packages(name = "node_modules")

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = [":__subpackages__"],
)

js_binary(
    name = "start",
    data = [
        "package.json",
        ":node_modules",
    ],
    entry_point = "src/server.js",
)

ts_project(
    name = "greeter-ts-server",
    srcs = ["src/server.ts"],
    tsconfig = ":tsconfig",
    deps = [
        ":node_modules/@grpc/grpc-js",
        ":node_modules/@my-org/example-proto",  # ->
        # bazel-out/darwin_arm64-fastbuild/bin/external/protobuf+/src/google/protobuf/_virtual_imports/descriptor_proto/google/protobuf/descriptor_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/protobuf+/src/google/protobuf/_virtual_imports/duration_proto/google/protobuf/duration_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/protobuf+/src/google/protobuf/_virtual_imports/timestamp_proto/google/protobuf/timestamp_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/protobuf+/src/google/protobuf/_virtual_imports/wrappers_proto/google/protobuf/wrappers_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/calendar_period_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/color_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/date_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/datetime_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/dayofweek_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/decimal_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/expr_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/fraction_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/interval_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/latlng_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/localized_text_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/money_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/month_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/phone_number_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/postal_address_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/quaternion_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/google/type/timeofday_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/payment/v1alpha1/payment_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/pet/v1/pet_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/external/rules_buf++buf+buf_deps/validate/validate_pb.d.ts
        # bazel-out/darwin_arm64-fastbuild/bin/proto/example/v1/_virtual_imports/examplev1_proto/example/v1/greeter_pb.d.ts
        ":node_modules/get-port",
    ],
)
