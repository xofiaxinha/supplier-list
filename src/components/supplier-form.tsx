import { ComponentProps } from "react";
import { TextButton } from "./buttons";

interface SupplierFormProps extends ComponentProps<'form'>{
    add: (event: React.FormEvent<HTMLFormElement>) => void;
    cancel: () => void;
}

export function SupplierForm(props: SupplierFormProps){
    
    return(
        <div className="supplier-form-before">
            <div className="supplier-form-add">
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