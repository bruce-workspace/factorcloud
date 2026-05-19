import tokens from "../../config/design-tokens.json";

export const designTokens = tokens;

type Tokens = typeof tokens;
export type DesignTokens = Tokens;

/**
 * Emit a `:root { --token: value; }` CSS string from the JSON tree.
 * Variable names are flattened: `color.brand.amber` → `--color-brand-amber`.
 * Underscore-prefixed keys (e.g. `_description`) are skipped.
 */
export function tokensToCssVars(scope = ":root"): string {
  const lines: string[] = [];
  function walk(node: unknown, prefix: string[]) {
    if (node === null || node === undefined) return;
    if (typeof node === "string" || typeof node === "number") {
      lines.push(`  --${prefix.join("-")}: ${node};`);
      return;
    }
    if (typeof node === "object") {
      for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
        if (key.startsWith("_") || key.startsWith("$")) continue;
        walk(value, [...prefix, kebab(key)]);
      }
    }
  }
  walk(tokens, []);
  return `${scope} {\n${lines.join("\n")}\n}`;
}

function kebab(s: string): string {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export const color = tokens.color;
export const typography = tokens.typography;
export const spacing = tokens.spacing;
export const radius = tokens.radius;
export const shadow = tokens.shadow;
export const motion = tokens.motion;
export const breakpoint = tokens.breakpoint;
