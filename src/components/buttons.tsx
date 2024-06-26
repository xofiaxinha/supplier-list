import { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'>{
    path: string;
    alt: string;
}
interface TextButtonProps extends ComponentProps<'button'>{
    text: string;
}

export function IconButton(props: IconButtonProps){
    return(
        <button className='icon-button' {...props}>
            <img src={props.path} alt={props.alt} />
        </button>
    );
}
export function TextButton(props: TextButtonProps){
    return(
        <button {...props} className="text-button">
            {props.text}
        </button>
    );
}