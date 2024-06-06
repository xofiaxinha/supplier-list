import { ComponentProps} from "react";
interface DropDownProps extends ComponentProps<'div'>{
    id: string;
    mail: string;
    phone: string;
    address: string;
}

export function DropDown(props: DropDownProps){
    return(
        <div className="dropdown">
            <p><span>Email: </span>{props.mail}</p>
            <p><span>Telefone: </span>{props.phone}</p>
            <p><span>Endereço: </span>{props.address}</p>
            <p><span>ID: </span>{props.id}</p>
            {props.children}
        </div>
    );
}