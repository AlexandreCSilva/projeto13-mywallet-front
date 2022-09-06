import styled from 'styled-components';
import { ThreeDots } from  'react-loader-spinner';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [object, setObject] = useState({});
    const [isAble, setIsAble] = useState(true);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const makeLogin = (event) => {
        console.log(event)
    };
        
    function handleForm (e) {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        if (form.email !== '' && form.password !== '') {
            console.log(form)
        }
    }, [form]);
    
    return (
        <Container>
            <div>
                <h1>MyWallet</h1>
                <form onSubmit={makeLogin}>
                    <input type="email" name='email' value={form.email} onChange={handleForm} placeholder='E-mail' disabled={!isAble ? true : false} />
                    <input type="password" name='password' value={form.password} onChange={handleForm} placeholder='Senha' disabled={!isAble ? true : false} />
                    <button type="submit">
                        {isAble ? 'Entrar' : <ThreeDots 
                            height="80" 
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
                <Link  to='/register'>
                    <h2>Primeira vez? Cadastre-se!</h2>
                </Link>
                
            </div>
        </Container>
    );
}

export default Login;

export const Container = styled.div`
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