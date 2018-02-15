# Trash Back

<img src="banners/banner_header_1000x400.png"/>

When you [delete a file in MacOS](https://support.apple.com/kb/PH25075), its original locations is [stored](https://en.wikipedia.org/wiki/.DS_Store) in the `.DsStore` hidden files in case you want to restore it. Recent versions of macOS have the ability to put stuff in your Trash back where it came from, lickety-split, and it’s way faster than dragging and dropping. So as you know, if you click on the trash icon in your Dock, you will see the items you have, well, trashed. Right-click or Control-click on any file (or hold down Command to click and select multiple items, then Control-click), and you will see the **Put Back** option. The only problem is that it let us do it for only one item at the time. Motivated by this issues and thanks to [Giacomo Balli](http://giacomoballi.com/), we created this repository to help you.

<a href="https://www.patreon.com/oppr" target="_blank">
<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## The Issue

To undrstand the issue we are talking about just follow the next figures.

1. Open the Trash.

<img src="assets/screen1.png"/>

2. Right-click on any file, and you’ll see the **Put Back** option.

<img src="assets/screen2.png"/>

3. Do this for each file you have.

As you can see you have the tremendeus tedeus solutions of clicking **Put Back** each time you want to put back a file. However, there is a smarter solution for it. Follow the next steps of this [README](https://github.com/opprDev/trash-back/blob/master/README.md) file.

## The Solution

The solutions is an [AppleScript](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) that puts back all items in the Trash. Just open "AppleScript Editor" and copy/paste the lines below, then run the script as many times as needed. If you have any doubts of how to do it, just follow the [Scripting with AppleScript](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptX/Concepts/work_with_as.html) guide.

```AppleScript
tell application "System Events"
  tell process "Finder"
    repeat 100 times
      tell application "Finder" to open trash
      tell application "Finder" to activate
      key code 126
      key down command
      key code 51
      key up command
      delay 0.2 -- adjust delay as needed
    end repeat
  end tell
end tell
```

## Usage

[AppleScript](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) is a language used to automate the actions of the [Macintosh Operating System (MacOS)](https://en.wikipedia.org/wiki/Macintosh_operating_systems) and many of its applications. The purpose of this repository is to automate sevreal actions of Trash management to put back several items. For that, the computer reads the sequential instructions contained our [`scripts`](https://github.com/opprDev/trash-back/tree/master/scripts), and then communicates those instructions to targeted the [MacOS Finder](https://support.apple.com/en-ca/HT201732). The targeted Trash items are read from the communicated instructions, and then perform the actions of putting back the items.

### Clone

Start by cloning the repository to your local machine so you may begin use our solution. This local copy is called your local repository.

```
git clone git@github.com:opprDev/trash-back.git
cd trash-back
```

### Install

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. The `npm` can install packages in [local or global](https://stackoverflow.com/questions/29530459/what-is-the-difference-between-local-and-global-module-in-node-js-when-to-use-l) mode. In local mode it installs the package in a `node_modules` folder in your parent working directory. This location is owned by the current user.

```
npm install
```

### Run

You have several ways to run the scripts in your local machine. This repository explains how to run locally installed solutions of this repository. The running instructions are as follows.

#### Node

The famous [npm](https://www.npmjs.com/) is most commonly used for managing [Node.js](https://nodejs.org/) modules, but it works for [AppleScript](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) too when combined with [some libraries](https://www.npmjs.com/browse/keyword/applescript). If you have some question about how to `start` via `npm start` just follow the [Documentation](https://docs.npmjs.com/cli/build) and we hope it will help you.

1. Globally install the `trash-back` package:

```
npm install -g trash-back
```

2. Clone the repository:

```
git@github.com:opprDev/trash-back.git
```

3. Locally install the `trash-back` package:

```
npm install
```

2. Run the following command as a means to symlink a package folder:

```
npm link
```

3. Run the main command:

```
trash-back
```

#### Terminal

Running [AppleScript](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) greatly increases what you can do remotely from the command line, and enables a lot of cool tricks that are hard to do otherwise. While you can run whole scripts in the command line, this way of running is only about running can also log into a remote computer (using ssh) and run the [AppleScript](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) on that computer, via the `osascript` command. The `osascript` command can also run any other [Open Scripting Architecture](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptX/Concepts/osa.html) language using the `-l` modifier.

```
osascript scripts/trash-back.scpt
```

#### AppleScript Editor

The "user friendly" way to do this task. If you have any doubts just follow [The Ultimate Beginner's Guide To AppleScript](https://computers.tutsplus.com/tutorials/the-ultimate-beginners-guide-to-applescript--mac-3436) information.

1. Open the AppleScript Editor;

<img src="assets/screen3.png"/>

2. Copy-paste the [code](https://github.com/opprDev/trash-back#the-solution) inside the Editor and press **Run**;

<img src="assets/screen4.png"/>

## About

This repository was first created by [Francisco Maria Calisto](http://www.franciscocalisto.me/) ([FMCalisto](https://github.com/FMCalisto)) using the basics of the [AppleScripts](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) from [Giacomo Balli](http://giacomoballi.com/). At the end we used a [`npm`](https://www.npmjs.com/) solution called [`node-osascript`](https://www.npmjs.com/package/node-osascript), a node solution from [Fabrice Weinberg](https://www.npmjs.com/~fweinb) ([FWeinb](https://github.com/FWeinb)).

### Authors

- [Francisco Maria Calisto](http://www.franciscocalisto.me/) ([FMCalisto](https://github.com/FMCalisto))

### Acknowledgements

- [Giacomo Balli](http://giacomoballi.com/)

- [Fabrice Weinberg](https://www.npmjs.com/~fweinb) ([FWeinb](https://github.com/FWeinb))
