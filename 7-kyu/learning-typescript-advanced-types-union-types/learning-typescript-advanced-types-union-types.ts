export function join(tokens: string | string[], glue?: string): string {
  // TODO:
  if (Array.isArray(tokens)) {
    return glue ? tokens.join(glue) : tokens.join("");
  }
  return tokens;
}