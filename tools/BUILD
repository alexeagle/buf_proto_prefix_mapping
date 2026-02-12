"""
Build supporting tools.

The tools subpackage is used to define build rules and configurations for tools
used throughout the repository. Firstparty tools not required for build support
should live elsewhere.

Of special note is that we're using the `bazel_env.bzl` tool to re-export tools
used under Bazel as a `bin/` tree which can be added to the `$PATH`. The
included `.envrc` automates this for you.

"""

load("@bazel_env.bzl", "bazel_env")
load("@bazelrc-preset.bzl", "bazelrc_preset")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//tools:@bufbuild/protoc-gen-es/package_json.bzl", gen_es_bin = "bin")
load("@npm//tools:yo/package_json.bzl", yo_bin = "bin")

package(default_visibility = ["//visibility:public"])

bazelrc_preset(
    name = "preset",
    doc_link_template = "https://registry.build/flag/bazel?filter={flag}",
)

npm_link_all_packages(name = "node_modules")

yo_bin.yo_binary(name = "yo")

gen_es_bin.protoc_gen_es_binary(name = "protoc_gen_es")

bazel_env(
    name = "bazel_env",
    toolchains = {
        "nodejs": "@nodejs_toolchains//:resolved_toolchain",
        "prettier": "//tools/format:prettier",
    },
    # NB: all entries will be eagerly fetched when this rule is run
    tools = {
        # Mapping from tool binary name ($PATH entry) to Bazel label
        "aspect": "@multitool//tools/aspect",
        "buildifier": "@buildifier_prebuilt//:buildifier",
        "buildozer": "@multitool//tools/buildozer",
        "buf": "@rules_buf_toolchains//:buf",
        "format": "//tools/format:format",
        "ibazel": "@multitool//tools/ibazel",
        "node": "$(NODE_PATH)",
        "npm": "$(NPM_PATH)",
        "pnpm": "@pnpm",
        "yo": ":yo",
    },
)
