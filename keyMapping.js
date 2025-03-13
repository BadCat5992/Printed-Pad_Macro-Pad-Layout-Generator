// keyMapping.js
const keyMapping = {
  // Buchstaben
  "KC_A": "A",
  "KC_B": "B",
  "KC_C": "C",
  "KC_D": "D",
  "KC_E": "E",
  "KC_F": "F",
  "KC_G": "G",
  "KC_H": "H",
  "KC_I": "I",
  "KC_J": "J",
  "KC_K": "K",
  "KC_L": "L",
  "KC_M": "M",
  "KC_N": "N",
  "KC_O": "O",
  "KC_P": "P",
  "KC_Q": "Q",
  "KC_R": "R",
  "KC_S": "S",
  "KC_T": "T",
  "KC_U": "U",
  "KC_V": "V",
  "KC_W": "W",
  "KC_X": "X",
  "KC_Y": "Y",
  "KC_Z": "Z",

  // Zahlen
  "KC_1": "1 / !",
  "KC_2": "2 / @",
  "KC_3": "3 / #",
  "KC_4": "4 / $",
  "KC_5": "5 / %",
  "KC_6": "6 / ^",
  "KC_7": "7 / &",
  "KC_8": "8 / *",
  "KC_9": "9 / (",
  "KC_0": "0 / )",

  // F-Tasten
  "KC_F1": "F1",
  "KC_F2": "F2",
  "KC_F3": "F3",
  "KC_F4": "F4",
  "KC_F5": "F5",
  "KC_F6": "F6",
  "KC_F7": "F7",
  "KC_F8": "F8",
  "KC_F9": "F9",
  "KC_F10": "F10",
  "KC_F11": "F11",
  "KC_F12": "F12",
  "KC_F13": "F13",
  "KC_F14": "F14",
  "KC_F15": "F15",
  "KC_F16": "F16",
  "KC_F17": "F17",
  "KC_F18": "F18",
  "KC_F19": "F19",
  "KC_F20": "F20",
  "KC_F21": "F21",
  "KC_F22": "F22",
  "KC_F23": "F23",
  "KC_F24": "F24",

  // Interpunktion & Sonderzeichen
  "KC_ENTER": "Enter",
  "KC_ENT": "Enter",
  "KC_ESCAPE": "Escape",
  "KC_ESC": "Escape",
  "KC_BACKSPACE": "Backspace",
  "KC_BSPC": "Backspace",
  "KC_TAB": "Tab",
  "KC_SPACE": "Spacebar",
  "KC_SPC": "Spacebar",
  "KC_MINUS": "Minus / _",
  "KC_MINS": "Minus / _",
  "KC_EQUAL": "Equal / +",
  "KC_EQL": "Equal / +",
  "KC_LEFT_BRACKET": "Left Bracket / {",
  "KC_LBRC": "Left Bracket / {",
  "KC_RIGHT_BRACKET": "Right Bracket / }",
  "KC_RBRC": "Right Bracket / }",
  "KC_BACKSLASH": "Backslash / |",
  "KC_BSLS": "Backslash / |",
  "KC_NONUS_HASH": "Non-US Hash / ~",
  "KC_NUHS": "Non-US Hash / ~",
  "KC_SEMICOLON": "Semicolon / :",
  "KC_SCLN": "Semicolon / :",
  "KC_QUOTE": "Quote / \"",
  "KC_QUOT": "Quote / \"",
  "KC_GRAVE": "Grave / ~",
  "KC_GRV": "Grave / ~",
  "KC_COMMA": "Comma / <",
  "KC_COMM": "Comma / <",
  "KC_DOT": "Dot / >",
  "KC_SLASH": "Slash / ?",
  "KC_SLSH": "Slash / ?",
  "KC_NONUS_BACKSLASH": "Non-US Backslash / |",
  "KC_NUBS": "Non-US Backslash / |",

  // Lock Keys
  "KC_CAPS_LOCK": "Caps Lock",
  "KC_CAPS": "Caps Lock",
  "KC_SCROLL_LOCK": "Scroll Lock / Brightness Down",
  "KC_SCRL": "Scroll Lock / Brightness Down",
  "KC_BRMD": "Scroll Lock / Brightness Down",
  "KC_NUM_LOCK": "Num Lock / Clear",
  "KC_NUM": "Num Lock / Clear",
  "KC_LOCKING_CAPS_LOCK": "Locking Caps Lock",
  "KC_LCAP": "Locking Caps Lock",
  "KC_LOCKING_NUM_LOCK": "Locking Num Lock",
  "KC_LNUM": "Locking Num Lock",
  "KC_LOCKING_SCROLL_LOCK": "Locking Scroll Lock",
  "KC_LSCR": "Locking Scroll Lock",

  // Modifiers
  "KC_LEFT_CTRL": "Left Control",
  "KC_LCTL": "Left Control",
  "KC_LEFT_SHIFT": "Left Shift",
  "KC_LSFT": "Left Shift",
  "KC_LEFT_ALT": "Left Alt",
  "KC_LALT": "Left Alt",
  "KC_LOPT": "Left Alt",
  "KC_LEFT_GUI": "Left GUI",
  "KC_LGUI": "Left GUI",
  "KC_LCMD": "Left GUI",
  "KC_LWIN": "Left GUI",
  "KC_RIGHT_CTRL": "Right Control",
  "KC_RCTL": "Right Control",
  "KC_RIGHT_SHIFT": "Right Shift",
  "KC_RSFT": "Right Shift",
  "KC_RIGHT_ALT": "Right Alt",
  "KC_RALT": "Right Alt",
  "KC_ROPT": "Right Alt",
  "KC_ALGR": "Right Alt",
  "KC_RIGHT_GUI": "Right GUI",
  "KC_RGUI": "Right GUI",
  "KC_RCMD": "Right GUI",
  "KC_RWIN": "Right GUI",

  // International
  "KC_INTERNATIONAL_1": "International 1 (JIS \\ and _)",
  "KC_INT1": "International 1 (JIS \\ and _)",
  "KC_INTERNATIONAL_2": "International 2 (JIS Katakana/Hiragana)",
  "KC_INT2": "International 2 (JIS Katakana/Hiragana)",
  "KC_INTERNATIONAL_3": "International 3 (JIS ¥ and |)",
  "KC_INT3": "International 3 (JIS ¥ and |)",
  "KC_INTERNATIONAL_4": "International 4 (JIS Henkan)",
  "KC_INT4": "International 4 (JIS Henkan)",
  "KC_INTERNATIONAL_5": "International 5 (JIS Muhenkan)",
  "KC_INT5": "International 5 (JIS Muhenkan)",
  "KC_INTERNATIONAL_6": "International 6 (JIS Numpad ,)",
  "KC_INT6": "International 6 (JIS Numpad ,)",
  "KC_INTERNATIONAL_7": "International 7",
  "KC_INT7": "International 7",
  "KC_INTERNATIONAL_8": "International 8",
  "KC_INT8": "International 8",
  "KC_INTERNATIONAL_9": "International 9",
  "KC_INT9": "International 9",
  "KC_LANGUAGE_1": "Language 1 (Hangul/English)",
  "KC_LNG1": "Language 1 (Hangul/English)",
  "KC_LANGUAGE_2": "Language 2 (Hanja)",
  "KC_LNG2": "Language 2 (Hanja)",
  "KC_LANGUAGE_3": "Language 3 (JIS Katakana)",
  "KC_LNG3": "Language 3 (JIS Katakana)",
  "KC_LANGUAGE_4": "Language 4 (JIS Hiragana)",
  "KC_LNG4": "Language 4 (JIS Hiragana)",
  "KC_LANGUAGE_5": "Language 5 (JIS Zenkaku/Hankaku)",
  "KC_LNG5": "Language 5 (JIS Zenkaku/Hankaku)",
  "KC_LANGUAGE_6": "Language 6",
  "KC_LNG6": "Language 6",
  "KC_LANGUAGE_7": "Language 7",
  "KC_LNG7": "Language 7",
  "KC_LANGUAGE_8": "Language 8",
  "KC_LNG8": "Language 8",
  "KC_LANGUAGE_9": "Language 9",
  "KC_LNG9": "Language 9",

  // Commands
  "KC_PRINT_SCREEN": "Print Screen",
  "KC_PSCR": "Print Screen",
  "KC_PAUSE": "Pause / Brightness Up",
  "KC_Paus": "Pause / Brightness Up",
  "KC_BRK": "Pause / Brightness Up",
  "KC_BRMU": "Pause / Brightness Up",
  "KC_INSERT": "Insert",
  "KC_INS": "Insert",
  "KC_HOME": "Home",
  "KC_PAGE_UP": "Page Up",
  "KC_PGUP": "Page Up",
  "KC_DELETE": "Delete",
  "KC_DEL": "Delete",
  "KC_END": "End",
  "KC_PAGE_DOWN": "Page Down",
  "KC_PGDN": "Page Down",
  "KC_RIGHT": "Right Arrow",
  "KC_RGHT": "Right Arrow",
  "KC_LEFT": "Left Arrow",
  "KC_DOWN": "Down Arrow",
  "KC_UP": "Up Arrow",
  "KC_APPLICATION": "Application",
  "KC_APP": "Application",
  "KC_KB_POWER": "System Power",
  "KC_EXECUTE": "Execute",
  "KC_EXEC": "Execute",
  "KC_HELP": "Help",
  "KC_MENU": "Menu",
  "KC_SELECT": "Select",
  "KC_SLCT": "Select",
  "KC_STOP": "Stop",
  "KC_AGAIN": "Again",
  "KC_AGIN": "Again",
  "KC_UNDO": "Undo",
  "KC_CUT": "Cut",
  "KC_COPY": "Copy",
  "KC_PASTE": "Paste",
  "KC_PSTE": "Paste",
  "KC_FIND": "Find",
  "KC_KB_MUTE": "Mute",
  "KC_KB_VOLUME_UP": "Volume Up",
  "KC_KB_VOLUME_DOWN": "Volume Down",
  "KC_ALTERNATE_ERASE": "Alternate Erase",
  "KC_ERAS": "Alternate Erase",
  "KC_SYSTEM_REQUEST": "System Request",
  "KC_SYRQ": "System Request",
  "KC_CANCEL": "Cancel",
  "KC_CNCL": "Cancel",
  "KC_CLEAR": "Clear",
  "KC_CLR": "Clear",
  "KC_PRIOR": "Prior",
  "KC_PRIR": "Prior",
  "KC_RETURN": "Return",
  "KC_RETN": "Return",
  "KC_SEPARATOR": "Separator",
  "KC_SEPR": "Separator",
  "KC_OUT": "Out",
  "KC_OPER": "Oper",
  "KC_CLEAR_AGAIN": "Clear Again",
  "KC_CLAG": "Clear Again",
  "KC_CRSEL": "CrSel/Props",
  "KC_CRSL": "CrSel/Props",
  "KC_EXSEL": "ExSel",
  
  // Media Keys
  "KC_SYSTEM_POWER": "System Power Down",
  "KC_PWR": "System Power Down",
  "KC_SYSTEM_SLEEP": "System Sleep",
  "KC_SLEP": "System Sleep",
  "KC_SYSTEM_WAKE": "System Wake",
  "KC_WAKE": "System Wake",
  "KC_AUDIO_MUTE": "Audio Mute",
  "KC_MUTE": "Audio Mute",
  "KC_AUDIO_VOL_UP": "Audio Volume Up",
  "KC_VOLU": "Audio Volume Up",
  "KC_AUDIO_VOL_DOWN": "Audio Volume Down",
  "KC_VOLD": "Audio Volume Down",
  "KC_MEDIA_NEXT_TRACK": "Media Next Track",
  "KC_MNXT": "Media Next Track",
  "KC_MEDIA_PREV_TRACK": "Media Previous Track",
  "KC_MPRV": "Media Previous Track",
  "KC_MEDIA_STOP": "Media Stop",
  "KC_MSTP": "Media Stop",
  "KC_MEDIA_PLAY_PAUSE": "Media Play/Pause",
  "KC_MPLY": "Media Play/Pause",
  "KC_MEDIA_SELECT": "Media Select",
  "KC_MSEL": "Media Select",
  "KC_MEDIA_EJECT": "Media Eject",
  "KC_EJCT": "Media Eject",
  "KC_MAIL": "Mail",
  "KC_CALCULATOR": "Calculator",
  "KC_CALC": "Calculator",
  "KC_MY_COMPUTER": "My Computer",
  "KC_MYCM": "My Computer",
  "KC_WWW_SEARCH": "WWW Search",
  "KC_WSCH": "WWW Search",
  "KC_WWW_HOME": "WWW Home",
  "KC_WHOM": "WWW Home",
  "KC_WWW_BACK": "WWW Back",
  "KC_WBAK": "WWW Back",
  "KC_WWW_FORWARD": "WWW Forward",
  "KC_WFWD": "WWW Forward",
  "KC_WWW_STOP": "WWW Stop",
  "KC_WSTP": "WWW Stop",
  "KC_WWW_REFRESH": "WWW Refresh",
  "KC_WREF": "WWW Refresh",
  "KC_WWW_FAVORITES": "WWW Favorites",
  "KC_WFAV": "WWW Favorites",
  "KC_MEDIA_FAST_FORWARD": "Media Fast Forward",
  "KC_MFFD": "Media Fast Forward",
  "KC_MEDIA_REWIND": "Media Rewind",
  "KC_MRWD": "Media Rewind",
  "KC_BRIGHTNESS_UP": "Brightness Up",
  "KC_BRIU": "Brightness Up",
  "KC_BRIGHTNESS_DOWN": "Brightness Down",
  "KC_BRID": "Brightness Down",
  "KC_CONTROL_PANEL": "Control Panel",
  "KC_CPNL": "Control Panel",
  "KC_ASSISTANT": "Assistant",
  "KC_ASST": "Assistant",
  "KC_MISSION_CONTROL": "Mission Control",
  "KC_MCTL": "Mission Control",
  "KC_LAUNCHPAD": "Launchpad",
  "KC_LPAD": "Launchpad",

  // Number Pad
  "KC_KP_SLASH": "Keypad /",
  "KC_PSLS": "Keypad /",
  "KC_KP_ASTERISK": "Keypad *",
  "KC_PAST": "Keypad *",
  "KC_KP_MINUS": "Keypad -",
  "KC_PMNS": "Keypad -",
  "KC_KP_PLUS": "Keypad +",
  "KC_PPLS": "Keypad +",
  "KC_KP_ENTER": "Keypad Enter",
  "KC_PENT": "Keypad Enter",
  "KC_KP_1": "Keypad 1 / End",
  "KC_P1": "Keypad 1 / End",
  "KC_KP_2": "Keypad 2 / Down",
  "KC_P2": "Keypad 2 / Down",
  "KC_KP_3": "Keypad 3 / Page Down",
  "KC_P3": "Keypad 3 / Page Down",
  "KC_KP_4": "Keypad 4 / Left",
  "KC_P4": "Keypad 4 / Left",
  "KC_KP_5": "Keypad 5",
  "KC_P5": "Keypad 5",
  "KC_KP_6": "Keypad 6 / Right",
  "KC_P6": "Keypad 6 / Right",
  "KC_KP_7": "Keypad 7 / Home",
  "KC_P7": "Keypad 7 / Home",
  "KC_KP_8": "Keypad 8 / Up",
  "KC_P8": "Keypad 8 / Up",
  "KC_KP_9": "Keypad 9 / Page Up",
  "KC_P9": "Keypad 9 / Page Up",
  "KC_KP_0": "Keypad 0 / Insert",
  "KC_P0": "Keypad 0 / Insert",
  "KC_KP_DOT": "Keypad . / Delete",
  "KC_PDOT": "Keypad . / Delete",
  "KC_KP_EQUAL": "Keypad Equal",
  "KC_PEQL": "Keypad Equal",
  "KC_KP_COMMA": "Keypad Comma",
  "KC_PCMM": "Keypad Comma",
  "KC_KP_EQUAL_AS400": "Keypad Equal (AS/400)",

  // Special Keys
  "KC_NO": "NOOP",
  "KC_TRANSPARENT": "Transparent"
};
