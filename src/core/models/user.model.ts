// user.model.ts
export class HomelessUser {
    constructor(
        public firstName: string,
        public lastName: string,
        public phone?: string,
        public tagId?: string,
    ) { }
}
export interface ExcetData {
    Cabin: number;
    FirstName: string;
    LastName: string;
    CaseManagement: string;
    Need: string;
    Phone: string;
    MHprovider: string;
    SUDProvider: string;
}