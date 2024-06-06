import { ComponentProps, useState } from "react";
import { TextButton } from "./buttons";

interface SupplierFormProps extends ComponentProps<'form'>{
    add: (event: React.FormEvent<HTMLFormElement>) => void;
    cancel: () => void;
}
interface EditFormProps extends ComponentProps<'form'>{
    edt: (event: React.FormEvent<HTMLFormElement>) => void;
    cancel: () => void;
    mail: string;
    phone: string;
    address: string;
    name: string;
    cnpj: string;
}

export function SupplierFormAdd(props: SupplierFormProps){
    return(
        <div className="supplier-form-before">
            <div className="supplier-form add">
                <h2>Adicionar Fornecedor</h2>
                <form onSubmit={props.add}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" name="cnpj" />
                    <label htmlFor="address">Endereço</label>
                    <input type="texts" id="address" name="address" />
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" id="phone" name="phone" />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                    <div className="button-container">
                        <TextButton type="submit" text="Adicionar" />
                        <TextButton text="Cancelar" onClick={props.cancel}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export function SupplierFormEdit(props: EditFormProps){
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
        <div className="supplier-form-before">
            <div className="supplier-form edit">
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
                        <TextButton text="Salvar" type="submit"/>
                        <TextButton text="Cancelar" onClick={props.cancel}/>
                </form>
            </div> 
        </div>
    )
}