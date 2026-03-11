# Proof Assets (text-only manifest)

Binary image files are not committed in this repository because binary files are not supported in this workflow.

Use the mapping below to restore/copy the screenshots in environments that allow binary assets:

- `sc1` → base screenshot
- `sc2` → premium screenshot
- `sc3` → expansion screenshot

If your upload mount is available, source files are typically found under:

- `/tmp/user_uploaded_attachments/image_1.png` → `sc1`
- `/tmp/user_uploaded_attachments/image_2.png` → `sc2`
- `/tmp/user_uploaded_attachments/image_3.png` → `sc3`


Place the files in:

- `public/proofs/sc1.png`
- `public/proofs/sc2.png`
- `public/proofs/sc3.png`

The landing page reads them as `/proofs/sc1.png`, `/proofs/sc2.png`, and `/proofs/sc3.png`.
