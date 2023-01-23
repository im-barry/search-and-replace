# search-and-replace
Little nodejs script that alters text files.

In the script `link-to-local.js` descripes what files to alter.
`change-lines.js` actualy changes and updates the files discriped by `link-to-local.js`

This script was made to link "package.json dependencies" to the local packages.


Running the script, just call: `node link-to-local`

I have created a alias in my .bashrc like this: `alias link-local="node ~/sites/search-and-replace/link-to-local.js"`
