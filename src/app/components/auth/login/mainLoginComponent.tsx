"use client"

import { useNavigationContext } from "@/app/providers/common/navigationProvider";
import Container from "../../common/container/container";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/Button";
import { FormEvent } from "react";
import AuthenticacionComponent from "./authenticationComponent";
import PasswordRecoveryDialog from "./passwordRecoveryDialogComponent";

export default function MainLoginComponent() {

    return (
        <>
            <Container title="Login">
                <AuthenticacionComponent></AuthenticacionComponent>
            </Container>
        </>
    )
}
