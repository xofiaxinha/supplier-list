import {useEffect, useState} from 'react'
import {Table, TableCell, TableHeader, TableRow} from './table'
import suppliers from '../example/suppliers.json'
import { TextButton } from './buttons'
import { DropDown } from './dropdown'
import { SupplierFormAdd, SupplierFormEdit} from './supplier-form'
import { Header } from './header'

interface Supplier {
    id: string
    name: string
    email: string
    phone: string
    address: string
    cnpj: string
}

const readSuppliers = (): Supplier[] => {
    return suppliers as Supplier[];
};
function generateID(): string{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for(let i = 0; i < 8; i++){
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    id += '-';
    for(let i = 0; i < 4; i++){
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    id += '-';
    for(let i = 0; i < 4; i++){
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    id += '-';
    for(let i = 0; i < 12; i++){
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

export function SupplierList(){
    const [suppliersList, setSuppliersList] = useState<Supplier[]>([]);
    useEffect(() => {
        const supp = readSuppliers();
        setSuppliersList(supp);
    })
    const [total, setTotal] = useState(0);
    const [showForm, setShowForm] = useState("Nenhum");
    const [showDropDown, setShowDropdown] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
    useEffect(() => {
        setTotal(suppliersList.length);
    }, [suppliersList]);
    
    let totalPaginas = Math.ceil(total / 10);
    
    const [page, setPage] = useState(() => {
        const url = new URL(window.location.toString())
        if(url.searchParams.has('page')){
            return Number(url.searchParams.get('page'))
        }
        return 1
    });

    function setCurrentPage(page: number){
        const url = new URL(window.location.toString())
        url.searchParams.set('page', String(page))
        window.history.pushState({}, '', url.toString())
        setPage(page)
    }
    function goToNextPage(){
        setCurrentPage(page + 1)
    }
    function goToPreviousPage(){
        setCurrentPage(page - 1)
    }
    function validateCNPJ(cnpj: string){
        if(cnpj.length !== 18){
            return false;
            }
        if(cnpj[2] !== '.' || cnpj[6] !== '.' || cnpj[10] !== '/' || cnpj[15] !== '-'){
            return false;
            }
        const chars = '0123456789';
        for(let i = 0; i < 18; i++){
            if(i === 2 || i === 6 || i === 10 || i === 15){
                continue;
            }
            if(!chars.includes(cnpj[i])){
                return false;
            }
        }
        return true;
    }
    function validatePhone(phone: string){
        if(phone.length !== 10 && phone.length !== 11){
            return false;
        }
        const chars = '0123456789';
        for(let i = 0; i < phone.length; i++){
            if(!chars.includes(phone[i])){
                return false;
                }
            }
        return true;
    }
    function validateEmail(email: string){
        const at = email.indexOf('@');
        const dot = email.indexOf('.');
        if(at === -1 || dot === -1){
            return false;
        }
        return true;
    }
    function validateForm(name: string, cnpj: string, address: string, phone: string, email: string){
        if(name === "" || cnpj === "" || address === "" || phone === "" || email === ""){
            return false;
        }
        return true;
    }

    function handleCancel(){
        setShowForm("Nenhum");
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const cnpj = formData.get('cnpj') as string;
        const address = formData.get('address') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        if(!validateForm(name, cnpj, address, phone, email)){
            alert("Preencha todos os campos");
            return;
        }
        if(!validateCNPJ(cnpj)){
            alert("CNPJ inválido");
            return;
        }
        if(!validatePhone(phone)){
            alert("Telefone inválido");
            return;
        }
        if(!validateEmail(email)){
            alert("Email inválido");
            return;
        }
        const newSup: Supplier = {
            id: generateID(),
            name: name,
            cnpj: cnpj,
            email: email,
            phone: phone,
            address: address
        }
        suppliersList.push(newSup);
        setSuppliersList(suppliersList);
        setShowForm("Nenhum");
    }
    function handleEdit(event: React.FormEvent<HTMLFormElement>){
        console.log("Editando fornecedor com id: ", event.currentTarget.id);
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const id = formData.get('id') as string;
        const name = formData.get('name') as string;
        const cnpj = formData.get('cnpj') as string;
        const address = formData.get('address') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        if(!validateForm(name, cnpj, address, phone, email)){
            alert("Preencha todos os campos");
            return;
        }
        if(!validateCNPJ(cnpj)){
            alert("CNPJ inválido");
            return;
        }
        if(!validatePhone(phone)){
            alert("Telefone inválido");
            return;
        }
        if(!validateEmail(email)){
            alert("Email inválido");
            return;
        }
        suppliersList.forEach((supplier) => {
            if(supplier.id === id){
                supplier.name = name;
                supplier.cnpj = cnpj;
                supplier.email = email;
                supplier.phone = phone;
                supplier.address = address;
            }
        })
        setSuppliersList(suppliersList);
        setShowForm("Nenhum");
    }
    function handleSelect(supplier: Supplier){
        setSelectedSupplier(supplier);
    }
    function handleDelete(id: string){
        suppliersList.forEach((supplier, index) => {
            if(supplier.id === id){
                suppliersList.splice(index, 1);
            }
        })
        setSuppliersList(suppliersList);
        console.log(suppliersList);
    }
    return(
        <>
            <Header>
            </Header>
            <div className="button-container">
                <TextButton text="Adicionar Fornecedor" id="add-supplier" onClick={() => {setShowForm("Adicionar Fornecedor")}}/>
            </div>
            {showForm === "Adicionar Fornecedor" ? <SupplierFormAdd add={handleSubmit} cancel={handleCancel}>
            </SupplierFormAdd> : ""}
            <Table>
                <TableRow>
                    <TableHeader>Nome</TableHeader>
                    <TableHeader>CNPJ</TableHeader>
                    <TableHeader>Ver mais</TableHeader>
                </TableRow>
                {suppliersList.slice((page-1)*10, page*10).map(supplier => (
                        <TableRow key={supplier.id}>
                            <TableCell><p>{supplier.name}</p></TableCell>
                            <TableCell><p>{supplier.cnpj}</p></TableCell>
                            <TableCell className='see-more'>
                                <TextButton text="Ver mais" onClick={() => {
                                if(showDropDown){
                                    setShowDropdown(false);
                                    setSelectedSupplier(null);
                                }
                                else{
                                    setShowForm("Nenhum");
                                    setShowDropdown(true);
                                    handleSelect(supplier);
                                    }
                                }}/>
                            </TableCell>
                            {selectedSupplier === supplier ? <DropDown id={supplier.id} mail={supplier.email} phone={supplier.phone} address={supplier.address}>
                                <div className="button-container">
                                    <TextButton text="Editar" onClick={() => setShowForm("Editar Fornecedor")}/>
                                    <TextButton text="Deletar" onClick={() => {
                                        const c = confirm("Deseja realmente deletar o fornecedor?");
                                            if(c){
                                                handleDelete(supplier.id);
                                            }
                                        setShowDropdown(false);
                                        setSelectedSupplier(null);
                                        }}/>
                                </div>
                            </DropDown> : ""}
                            {showForm === "Editar Fornecedor" && selectedSupplier === supplier ? <SupplierFormEdit cancel={handleCancel} edt={handleEdit} id={supplier.id} mail={supplier.email} phone={supplier.phone} address={supplier.address} name={supplier.name} cnpj={supplier.cnpj}></SupplierFormEdit> : ""}
                        </TableRow>
                ))}
                <TableRow>
                    <TableCell className='footer'>Total na página: {
                            page*10 > total ? total - (page-1)*10 : 10
                        } </TableCell>
                    <TableCell className='footer'>Página {page} de {totalPaginas}</TableCell>
                    <TableCell className='footer'>
                        <button onClick={goToPreviousPage} disabled={page==1}>A</button>
                        <button onClick={goToNextPage} disabled={page==totalPaginas}>P</button>
                    </TableCell>
                </TableRow>
            </Table>
        </>
    )
}