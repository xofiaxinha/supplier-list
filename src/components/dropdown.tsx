import { ComponentProps, useState } from "react";
import { TextButton } from "./buttons.tsx";
interface DropDownProps extends ComponentProps<'div'>{
    id: string;
    mail: string;
    phone: string;
    address: string;
}
interface EditFormProps extends ComponentProps<'form'>{
    edt: (event: React.FormEvent<HTMLFormElement>) => void;
    mail: string;
    phone: string;
    address: string;
    name: string;
    cnpj: string;
}

export function EditForm(props: EditFormProps){
    const [formstate, setFormState] = useState({
        name: props.name,
        cnpj: props.cnpj,
        address: props.address,
        phone: props.phone,
        email: props.mail
    });
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setFormState({
            ...formstate,
            [event.target.name]: event.target.value
        });
    }
    return(
        <div className="supplier-form-edit">
            <h2>Editar fornecedor</h2>
            <form onSubmit={props.edt}>
                    <label htmlFor="id">ID</label>
                    <input type="text" id="id" name="id" value={props.id} readOnly />
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" value={formstate.name} onChange={handleChange}/>
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" name="cnpj" value={formstate.cnpj} onChange={handleChange}/>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" name="address" value={formstate.address}  onChange={handleChange}/>
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" id="phone" name="phone" value={formstate.phone} onChange={handleChange}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={formstate.email} onChange={handleChange}/>
                    <input type="submit" value="Salvar"/>
            </form>
        </div> 
    )
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