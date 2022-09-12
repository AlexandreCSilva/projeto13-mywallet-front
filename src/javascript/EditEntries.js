import styled from "styled-components";
import { useState, useEffect } from 'react';
import { ThreeDots } from  'react-loader-spinner';
import {  useNavigate } from 'react-router-dom';
import { postEditedBalance } from "../Services/MyWallet";

function EditedEntries (){
    let entries = false;
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
        if (form.value !== '' && form.description !== '' && form.value !== '0') {
            entries = true;
        } else {
            entries = false;
        }
    }, [form]);

    const addValue = (event) => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        const config = { headers:{'Authorization': 'Bearer '+ auth.authorization}, params: {'balanceId': '631ee102ccbcff5f275662d2'}};
        console.log(config)
        entries ? (
            postEditedBalance({ value: form.value, description: form.description, positive: true}, config).then(setIsAble(false))
            .catch(function () {
                alert('Ocorreu um erro ao adicionar valor, tente novamente!');
                setIsAble(true);
            }).then(function (response) {
                if (response) {
                    navigate('/homepage');
                }
            }).finally(function(){
                setIsAble(true);
            })
        ) : alert('Preencha todos os campos com dados válidos!');

        event.preventDefault();
    }

    return (
        <Container>
            <h1>Editar entrada</h1>

            <form onSubmit={addValue}>
                <input type="number" name='value' value={form.value} onChange={handleForm} placeholder='Valor' disabled={!isAble ? true : false} />
                <input type="text" name='description' value={form.description} onChange={handleForm} placeholder='Descrição' disabled={!isAble ? true : false} />
                <button type="submit">
                    {isAble ? 'Salvar entrada' : <ThreeDots 
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

export default EditedEntries;