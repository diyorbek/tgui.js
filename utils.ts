export function encodeUTF32(str: string) {
  const utf32Array = new Uint32Array(str.length + 1); // +1 for null terminator

  for (let i = 0; i < str.length; i++) {
    utf32Array[i] = str.charCodeAt(i);
  }
  utf32Array[str.length] = 0; // Null terminator

  return utf32Array;
}
