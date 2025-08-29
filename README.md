# Harry Potter Language 🪄⚡

Welcome, witches and wizards!  
This is the official **VS Code extension** for the **Harry Potter programming language**, where you write code as powerful spells.

---

## ✨ Features
- **Enchanting Syntax Highlighting**: All your spells, keywords, and magical constants will light up with distinct colors.
- **Instant Spell Casting**: Run your `.magic` files directly from the editor with a simple click or keyboard shortcut.
- **Interactive Terminal**: Your spells come to life in the VS Code terminal, perfect for interactive programs.

---

## 📖 Spellbook: Incantations & Their Powers

Here’s your quick reference guide to all the magical keywords and their Muggle equivalents ⚡🪄

| 🪄 Spell / Incantation | 🖥️ Programming Concept | 📜 Description |
|------------------------|------------------------|----------------|
| `Scroll`              | **VAR**                | Declares a new variable to store a value. |
| `Revelio`             | **PRINT**              | Prints a value to the terminal. |
| `Accio`               | **INPUT**              | Gets input from the user. |
| `Expecto ... Cast`    | **IF ... THEN**        | Checks if a condition is true. |
| `Patronum`            | **ELSE**               | The alternative block for an `Expecto` condition. |
| `Also`                | **ELIF**               | “Else if” condition. |
| `Repeat ... Until`    | **FOR**                | A loop that repeats a set number of times. |
| `Loop ... Cast`       | **WHILE**              | A loop that continues as long as a condition is `Lumos`. |
| `Finite`              | **END**                | Ends a code block (`Expecto`, `Repeat`, etc.). |
| `Spell`               | **FUN**                | Defines a new function / reusable incantation. |
| `OwlPost`             | **RETURN**             | Sends a value back from a `Spell`. |
| `Evanesco`            | **BREAK**              | Breaks out of a loop. |
| `Flipendo`            | **CONTINUE**           | Skips to the next loop iteration. |
| `Lumos` / `Nox`       | **TRUE / FALSE**       | Represents logical states of true and false. |
| `Obliviate`           | **NULL**               | Represents a null or empty value. |
| `Scourgify`           | **CLEAR**              | Clears the terminal screen. |
| `Measure`             | **LEN**                | Measures the number of items in a list. |
| `Pack` / `Unpack`     | **APPEND / POP**       | Packs an item into a list or unpacks one. |

---


## 🎓 Quick Start: The Sorting Hat Ceremony

Let’s cast a simple, interactive spell where the Sorting Hat asks for your name and places you in a house.

1. Create a new file named `sorting.magic`.
2. Write your spell:

```magic
# The Sorting Hat Ceremony

Revelio("Welcome to Hogwarts, young wizard!")
Revelio("What is your name? ")
Scroll name = Accio()

Revelio("Welcome, " + name + "! The Sorting Hat will now decide your house.")
Revelio("Are you brave? (Answer with 'Lumos' for yes) ")
Scroll trait = Accio()

Expecto trait == "Lumos" Cast
  # You belong with the lions! 🦁
  Revelio(name + ", you belong in... GRYFFINDOR!")
Patronum
  # You belong with the snakes! 🐍
  Revelio(name + ", your ambition shows you belong in... SLYTHERIN!")
Finite
```

3. Cast your spell using one of these methods:
   - Click the **Play button (▶️)** in the top-right corner of the editor.
   - Use the keyboard shortcut:
     - **Mac**: `Cmd + Alt + R`
     - **Windows/Linux**: `Ctrl + Alt + R`

---

## 🐍 The Muggle Equivalent (Python)

To understand the logic behind the magic, here is the exact same program in Python:

```python
# The Sorting Hat Ceremony in Python

print("Welcome to Hogwarts, young wizard!")
print("What is your name? ")
name = input()

print("Welcome, " + name + "! The Sorting Hat will now decide your house.")
print("Are you brave? (Answer with 'Lumos' for yes) ")
trait = input()

if trait == "Lumos":
    print(name + ", you belong in... GRYFFINDOR!")
else:
    print(name + ", your ambition shows you belong in... SLYTHERIN!")
```

---

## 📜 Requirements
- Python 3 must be installed and accessible from your system's terminal for the interpreter to work.

---

## ⚖️ License
This project is licensed under the **MIT License**.
