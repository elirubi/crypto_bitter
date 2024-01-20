import LightMoneySend from "@icons/LightMoneySend";
import LightMoneyRec from "@icons/LightMoneyRec";
import Button from "@atoms/Button";

export default function SendReceiveButtons({text1, text2, to1, to2}){

    return(

        <div className="flex justify-between w-full mb-5">

            <Button
                text={text1}
                icon={<LightMoneySend/>}
                to={to1}
            />

            <Button
                text={text2}
                icon={<LightMoneyRec/>}
                to={to2}
            />

        </div>
    )
}