export interface BaseType {
    id: number;
    label: string;
    name: string;
    inputType: string;
    type: string;
    value: string;
}

export type FileContent = string | ArrayBuffer;
