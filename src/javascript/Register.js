import styled from 'styled-components';
import { ThreeDots } from  'react-loader-spinner';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { postRegister } from '../Services/MyWallet';

function Register() {
    let login = false;
    const navigate = useNavigate();
    const [isAble, setIsAble] = useState(true);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    function handleForm (e) {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        if (form.name !== '' && form.email !== '' && form.password !== '' && form.confirmPassword !== '') {
            login = true;
        } else {
            login = false;
        }
    }, [form]);

    const makeRegister = (event) => {
        
        login ? (
            postRegister(form).then(setIsAble(false))
            .catch(function (error) {
                alert('Ocorreu um erro no login, tente novamente! '+ error.response.data);
                setIsAble(true);
            }).then(function (response) {
                if (response) {
                    alert('Registrado com sucesso!');
                    navigate('/');
                }
            }).finally(function(){
                setIsAble(true);
            })
        ) : alert('Preencha todos os campos!');

        event.preventDefault();
    }
    
    return (
        <Container>
            <div>
                <h1>MyWallet</h1>
                <form onSubmit={makeRegister}>
                    <input type="name" name='name' value={form.name} onChange={handleForm} placeholder='Nome' disabled={!isAble ? true : false} />
                    <input type="email" name='email' value={form.email} onChange={handleForm} placeholder='Email' disabled={!isAble ? true : false} />
                    <input type="password" name='password' value={form.password} onChange={handleForm} placeholder='Senha' disabled={!isAble ? true : false} />
                    <input type="password" name='confirmPassword' value={form.confirmPassword} onChange={handleForm} placeholder='Confirme a senha' disabled={!isAble ? true : false} />
                    <button type="submit">
                        {isAble ? 'Cadastrar' : <ThreeDots 
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
                <Link  to='/'>
                    <h2>Já tem uma conta? Entre agora!</h2>
                </Link>
                
            </div>
        </Container>
    );
}

export default Register;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8c11be;
    display: flex;

    div {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    div h1 {
        font-family: 'Saira Stencil One', cursive;
        color: #ffffff;
        font-weight: 400;
        font-size: 32px;
        margin-bottom: 24px;
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

    h2 {
        margin-top: 36px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 15px;
        color: #ffffff;
    }

    a {
        text-decoration: none;
    }
`;