import styled from "styled-components";
import { useState, useEffect } from 'react';
import { ThreeDots } from  'react-loader-spinner';
import {  useNavigate } from 'react-router-dom';

function DrawOuts (){
    let drawOuts = false;
    const navigate = useNavigate();
    const [isAble, setIsAble] = useState(true);
    const [form, setForm] = useState({
        value: '',
        description: '',
    });
        
    function handleForm (e) {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        if (form.value !== '' && form.description !== '') {
            drawOuts = true;
        } else {
            drawOuts = false;
        }
    }, [form]);

    const addValue = (event) => {
        navigate('/homepage');
        /* drawOuts ? (
            postLogin(form).then(setIsAble(false))
            .catch(function (error) {
                alert('Ocorreu um erro no login, tente novamente! '+error);
                setIsAble(true);
            }).then(function (response) {
                if (response) {
                    navigate('/homepage');
                }
            }).finally(function(){
                setIsAble(true);
            })
        ) : alert('Preencha todos os campos!');

        event.preventDefault(); */
    }

    return (
        <Container>
            <h1>Nova saída</h1>

            <form onSubmit={addValue}>
                <input type="number" name='value' value={form.value} onChange={handleForm} placeholder='Valor' disabled={!isAble ? true : false} />
                <input type="text" name='description' value={form.description} onChange={handleForm} placeholder='Descrição' disabled={!isAble ? true : false} />
                <button type="submit">
                    {isAble ? 'Salvar saídar' : <ThreeDots 
                        height="10" 
                        width="80"
                        radius="9"
                        color="#FFFFFF" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />}
                </button>
            </form>
        </Container>
    );
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8c11be;

    h1 {
        padding-top: 22px;
        padding-bottom: 22px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 25px;
        color: #ffffff;
    }

    h1 {
        width: 80%;
        margin-left: 10%;
    }
    
    form input {
        width: 80%;
        height: 58px;
        border-radius: 5px;
        border: none;
        margin-left: 7%;
        margin-bottom: 13px;
        padding-left: 15px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    }

    input::placeholder {
        color: #000000;
    }

    form button {
        width: 83%;
        height: 46px;
        margin-left: 7%;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #ffffff;
    }
`;

export default DrawOuts;