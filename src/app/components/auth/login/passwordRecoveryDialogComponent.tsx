import useAuthService from "@/app/services/authService";
import { Button } from "primereact/Button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FormEvent, useState } from "react";

export default function PasswordRecoveryDialog() {

    const [showRecoveryDialog, setShowRecoveryDialog] = useState<boolean>(false);
    const [recoveryMail, setRecoveryMail] = useState<string>("");
    const { sendRecoveryEmail } = useAuthService();

    const handleEmailRecovery = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendRecoveryEmail(recoveryMail).then(
            res => {
                setShowRecoveryDialog(false);
            }
        )
    }

    return (
        <>
            <Dialog header="Email de verificacion" visible={showRecoveryDialog} style={{ width: 'md:50vw 70vm' }} onHide={() => setShowRecoveryDialog(false)}>
                <form id="recoveryForm" className="pt-5 grid" onSubmit={handleEmailRecovery}>
                    <div className="col-12">
                        <p className="text-900 font-bold text-xl">Escribe tu dirección de correo, y recibiras un mensaje en caso de que este registrada</p>
                    </div>
                    <div className="col-8">
                        <span className="p-float-label p-input-icon-right" style={{ width: '100%' }} >
                            <i className={'pi pi-envelope'} style={{ color: '#9E6A90' }}></i>
                            <InputText style={{ width: '100%' }} id="mail" value={recoveryMail} onChange={(e) => setRecoveryMail(e.target.value)} />
                            <label htmlFor="mail" >Correo:</label>
                        </span>
                    </div>
                    <div className="col-4">
                        <Button label="Enviar Mensaje" form="recoveryForm"></Button>
                    </div>
                </form>
            </Dialog>
            <Button type="button" label="Recuperar contraseña" onClick={() => setShowRecoveryDialog(true)} text />,
        </>
    )

}