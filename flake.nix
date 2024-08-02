{
  description = "TypeScript CEL";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixdoc.url = "github:nix-community/nixdoc";
  };

  outputs = { self, nixpkgs, flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; }
      {
        systems = [
          "x86_64-linux"
        ];

        flake = { };

        perSystem = { config, self', inputs', pkgs, system, ... }:
          let

            typescript = pkgs.nodePackages.typescript;

            antlr4 = pkgs.antlr4;

          in
          {
            devShells.default = pkgs.mkShell {
              nativeBuildInputs = [
                antlr4         
                typescript
                pkgs.nodejs
              ];

              shellHook = ''
                export PATH=$PATH:${typescript}/bin
              '';
            };

            packages = {
              default = typescript;
            };
          };
      };
}
