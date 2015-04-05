# Cinnamon's Nemo Actions

This repo will contain common action scripts for Cinnamon's Nemo file manager,
used in my daily activities.

## Requirements

* Cinnamon's Nemo file manager (you don't say, huh)
* Node.js

## Installation

First, we clone this repo on our hard drive (Downloads in this example):

```
> cd ~/Downloads
> git clone https://github.com/Ragnarokkr/nemo-actions.git
> cd nemo-actions
```

then, install all its dependencies:

```
> npm install --production
```

finally, run the installation script that will symlink the required
files into the Nemo's action directory (`$HOME/.local/share/nemo/actions`):

```
> ./scripts/install.js
```

If we want to remove the installed symlinks, we can do it by running:

```
> ./scripts/uninstall.js
```

That's it. 

## Customization

Each script is specific to a particular job, but it has been designed to
provide an as general as possible interface in order to allow for
customizing Nemo action scripts only, without touch the base Node script.

Inside the repo there's a directory named **templates** which contains 
customizable `.nemo_action` files.

Customization can be done by copying the desired action script from template
directory to Nemo's action directory, then editing it to fit your needs.

**NOTE: only the `.nemo_action` files should be copied and edited. Javascript
scripts should be edited ONLY if you know what are you doing.**

## Compatibility

The scripts have been tested only with Gnome 3.14 on Arch Linux.

## License

See the LICENSE file.
