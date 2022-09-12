import { Link } from "react-router-dom";
import dayjs from "dayjs";
import styled from 'styled-components';

const MIN_10 = 60 * 10;

function renderError() {
    localStorage.clear();
    
    return (
        <Container>
            <h1>MyWallet</h1>
            
            <h2>VOCÊ NÃO ESTÁ AUTORIZADO</h2>

            <Link  to='/'>
                <button>Login</button>
            </Link>
        </Container>
    );
}

export default function PrivatePage({ children }) {
    const auth = JSON.parse(localStorage.getItem('auth'));
    
    if (!auth) {
        return renderError();
    }

    const now = dayjs().unix();
    const timeLogged = auth.timestamp;

    if (dayjs(now).diff(dayjs(timeLogged)) <= MIN_10) {
        return (
        <>
            {children}
        </>
        );
    } else {
        return renderError();
    }
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        color: #ffffff;
        font-weight: 400;
        font-size: 32px;
        margin-bottom: 24px;
    }

    h2 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 15px;
        color: #ffffff;
    }

    button {
        height: 46px;
        margin-left: 7%;
        margin-top: 20px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #ffffff;
    }
`;