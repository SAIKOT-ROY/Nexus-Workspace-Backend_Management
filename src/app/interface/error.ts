export type TErrorSource = {
    path: string | number;
    message: string;
}[]

export type TGenricResponse = {
    statusCode: number;
    message: string;
    errorSources: TErrorSource
}