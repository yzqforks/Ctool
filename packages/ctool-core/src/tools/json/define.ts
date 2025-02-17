import {SerializeInput, SerializeOutput} from "@/components/serialize";
//=======
const tabsMap = [
    {label: $t('code_indent_width_null'), value: 0},
    {label: $t('code_indent_width', [2]), value: 2},
    {label: $t('code_indent_width', [4]), value: 4},
    {label: $t('code_indent_width', [6]), value: 6},
    {label: $t('code_indent_width', [8]), value: 8}
] as const

export type TabsType = typeof tabsMap[number]["value"]
export const tabOptions: { label: string, value: number }[] = tabsMap as any

//=======
const _toObject = ['Java', 'Dart', 'C#', 'Protobuf', 'Go', 'PHP'] as const
export const toObjectLangOptions: string[] = _toObject as any
export type ToObjectType = typeof _toObject[number]
export type ToObjectOptions = {
    package_name?: string
    class_name?: string
    is_inline?: boolean
}

//=======
export const pathLists = [
    {label: $t(`json_json_path`), value: 'json_path'},
    {label: $t(`json_jmes_path`), value: 'jmes_path'},
]
export type PathOptionType = {
    type: "json_path" | "jmes_path",
    json_path: string
    jmes_path: string
}

export type SchemaOptionType = {
    exp: string,
    option: Record<string, any>
}

//=======
export type actionType = {
    input: string,
    tabs: string,
    expand_type: string,
    option: {
        tab: TabsType,
        to_object_lang: ToObjectType,
        from: SerializeInput,
        to: SerializeOutput,
        path: PathOptionType,
        schema: SchemaOptionType,
    }
}

