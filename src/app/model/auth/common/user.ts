
import GeneralModel from "../../common/general";
import CredentialModel from "./credential";


export default class UserModel extends GeneralModel{
    name?: string;
    role?: string;
    credential?: CredentialModel;
    active?: string;
}