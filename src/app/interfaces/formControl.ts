export default interface FormControl{
    field: string;
    value: any;
    description: string;
    disabled?: boolean;
    feedback?: boolean;
    icon? : string;
    validators?: ((formControl: FormControl) => boolean)[];
    invalid?: boolean;
    message?: boolean;
    minDate?: Date;
    maxDate?: Date;
}