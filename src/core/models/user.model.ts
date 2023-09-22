// user.model.ts
export class HomelessUser {
    constructor(
        public firstName: string,
        public lastName: string,
        public phone?: string,
        public tagId?: string,
    ) { }
}
