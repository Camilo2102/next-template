import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import * as Messages from "../../../constants/messageConstant";
import { useNavigationContext } from "@/app/providers/common/navigationProvider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/Button";
import useAuthService from "@/app/services/authService";
import { useObjectState } from "@/app/hooks/common/useObjectState";
import PasswordChangeDTO from "@/app/model/auth/common/dto/passwordChangeDTO";
import { useToastContext } from "@/app/providers/common/toastProvider";
import { Password } from 'primereact/password';

export default function PasswordChangeComponent() {

    const searchParams = useSearchParams()

    const { goToRoute } = useNavigationContext();

    const { enableUser } = useAuthService();

    const {showError} = useToastContext();

    const [passwordToChange, setPasswordToChange] = useObjectState<PasswordChangeDTO>(
        {
            code: "",
            password: "",
            token: searchParams.get('token') as string
        }
    );

    const [checkPassword, setCheckPassword] = useState<string>("");

    const handlePasswordChange = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (passwordToChange.password === checkPassword) {
            enableUser(passwordToChange).then(res => {
                goToRoute("/pages/auth/login")
            })
            return;
        }
        showError(Messages.MESSAGE_ERROR, Messages.MESSAGE_PASSWORD_MISMATCH)
    }

    return (
        <form onSubmit={(e) => handlePasswordChange(e)} className="grid">
            <div className="col-12 md:col6 py-4" >
                <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                    <Password inputId="password" style={{width: '100%'}} inputStyle={{width: '100%'}} toggleMask value={passwordToChange.password} onChange={(e) => setPasswordToChange({password: e.target.value})} />
                    <label htmlFor="password" >Contraseña</label>
                </span>
            </div>
            <div className="col-12 md:col6 py-4" >
                <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                    <Password inputId="checkPassword" style={{width: '100%'}} inputStyle={{width: '100%'}} toggleMask value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} />
                    <label htmlFor="checkPassword" >Confirmar Contraseña</label>
                </span>
            </div>
            <div className="col-12 md:col6 py-4" >
                <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                    <InputText id="code" value={passwordToChange.code} style={{ width: '100%' }} onChange={(e) => setPasswordToChange({code: e.target.value})} />
                    <label htmlFor="code" >Codigo de seguridad</label>
                </span>
            </div>
            
            <div className="col-12 text-center" >
                <Button severity="success" label="Cambiar contraseña" type="submit"></Button>
            </div>
        </form>
    )
}