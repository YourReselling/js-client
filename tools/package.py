#!/usr/bin/env python3
"""Package this SDK independently, without files from neighboring repositories."""
import hashlib
import json
import subprocess
import zipfile
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
manifest=json.loads((ROOT/'release.json').read_text())
output=ROOT/'artifacts'
output.mkdir(exist_ok=True)
if manifest['language']=='js':
    subprocess.run(['npm','run','build'],cwd=ROOT,check=True)
    result=subprocess.run(['npm','pack','--json','--pack-destination',str(output)],cwd=ROOT,check=True,capture_output=True,text=True)
    archive=output/json.loads(result.stdout)[0]['filename']
else:
    archive=output/(manifest['repository']+'-'+manifest['version']+'.zip')
    directories=['docs','spec']+(['src','tests'] if manifest['language']=='php' else ['testdata'])
    files=[ROOT/name for name in ['README.md','LICENSE']+(['composer.json','composer.lock'] if manifest['language']=='php' else ['go.mod'])]
    if manifest['language']=='go':files+=sorted(ROOT.glob('*.go'))
    for directory in directories:files+=sorted((ROOT/directory).rglob('*'))
    with zipfile.ZipFile(archive,'w',compression=zipfile.ZIP_DEFLATED) as package:
        for source in files:
            if source.is_symlink():raise ValueError('Symlink in release: '+str(source))
            if source.is_file() and source.name!='.DS_Store':package.write(source,source.relative_to(ROOT).as_posix())
checksum=hashlib.sha256(archive.read_bytes()).hexdigest()
archive.with_name(archive.name+'.sha256').write_text(checksum+'  '+archive.name+'\n')
print(archive)
