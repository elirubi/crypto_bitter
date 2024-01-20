export default function TakePhoto(){

    return(

        <label htmlFor="photo" className="w-[255px] h-[135px] rounded-[15px] border border-dashed cursor-pointer bg-secondary border-tertiary">

            <div className="w-full h-full flex flex-col items-center justify-center gap-2">

                <i className="text-primary text-2xl fa-solid fa-camera"></i>

                <p className="font-semibold text-sm text-tertiary">Take a Selfie</p>

                <p className="text-xs font-light text-tertiary text-center">Tap to open the camera <br/> or upload your photo</p>
                
            </div>

            <input type="file" accept="image/*" capture="user" id="photo" className="hidden"/>

        </label>
    )
    
}