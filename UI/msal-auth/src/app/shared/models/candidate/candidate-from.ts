import { FormControl, Validators } from "@angular/forms";

export class CandidateForm {
    id: FormControl;
    name: FormControl;
    age: FormControl;
    email: FormControl;
    location: FormControl;

    constructor(args: any) {
        args = !!args ? args : {};
        this.id = new FormControl(!!args.id ? args.id : '');
        this.name = new FormControl(!!args.name ? args.name : '', [Validators.required]);
        this.age = new FormControl(!!args.age ? args.age : '', [Validators.required]);
        this.email = new FormControl(!!args.email ? args.email : '', [Validators.required]);
        this.location = new FormControl(!!args.location ? args.location : '', [Validators.required]);

    }
}