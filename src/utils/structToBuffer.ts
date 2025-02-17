export type StructDef = readonly (
  | Deno.NativeNumberType
  | Deno.NativeBigIntType
  | { readonly struct: StructDef }
)[];
export type NumberLikeType = number | bigint;
export type Struct = { [key: string]: number | Struct };

type StructField = StructDef[number];

function getTypeSize(
  type: Deno.NativeNumberType | Deno.NativeBigIntType
): number {
  switch (type) {
    case "i8":
    case "u8":
      return 1;
    case "i16":
    case "u16":
      return 2;
    case "i32":
    case "u32":
    case "f32":
      return 4;
    case "i64":
    case "u64":
    case "f64":
      return 8;
    default:
      throw new Error(`Unknown nativr number type: ${type}`);
  }
}

function calculateStructSize(def: StructDef): number {
  return def.reduce((acc, field) => {
    if (typeof field === "string") {
      return acc + getTypeSize(field);
    } else {
      return acc + calculateStructSize(field.struct);
    }
  }, 0);
}

function createStructBuffer(def: StructDef): ArrayBuffer {
  const size = calculateStructSize(def);
  const buffer = new ArrayBuffer(size);
  // const view = new DataView(buffer);
  let offset = 0;

  function allocateFieldSpace(field: StructField) {
    if (typeof field === "string") {
      // Reserve space for primitive type
      offset += getTypeSize(field);
    } else {
      // Recursively handle nested structs
      field.struct.forEach((subField) => allocateFieldSpace(subField));
    }
  }

  def.forEach((field) => allocateFieldSpace(field));

  return buffer;
}

// Helper function to write values into the buffer
function writeToBuffer(
  buffer: ArrayBuffer,
  def: StructDef,
  values: number[]
): void {
  const view = new DataView(buffer);
  let offset = 0;
  let valueIndex = 0;

  function writeValue(field: StructField) {
    if (typeof field === "string") {
      const value = values[valueIndex++];

      switch (field) {
        case "i8":
          view.setInt8(offset, value);
          break;
        case "u8":
          view.setUint8(offset, value);
          break;
        case "i16":
          view.setInt16(offset, value, true);
          break;
        case "u16":
          view.setUint16(offset, value, true);
          break;
        case "i32":
          view.setInt32(offset, value, true);
          break;
        case "u32":
          view.setUint32(offset, value, true);
          break;
        case "f32":
          view.setFloat32(offset, value, true);
          break;
        case "f64":
          view.setFloat64(offset, value, true);
          break;
        case "i64":
        case "u64":
          view.setBigInt64(offset, BigInt(value), true);
          break;
      }

      offset += getTypeSize(field);
    } else {
      field.struct.forEach((subField) => writeValue(subField));
    }
  }

  def.forEach((field) => writeValue(field));
}

export function serializeStruct(
  structDef: StructDef,
  struct: unknown
): ArrayBuffer {
  const flattenedValues = flattenStruct(struct);
  const buffer = createStructBuffer(structDef);

  writeToBuffer(buffer, structDef, flattenedValues);

  return buffer;
}

export function deserializeStruct(
  structDef: StructDef,
  buffer: BufferSource
): NumberLikeType[] {
  const view = new DataView("buffer" in buffer ? buffer.buffer : buffer);
  let offset = 0;
  const values: NumberLikeType[] = [];

  function readValue(field: StructField) {
    if (typeof field === "string") {
      switch (field) {
        case "i8":
          values.push(view.getInt8(offset));
          break;
        case "u8":
          values.push(view.getUint8(offset));
          break;
        case "i16":
          values.push(view.getInt16(offset, true));
          break;
        case "u16":
          values.push(view.getUint16(offset, true));
          break;
        case "i32":
          values.push(view.getInt32(offset, true));
          break;
        case "u32":
          values.push(view.getUint32(offset, true));
          break;
        case "f32":
          values.push(view.getFloat32(offset, true));
          break;
        case "f64":
          values.push(view.getFloat64(offset, true));
          break;
        case "i64":
        case "u64":
          values.push(view.getBigInt64(offset, true));
          break;
      }

      offset += getTypeSize(field);
    } else {
      field.struct.forEach((subField) => readValue(subField));
    }
  }

  structDef.forEach((field) => readValue(field));

  return values;
}

function flattenStruct(struct: unknown): number[] {
  if (typeof struct !== "object" || struct == null)
    throw new Error("Invalid struct");

  const flattened = [];

  for (const key in struct) {
    const value = (struct as Struct)[key];

    if (typeof value === "number") {
      flattened.push(value);
    } else {
      flattened.concat(flattenStruct(value));
    }
  }

  return flattened.flat();
}
