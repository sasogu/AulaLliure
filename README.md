# ISO build notes (AulaLliure)

This repository contains a Debian live-build configuration for the AulaLliure ISO.
Below is a concise summary of the work done and how to build the image.

## WARNING: unattended installation erases the target disk

This ISO is configured for unattended installation (preseed). When you boot the
installer entry, it will automatically partition and install to the first disk
it detects, wiping all data on that disk.

Usa esta ISO solo en equipos o máquinas virtuales donde sea seguro borrar el
disco de destino.

## What changed

- Removed unsupported live-build options from `debian-live/auto/config`:
  `--username`, `--full-name`, `--hostname`.
  These are now provided via preseed instead.
- Fixed Moksha hook to install `bodhi-info-moksha` via apt after adding the Bodhi repo
  (the direct `.deb` URL returned 404).
- Added `initramfs-tools` to `debian-live/config/package-lists/moksha.list.chroot`
  to ensure `update-initramfs` exists during `lb chroot_hacks`.

## How to build

From the project root:

```bash
cd /home/ISO/debian-live
sudo lb clean --purge
sudo lb build
```

The ISO is typically created in the same directory, with a name similar to:
`live-image-amd64.hybrid.iso`.

## Unattended install (preseed)

The unattended installation is controlled by the preseed file:
`debian-live/config/preseed/auto.cfg`.

It is already wired into the build via:
- `--debian-installer-preseedfile preseed/auto.cfg`
- `preseed/file=/cdrom/preseed/auto.cfg` in the live boot options.

## Troubleshooting

- If you see `update-initramfs: No such file or directory`, ensure
  `initramfs-tools` is listed in `debian-live/config/package-lists/moksha.list.chroot`
  and run `sudo lb clean --purge` before rebuilding.
- If `lb config` fails with "invalid arguments", remove unsupported options
  from `debian-live/auto/config` (as done above).
- If build fails downloading Bodhi packages, check the repo URLs in
  `debian-live/config/hooks/normal/20-install-moksha.chroot`.
