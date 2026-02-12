load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@gazelle//:def.bzl", "gazelle")
load("@npm//:defs.bzl", "npm_link_all_packages")

package(default_visibility = ["//visibility:public"])

# TODO: remove once https://github.com/aspect-build/aspect-cli/issues/560 done
# gazelle:js_npm_package_target_name pkg
npm_link_all_packages(name = "node_modules")

js_library(
    name = "eslintrc",
    srcs = ["eslint.config.mjs"],
    deps = [
        ":node_modules/@eslint/js",
        ":node_modules/typescript-eslint",
    ],
)

js_library(
    name = "prettierrc",
    srcs = ["prettier.config.cjs"],
    deps = [],
)

# It's faster to avoid type-checking in a devserver when using monorepo packages.
# If you commonly ship your npm packages outside the repo, change this to "npm_package"
# gazelle:js_package_rule_kind js_library

# We prefer BUILD instead of BUILD.bazel
# gazelle:build_file_name BUILD
# gazelle:exclude githooks/*
# Workaround https://github.com/bazel-contrib/bazel-gazelle/issues/2001
# gazelle:map_kind proto_library proto_library @protobuf//bazel:proto_library.bzl
# Seems like a bug in the buf gazelle extension.
# It wants to write @buf_deps//pet/v1:v1_proto
# gazelle:resolve proto pet/v1/pet.proto @buf_deps//pet/v1:pet_v1_proto
gazelle(
    name = "gazelle",
    env = {
        "ENABLE_LANGUAGES": ",".join([
            "buf",
            "starlark",
            "js",
            "proto",
        ]),
    },
    gazelle = "@multitool//tools/gazelle",
)

# FIXME: can we get this to work?
# Then the MODULE.bazel would not have to repeat the buf dependencies.
# gazelle(
#     name = "buf-update-repos",
#     args = [
#         "--from_file=buf.lock",
#         "-to_macro=buf_deps.bzl%buf_deps",
#         "-prune",
#     ],
#     command = "update-repos",
#     gazelle = "@multitool//tools/gazelle",
# )
