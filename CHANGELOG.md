# 📜 Change Log: The Marauder's Map of Updates

All notable changes to the `harry-potter-language` extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]
_A blank scroll, ready for future spells..._

---

## [0.0.9] - Housekeeping Charms
### Added
- **`CHANGELOG.md`:** This file was created to track the magical evolution of the language.
- **New Icon:** Updated the extension's icon to a new, more magical design. 🦉

### Changed
- **Project Cleanliness:** Updated the `.gitignore` file to properly ignore pesky system files like `__pycache__` and `.DS_Store`, keeping the repository clean.

---
### ⚡ Why is Version 0.0.8 Missing?
If you’re hunting for `v0.0.8` in this repo… stop searching, young wizard. 🧙‍♂️.
The number **8** is *notorious for being unlucky in the Harry Potter universe*:

- In *Goblet of Fire*, during the **final maze task**, Harry’s turn lined up with the number 8 — and it led straight to Voldemort’s return. ☠️
- Quidditch chaos also struck Harry around the 8th minute in an early match, nearly knocking him off his broom. 🧹💨

Unlike the lucky **7** (the most magical number), **8 brought danger and misery**. So, in true wizarding spirit, I’ve skipped version **0.0.8** entirely. ✨

We move straight from `0.0.7` to `0.0.9` — because no one wants Voldemort hiding inside their extension. 🪄💻

---

## [0.0.7] - The Mending Charm Update
### Added
- **`ReparoAt` Spell:** Introduced a powerful new spell for in-place modification of list elements, essential for sorting algorithms.
  - *Syntax:* `ReparoAt(list, index, newValue)`

### Fixed
- **List Element Assignment:** Corrected a syntax error that occurred when trying to use `Reparo` on a list element directly (e.g., `Reparo myList/index = value`). `ReparoAt` is now the correct way to do this.

---

## [0.0.6] - The Potions Class Update
### Added
- **Integer Division (`//`) Operator:** Added a new operator to perform division that always results in a whole number, preventing floating-point comparison issues.

---

## [0.0.5] - Charms & Transfiguration
### Changed
- **`Measure` Spell Enhancement:** The `Measure` spell is now more powerful and can be used on both `Lists` (to get element count) and `Strings` (to get character count).

### Added
- **String Indexing:** You can now get a single character from a `String` using the `/` operator, just like with lists.
  - *Example:* `"Lumos" / 0` returns `"L"`.

---

## [0.0.4] - The Spell-Crafting Update
### Added
- **`Reparo` Keyword:** Separated variable creation from updating. `Scroll` is now only for creating variables, and `Reparo` must be used to change the value of an existing one.
- **`Murmur` Spell:** A new spell for printing that keeps the cursor on the same line.
- **`AccioNum` Spell:** A new spell to get input from the user that is automatically a `Number`.

---

## [0.0.3] - The Cross-Platform Potions Update
### Added
- **Typecasting Spells (`Numeris` & `Verbis`):** Introduced spells to explicitly convert values between `String` and `Number` types.

### Fixed
- **Windows Compatibility:** Changed the interpreter command from `python3` to `python` to ensure the extension works on standard Windows installations.

---

## [0.0.2] - The Divination Update
### Added
- **String & List Comparison:** Taught the interpreter how to compare two `Strings` or two `Lists` for equality (`==`) and inequality (`!=`).

### Fixed
- **Emoji Support:** Fixed a `UnicodeDecodeError` on some systems by forcing the interpreter to read files with UTF-8 encoding, allowing for magical emojis 🦁🐍.

---

## [0.0.1] - The First Incantation
### Added
- **Initial Release of the Harry Potter Language!**
- **Core Language Features:** Variables (`Scroll`), I/O (`Revelio`, `Accio`), conditionals (`Expecto`/`Patronum`), loops (`Repeat`/`Loop`), and functions (`Spell`).
- **VS Code Extension:** Full support with syntax highlighting and a "Run" button.