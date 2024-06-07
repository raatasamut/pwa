import BaseModel from "@/models/BaseModel";

export default class BaseRequest extends BaseModel {
    module?: string
    target?: string
    token?: string
    data?: any
    lang?: string

    constructor(module: string, target: string, data?: any, locale?: string, token?: string) {
        super()

        this.module = module
        this.target = target
        this.data = data
        this.lang = locale

        this.token = token

        return this
    }
}
