import { ComponentProps } from "react";

interface SupplierFormProps extends ComponentProps<'form'>{
    subm: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function SupplierForm(props: SupplierFormProps){
    
    return(
        <div className="supplier-form-add">
            <h2>Adicionar Fornecedor</h2>
            <form onSubmit={props.subm}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cnpj" />
                <label htmlFor="address">Endereço</label>
                <input type="text" id="address" name="address" />
                <label htmlFor="phone">Telefone</label>
                <input type="text" id="phone" name="phone" />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
                <input type="submit" value="Adicionar" />
            </form>
        </div>
        
    )
}