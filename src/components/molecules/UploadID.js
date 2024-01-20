export default function UploadID(){

    return(

        <label htmlFor='ID' className=" w-[255px] h-[135px] rounded-[15px] border border-dashed cursor-pointer bg-secondary border-tertiary">

            <div className="w-full h-full flex flex-col items-center justify-center gap-2">

                <i className="text-primary text-2xl fa-solid fa-cloud-arrow-up"></i>

                <p className="font-semibold text-sm text-tertiary">Upload your ID</p>

                <p className="text-xs font-light text-tertiary">Tap to upload or drag and drop</p>
            </div>

            <input type="file" id='ID' className="hidden" />  

        </label>

    )
}