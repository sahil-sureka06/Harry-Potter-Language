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
---

## The Harry Potter Language Documentation 🪄
This documentation serves as a guide for writing spells in the Harry Potter Language. The language is dynamically typed and comes with a VS Code extension for a complete magical experience.

### 🧾 General
A program is a sequence of statements. Comments start with **#**. The **.magic** file extension is the official file type for all spells.

***Note***:  The language is case-sensitive, so **Scroll** is a keyword, but **scroll** would be a variable name.


```magic
# This is a spell
Scroll myPotion = 10
Revelio(myPotion)
```

### 📦 Variables
Variables are declared using the **Scroll** keyword, followed by an identifier and an equals sign **=**.

```magic
Scroll myPoints = 10
Scroll favoriteSpell = "Wingardium Leviosa"
Scroll ingredients = [10, 5, 15]
```

### 🔤 Types
Numbers (integers and floats), strings, lists, and functions are the core types.

```magic
Scroll myPoints = 10
Scroll studentName = "Harry Potter"
Scroll hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

# Magical Constants
Scroll isTrue = Lumos
Scroll isFalse = Nox
Scroll noValue = Obliviate

```

### ⚡ Conditionals
The language supports a full conditional chain using **Expecto** (if), **Also** (else if), and **Patronum** (else). The **Cast** keyword must follow each condition.

For multiple statements within a block, simply place them on new lines. The entire structure must end with **Finite**.

```magic
Scroll housePoints = 75

Expecto housePoints > 100 Cast
    Revelio("Gryffindor wins the House Cup!")
Also housePoints > 50 Cast
    Revelio("A valiant effort! More points are needed.")
    Revelio("Let's add 10 more for good measure!")
Patronum
    Revelio("The hourglasses are nearly empty.")
Finite
```

### 🛠️ Built-ins
The **Revelio()** charm prints anything to the console.
The **Accio()** charm summons input from the user.

```magic
Revelio("Hello, wizard!")
Revelio("What is your favorite spell?")
Scroll myFavoriteSpell = Accio()
Revelio("Ah, " + myFavoriteSpell + ", a classic!")
```

### ➕ Operators
The language supports standard arithmetic, logical, and comparison operators.
``` text
+ - * / ^
And Or Not
== != < > <= >=
```
```magic
Scroll score = 100
Scroll bonus = 20
Scroll total = score + bonus
Revelio(total == 120)
```

### 🔁 Loops
Statements inside **Loop...Cast** and **Repeat...Cast** blocks are executed as long as a specified condition is **Lumos** (true).

Use **Evanesco** to break the loop and **Flipendo** to continue to the next iteration.

The entire structure must end with **Finite**.

#### For Loop (Repeat)
```magic
# Repeat i from 1 to 3
Repeat i = 1 Until 4 Cast
    Revelio("Stirring potion...")
Finite
```
#### While Loop (Loop)
```magic
Scroll i = 0
Loop i < 3 Cast
    Revelio("Casting spell number:")
    Revelio(i)
    Scroll i = i + 1
Finite
```
### 🪄 Functions (Spell)
You can create your own reusable spells (functions) using the **Spell** keyword.
Spells can take arguments and send back a result using **OwlPost**.

The entire structure must end with **Finite**.

```magic
# A spell to double a number of house points
Spell doublePoints(points)
  OwlPost points * 2
Finite

Scroll gryffindorPoints = 50
Scroll finalPoints = doublePoints(gryffindorPoints)
Revelio("Gryffindor's points have been doubled to:")
Revelio(finalPoints)
```


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

### 🐍 The Muggle Equivalent (Python)
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



3. Cast your spell using one of these methods:
   - Click the **Play button (▶️)** in the top-right corner of the editor.
   - Use the keyboard shortcut:
     - **Mac**: `Cmd + Alt + R`
     - **Windows/Linux**: `Ctrl + Alt + R`


---


## 📜 Requirements
- Python 3 must be installed and accessible from your system's terminal for the interpreter to work.

---
## 📂 Source Code & Contributing

This project is fully open-source. You can view the source code, report issues, or contribute to the project on GitHub.

🔗 [**View the GitHub Repository**](https://github.com/sahil-sureka06/Harry-Potter-Language)


---

## ⚖️ License
This project is licensed under the **MIT License**.
