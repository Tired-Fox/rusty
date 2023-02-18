import { message } from '@tauri-apps/api/dialog';
import { exit } from '@tauri-apps/api/process';
import { hideEditor, showEditor } from './actions';

type Letters =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "w"
  | "z";

type ctrl = "ctrl+" | "";
type alt = "alt+" | "";
type key = Letters | Uppercase<Letters>;

type Mapping = `${ctrl}${alt}${key}`;

class Key {
  ctrl = false;
  alt = false;
  key = "";

  constructor(ctrl: boolean, alt: boolean, key: string) {
    this.ctrl = ctrl;
    this.alt = alt;
    this.key = key;
  }

  static fromEvent(keyEvent: KeyboardEvent) {
    return new Key(keyEvent.ctrlKey, keyEvent.altKey, keyEvent.key);
  }

  mapping(): Mapping {
    return `${this.ctrl ? "ctrl+" : ""}${this.alt ? "alt+" : ""}${
      this.key
    }` as Mapping;
  }
}

export const execBinding = (keyEvent: KeyboardEvent) => {
  if (keyEvent.ctrlKey || keyEvent.altKey) {
    const key: Key = Key.fromEvent(keyEvent);
    if (keybindings.has(key.mapping())) {
      keybindings.get(key.mapping())?.();
    }
  }
};

export const keybindings: Map<Mapping, CallableFunction> = new Map([
  ["ctrl+o", () => message('Open a file', { title: 'Open File', type: 'info'})],
  ["ctrl+n", showEditor],
  ["ctrl+w", hideEditor],
  ["ctrl+W", () => exit(1)]
]);


