import * as React from 'react';
import styled from "styled-components";

interface BrowserProps {
    onChangeText: (value: string) => void,
    onClick: () => void,
    placeholder: string,
    buttonTitle: string,
    value: string
}

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
`

const Input = styled.input`
    border: solid 1px #ccc;
    border-radius: 4px;
    margin-right: 5px;
    padding: 5px 10px;
    font-size: 16px;
    width: 80%;
    max-width: 300px;
`

const Button = styled.button`
    background-color: #2e2e2e;
    transition: all .1s;
    border: none;
    color: #fff;
    padding: 7px 10px;
    border-radius: 4px;
    height: 100%;
    &:active {
        background-color: #2e2e2e90;
        transition: all .1s;
    }
`
 
const Browser: React.FC<BrowserProps> = ({ 
    onChangeText,
    onClick,
    buttonTitle = "Enter",
    placeholder = "Type anything...",
    value
}) => {

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') onClick()
    }

    return (  
        <Container>
            <Input 
                type="text" 
                onChange={(e) => onChangeText(e.target.value)} 
                placeholder={placeholder}
                value={value}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={onClick}>{buttonTitle}</Button>
        </Container>
    );
}
 
export default Browser;