# Harry Potter Language 🪄⚡

Welcome, witches and wizards!  
This is the official **VS Code extension** for the **Harry Potter programming language**, where you write code as powerful spells.

---

## ✨ Features
- **Enchanting Syntax Highlighting**: All your spells, keywords, and magical constants will light up with distinct colors.
- **Automatic Indentation**: The editor helps you format your spell blocks correctly.
- **Instant Spell Casting**: Run your `.magic` files directly from the editor with a simple click or keyboard shortcut.
- **Interactive Terminal**: Your spells come to life in the VS Code terminal, perfect for interactive programs.
---

## 📖 Spellbook: Incantations & Their Powers

Here’s your quick reference guide to all the magical keywords and their Muggle equivalents ⚡🪄

| 🪄 Spell / Incantation | 🖥️ Programming Concept | 📜 Description |
|------------------------|------------------------|----------------|
| `Scroll`              | **VAR**                | Declares a new variable to store a value. |
| `Reparo`             | **UPDATE**              | Updates or "mends" the value of an existing variable. |
| `Revelio`             | **PRINT**              | Prints a value and moves to a new line. |
| `Murmur`             | **PRINT** (no newline)              | Prints a value but stays on the same line. |
| `Accio`               | **INPUT** (String)             | Gets input from the user, always returns a `String` |
| `AccioNum`               | **INPUT** (Number)            | Gets input from the user, returns a `Number`. |
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
| `Numeris` / `Verbis`       | **CAST** (to Number/String)       | Converts a value to a `Number` or a `String`. |
| `Lumos` / `Nox`       | **TRUE / FALSE**       | Represents logical states of true and false. |
| `Obliviate`           | **NULL**               | Represents a null or empty value. |
| `Scourgify`           | **CLEAR**              | Clears the terminal screen. |
| `Measure`             | **LEN**                | Measures the number of items in a list or String. |
| `Pack` / `Unpack`     | **APPEND / POP**       | Packs an item into a list or unpacks one. |

---


## The Harry Potter Language Documentation 🪄
This documentation serves as a guide for writing spells in the Harry Potter Language. The language is dynamically typed and comes with a VS Code extension for a complete magical experience.

### 🧾 General
A program is a sequence of statements. Comments start with `#`. The `.magic` file extension is the official file type for all spells.

***Note:***  The language is ***case-sensitive***, so `Scroll` is a keyword, but `scroll` would be a variable name.


```magic
# This is a spell
Scroll myPotion = 10
Revelio(myPotion)
```

### 📦 Variables
Variables are **created** using the `Scroll` keyword. Once a variable exists, its value can only be **updated** using the Mending Charm, `Reparo`. This prevents you from accidentally creating a new variable when you meant to change an existing one.

```magic
Scroll points = 100         # Creates the variable 'points'.
Reparo points = points + 50   # Updates the existing variable.

# This would cause an error:
# Scroll points = 200 # Error: 'points' is already defined.
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
The language supports a full conditional chain using `Expecto` (if), `Also` (else if), and `Patronum` (else). The `Cast` keyword must follow each condition.

For multiple statements within a block, simply place them on new lines. The entire structure must end with `Finite`.

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
**Printing (**`Revelio` **&** `Murmur`**)**
* `Revelio()` prints a value and moves to the next line.
* `Murmur()` prints a value but keeps the cursor on the same line.

**User Input (** `Accio` **&** `AccioNum` **)**

There are two ways to get a number from a user:

* **Directly:** Use `AccioNum()` to summon input that is already a `Number`.
* **Typecasting:** Use `Accio()` to get a `String`, then convert it with the `Numeris()` spell.


```magic
Murmur("Hello, wizard!")
Revelio("What is your favorite spell?")

# Method 1: Direct Number Input
Revelio("Enter your vault number:")
Scroll vaultNumber = AccioNum()
Revelio(vaultNumber * 2)

# Method 2: Typecasting from a String
Revelio("How many points for your house?")
Scroll points = Numeris(Accio())
Revelio(points + 10)
```

### ➕ Operators
The language supports standard arithmetic, logical, and comparison operators.

`+ - * / ^`,
`And Or Not`,
`== != < > <= >=`

You can get a specific element from a List or a character from a String using the `/` operator. Indexing starts at 0.


```magic
Scroll score = 100
Scroll bonus = 20
Scroll total = score + bonus
Revelio(total == 120)
# Accessing a list element
Scroll houses = ["Gryffindor", "Slytherin"]
Revelio(houses / 1) # Prints "Slytherin"
# Accessing a string character
Scroll spell = "Alohomora"
Revelio(spell / 0) # Prints "A"

```

### 🔁 Loops
Statements inside `Loop...Cast` and `Repeat...Cast` blocks are executed multiple times. Use `Evanesco` to break the loop and `Flipendo` to continue.

The entire structure must end with `Finite`.

**For Loop (**`Repeat`**)**

The `Repeat` loop is automatic. If the `By` keyword is not mentioned, the loop will auto-detect whether to increment (`By 1`) or decrement (`By -1`). You can use `By` to specify a custom step value.

```magic
# This loop auto-detects it needs to count down.
Repeat i = 3 Until 0 Cast
    Revelio(i + "...")
Finite

# The 'By' keyword counts up by 2, skipping numbers.
Repeat i = 0 Until 10 By 2 Cast
    Revelio("Casting spell " + i)
Finite
```
**While Loop (** `Loop` **)**

The Loop spell continues as long as a condition is Lumos (true). You must manually update your counter with Reparo.
```magic
Scroll i = 0
Loop i < 3 Cast
    Revelio("Casting spell number: " + i)
    Reparo i = i + 1
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
### Typecasting Spells 
You can explicitly convert values between data types.
* `Numeris()` converts a value to a `Number`.
* `Verbis()` converts a value to a `String`.
```magic
Scroll pointsAsString = "250"
Scroll pointsAsNumber = Numeris(pointsAsString)

# Now you can perform math
Reparo pointsAsNumber = pointsAsNumber + 50 
Revelio("Final points: " + Verbis(pointsAsNumber))
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

🔗 [**View the GitHub Repository**](https://github.com/sahil-sureka06/Harry-Potter-Language.git)


---

## ⚖️ License
This project is licensed under the **MIT License**.
