import { useObjectState } from "@/app/hooks/common/useObjectState";
import CredentialModel from "@/app/model/auth/common/credential";
import RegisterUserDTO from "@/app/model/auth/common/dto/registerUserDTO";
import UserModel from "@/app/model/auth/common/user";
import { useNavigationContext } from "@/app/providers/common/navigationProvider";
import useAuthService from "@/app/services/authService";
import { Button } from "primereact/Button";
import { InputText } from "primereact/inputtext";
import { FormEvent, useState } from "react";
import * as Messages from "../../../constants/messageConstant";
import { useToastContext } from "@/app/providers/common/toastProvider";

export default function UserRegisterComponent(){

    const {goToRoute} = useNavigationContext();

    const {register} = useAuthService();

    const [credential, setCredential] = useObjectState<CredentialModel>({
        mail: '',
        userName: ''
    })

    const [user, setUser] = useObjectState<UserModel>({
        name: '',
        active: 'N',
        role: "M"
    })

    const {showSuccess} = useToastContext();

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const registerUser: RegisterUserDTO = {
            user: user,
            credential: credential,
        }

        register(registerUser).then(res => {
            showSuccess(Messages.MESSAGE_SUCCESS, "Creado con exito");
            goToRoute("/pages/auth/passwordChange?token=" + res.temporalToken);
        })
    }

    return(
        <form onSubmit={(e) => handleRegister(e)} className="grid">
            <div className="col-12 md:col6 py-4" >
                <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                    <i className="pi pi-envelope" style={{ color: '#9E6A90' }}></i>
                    <InputText id="mail" type="email" style={{ width: '100%' }} minLength={4} required maxLength={30} value={credential.mail} onChange={(e) => { setCredential({ mail: e.target.value }) }} />
                    <label htmlFor="mail" >Correo</label>
                </span>
            </div>
            <div className="col-12 md:col6 py-4" >
                <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                    <i className="pi pi-envelope" style={{ color: '#9E6A90' }}></i>
                    <InputText id="userName" type="text" style={{ width: '100%' }} minLength={4} required maxLength={30} value={credential.userName} onChange={(e) => { setCredential({ userName: e.target.value }) }} />
                    <label htmlFor="userName" >Nombre de usuario</label>
                </span>
            </div>
            <div className="col-12 md:col6 py-4" >
                <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                    <i className="pi pi-envelope" style={{ color: '#9E6A90' }}></i>
                    <InputText id="name" type="text" style={{ width: '100%' }} minLength={4} required maxLength={30} value={user.name} onChange={(e) => { setUser({ name: e.target.value }) }} />
                    <label htmlFor="name" >Nombre</label>
                </span>
            </div>
            <div className="col-12 flex justify-content-end">
                <Button  type="button" label="Ya tienes una cuenta? Inicia sesion" onClick={() => goToRoute("/pages/auth/login")} text />,
            </div>
            <div className="col-12 text-center" >
                <Button severity="success" label="Registrar" type="submit"></Button>
            </div>
        </form>
    )   
}