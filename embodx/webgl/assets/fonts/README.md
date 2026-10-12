# Viewer fonts

- `fira-bevy-0.19.1/`: the five unmodified faces shipped by `bevy_feathers`
  0.19.1. Their SIL licenses are included beside the files.
- `lucide-0.563.0.ttf`: unmodified `lucide.ttf` from the resolved `lucide-icons`
  0.563.0 crate. Its Unicode mapping must match that crate's `Icon` enum.
  `Lucide-LICENSE` comes from the upstream Lucide 0.563.0 release:
  <https://github.com/lucide-icons/lucide/blob/0.563.0/LICENSE>.

WASM loads these files from the served assets directory. Native builds embed
these same files. Keep filenames/directories versioned when changing bytes,
so a deployed font cannot be confused with an older cached revision.
Font ownership and packaging are documented in
[deployment](../../../docs/deployment.md#ui-font-assets).
