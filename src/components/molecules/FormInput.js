import LabelInput from "@atoms/LabelInput"

export default function FormInput({readOnly=false, value, label, placeholder, type = 'text', id, required = false}){

    return(

        <div className="flex flex-col text-start w-full">
                    
            <LabelInput
                label={label}
                id={id}
                required={required}                
            />

            <input className="text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25" placeholder={placeholder} type={type} id={id} defaultValue={value} readOnly={readOnly}/>

        </div>
    )
}
