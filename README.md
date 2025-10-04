# STS2 - Stream Text Snippets 2

A powerful userscript for enhancing Twitch chat with text transformation capabilities, emote shortcuts, and dynamic functions.

## Overview

STS2 is a browser userscript that adds advanced text processing features to Twitch chat. It allows users to transform text using functions, insert emotes with shortcuts, multiply text patterns, and perform complex text manipulations using a custom syntax.

## Features

- **Text Functions**: Transform text using built-in functions like capitalize, reverse, sort, and more
- **Emote Shortcuts**: Quick access to popular Twitch emotes using backslash syntax
- **Text Multiplication**: Repeat text patterns using numeric multipliers
- **Nested Processing**: Support for complex nested function calls
- **API Integration**: Fetch external data (like cat facts) directly into chat
- **Keyboard Shortcuts**: Activate text processing with Ctrl key combinations

## Installation

1. Install a userscript manager like Tampermonkey or Greasemonkey
2. Create a new userscript and paste the content of `main.js`
3. Save and enable the script
4. Navigate to Twitch and the script will load automatically

## Usage

### Basic Syntax

The script uses a special syntax for text transformation:

- Functions: `$functionName arguments`
- Emotes: `\emoteName`
- Multiplication: `\number` (repeats preceding text)
- Escaping: Use backslashes to escape special characters

### Keyboard Shortcuts

- **Ctrl + Any Key**: Process the current chat input text

### Available Functions

#### Text Transformation
- `$uppercase text` - Change all arguments to uppercase
- `$rev text` - Reverse each word and the order of words
- `$revw text` - Reverse words only (not character order)
- `$mock text` - Convert text to random case (mocking text)

#### Sorting
- `$sorta text` - Sort arguments alphabetically
- `$sortn numbers` - Sort numbers numerically

#### Utility
- `$rand` - Generate a random number (0-99)
- `$drink text` - Add "teaTime" emote after text
- `$catFact` - Fetch a random cat fact from an API
- `$_` - Insert a literal backslash

### Emote Shortcuts

| Shortcut | Emote | Full Name |
|----------|-------|-----------|
| `\o` | OMEGALUL | OMEGALUL |
| `\ppp` | Pepepains | Pepepains |
| `\fh` | 4HEad | 4HEad |
| `\fho` | 4House | 4House |
| `\fle` | flushE | flushE |
| `\pl` | pepeLaugh | pepeLaugh |
| `\cl` | Clueless | Clueless |
| `\ms` | monkaS | monkaS |
| `\shrug` | ¯\\_(ツ)_/¯ | Shrug emoticon |
| `\tea` | TeaTime | TeaTime |
| `\warn` | :warning: | Warning emoji |
| `\l` | LUL | LUL |
| `\gg` | Good Game | Good Game |
| `\sad` | Sadge | Sadge |

## Examples

### Basic Function Usage
```
Input: $c hello world
Output: HELLO WORLD

Input: $rev hello world  
Output: dlrow olleh

Input: $sorta zebra apple banana
Output: apple banana zebra

Input: $rand
Output: 42 (random number)
```

### Emote Usage
```
Input: That's funny \o
Output: That's funny OMEGALUL

Input: This is confusing \cl
Output: This is confusing Clueless
```

### Text Multiplication
```
Input: spam\3
Output: spamspamspam
```

### Complex Nested Examples
```
Input: $c ($rev hello world)
Output: DLROW OLLEH

Input: $drink ($c tea time)
Output: TEA TIME teaTime
```

### API Integration
```
Input: $catFact
Output: Cats have five toes on their front paws, but only four toes on their back paws.
```

## Browser Compatibility

- Chrome/Chromium browsers
- Firefox
- Safari (with userscript manager)
- Edge

## Technical Details

- **Language**: JavaScript (ES5 compatible with async/await polyfills)
- **Target**: Twitch chat interface
- **DOM Interaction**: Uses Slate editor selectors
- **Async Operations**: Supports API calls and async text processing

## Contributing

This project appears to be a personal userscript. To contribute:

1. Fork the repository
2. Make your changes
3. Test thoroughly on Twitch
4. Submit a pull request

## License

Do as you wish, just credit me.
