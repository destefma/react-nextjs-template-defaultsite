export default function isStringEmpty(value: string) : boolean{

    return (value !== undefined && value.trim().length !== 0) ? false : true;
    
}