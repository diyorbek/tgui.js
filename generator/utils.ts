import { C_NATIVE_TYPE_MAP, type StructMeta } from "./typeMap.ts";

function getStructDefinition(structName: string) {
  const structNode = C_NATIVE_TYPE_MAP[structName];

  if (!(structNode instanceof Array)) {
    return "";
  }

  const definiton = structNode
    .map((field) => ` ${field.name}: ${field.type}`)
    .join(";");
  return ` {${definiton} }`;
}

export function createComment(declaration: any) {
  return `
/**
 * @original \`\`\`c
 * ${declaration.returnType} ${declaration.name}(${declaration.parameters
    .map((param: any) => `${param.type} ${param.name}`)
    .join(", ")});
 * \`\`\`
 *
 * 
 * @param ${declaration.parameters
   .map(
     (param: any) =>
       `${param.name} \`${param.type.replace("tgui", "")}${getStructDefinition(
         param.type
       )}\``
   )
   .join("\n * @param ")}
 * @returns \`${declaration.returnType.replace(
   "tgui",
   ""
 )}${getStructDefinition(declaration.returnType)}\`
 */`;
}

export function createNativeType(
  meta: StructMeta[] | Deno.NativeType
): Deno.NativeType {
  if (typeof meta === "string") {
    return meta;
  }

  return {
    struct: (meta as StructMeta[]).map((field) => {
      return createNativeType(field.nativeType);
    }),
  };
}
