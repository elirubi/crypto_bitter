export default function LabelInput({id, label, required}){

    return(

        <label className="font-semibold text-tertiary text-sm" htmlFor={id}>

            {label} 
            {required && <span className="text-red-500"> *</span>}

        </label>

    )
}