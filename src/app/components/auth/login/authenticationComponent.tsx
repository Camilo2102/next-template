import { FormEvent, useState } from "react";
import InputForm from "../../common/formComponents/formComponents/inputForm";
import FormControl from "@/app/interfaces/formControl";
import useValidators from "@/app/hooks/common/useValidators";
import { InputText } from "primereact/inputtext";
import { useObjectState } from "@/app/hooks/common/useObjectState";
import CredentialModel from "@/app/model/auth/common/credential";
import { Password } from "primereact/password";
import { Button } from "primereact/Button";
import useAuthService from "@/app/services/authService";
import { useNavigationContext } from "@/app/providers/common/navigationProvider";
import PasswordRecoveryDialog from "./passwordRecoveryDialogComponent";

export default function AuthenticacionComponent() {

    const { login } = useAuthService();

    const { goToRoute } = useNavigationContext();

    const [credential, setCredential] = useObjectState<CredentialModel>({
        mail: '',
        password: '',
        userName: ''
    });

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        login(credential).then(res => {
            //TODO redireccionar al aplicativo principal
        })

    }

    return (
        <>
            <form id="loginForm" onSubmit={(e) => handleLogin(e)} ></form>
            <div className="grid">
                <div className="col-12 md:col6 py-4" >
                    <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                        <i className="pi pi-envelope" style={{ color: '#9E6A90' }}></i>
                        <InputText id="mail" type="email" style={{ width: '100%' }} minLength={4} required maxLength={30} value={credential.mail} onChange={(e) => { setCredential({ mail: e.target.value }) }} />
                        <label htmlFor="mail" >Correo</label>
                    </span>
                </div>
                <div className="col-12 md:col6 py-4" >
                    <span className="p-float-label">
                        <Password id="password" style={{ width: '100%' }} minLength={4} maxLength={30} required inputStyle={{ width: '100%' }} feedback={false} toggleMask value={credential.password} onChange={(e) => { setCredential({ password: e.target.value }) }} />
                        <label htmlFor="password">Contraseña</label>
                    </span>
                </div>
                <div className="col-12 flex justify-content-between">
                    <PasswordRecoveryDialog></PasswordRecoveryDialog>
                    <Button type="button" label="Crear nueva cuenta" onClick={() => goToRoute("/pages/auth/register")} text />,
                </div>
                <div className="col-12 text-center" >
                    <Button severity="success" label="Iniciar sesion" type="submit" form="loginForm"></Button>
                </div>
            </div>

        </>

    )
}