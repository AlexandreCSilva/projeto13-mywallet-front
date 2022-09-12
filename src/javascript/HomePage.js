import styled from "styled-components";
import {  useNavigate, Link } from 'react-router-dom';
import { getBalance, deleteBalance } from "../Services/MyWallet";
import { useState, useEffect } from 'react';
/* 
() => {
    window.confirm('Deseja mesmo deletar a mensagem?') ? (
        deleteBalance( config.params = {'balanceId': item._id} )
        .then(function (response) {
            if (response) {
                window.location.reload();
            }
        })
    ) : ''; */

function HomePage() {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem('auth'));
    const config = { headers:{'Authorization': 'Bearer '+ auth.authorization}};
    const [ balance, setBalance ] = useState([]);
    let total = 0;
    
    useEffect(() => {
        getBalance( config )
        .then(function (response) {
            if (response) {
                setBalance(response.data);
            }
        })
    }, []);
    
    return (
        <Container>
            <span>
                <h1>Olá, {auth.name}</h1>
                <Link  to='/'>
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </span>

            <Balance>
                { 
                    (balance.length === 0) ?
                    <p>Não há registros de entrada ou saída</p>
                    : (
                        balance.map((item) => {
                            if (item.positive){
                                total += parseFloat(item.value);
                            } else {
                                total -= parseFloat(item.value);
                            }
                            return (
                                <Value positive={item.positive}>
                                    <h2>{item.time}</h2>
                                    <span><h3 onClick={() => {item.positive ? navigate('/editAdd') : navigate('/editDraw');  localStorage.setItem( 'balanceId', JSON.stringify(item._id));}}>{item.description}</h3><h4 >{item.value}</h4></span>
                                    <h5>x</h5>
                                </Value>
                            );
                        })
                    )           
                }

                
            </Balance>
            
            <Bottom positive={total >= 0}>
                    <div>
                        <h3>Saldo</h3>
                        <h4>{Math.abs(total)}</h4>
                    </div>
            </Bottom>
            
            <Buttons>
                <div onClick={() => navigate('/entries')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </div>
                <div onClick={() => navigate('/drawouts')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </div>
            </Buttons>
            
        </Container>
    );
}

export default HomePage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;

    span {
        width: 80%;
        margin-left: 10%;
    }
    
    span {
        margin-top: 22px;
        margin-bottom: 22px;
        display: flex;
        justify-content: space-between;
        
        h1 {
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 25px;
            color: #ffffff;
        }

        ion-icon {
            color: #ffffff;
            font-size: 25px;
            --ionicon-stroke-width: 50px;
        }
    }

`;

const Balance = styled.div`
    margin-left: 10%;
    width: 80%;
    height: 60%;
    padding-top: 20px;
    background-color: #ffffff;
    border-radius: 5px 5px 0 0 ;
    overflow-y: scroll;
    
    p {
        color: #868686;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        text-align: center;
    }
`;

const Value = styled.div`
    padding: 0 5%;
    margin-bottom: 20px;
    display: flex;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    
    h5,
    h2 {
        width: 20%;
        float: left;
        color: #C6C6C6;
    }

    span {
        margin: 0;
        width: 75%;
        display: flex;
        justify-content: space-between;
    }

    h4 {
        color: ${props => props.positive ? '#03AC00' : '#C70000'};
    }

    h5 {
        margin-left: 10px;
        width: 3%;
    }
`;

const Buttons = styled.span`
    height: 25%;
    display: flex;
    justify-content: space-between;

    div ion-icon {
        --ionicon-stroke-width: 40px;
    }

    div {
        margin: 0;
        width: 45%;
        height: 100%;
        background-color: #A328D6;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 5px;
        
        * {
            margin: 20px;
        }

        p {
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 15px;
            color: #ffffff;
        }
    }
`;

const Bottom = styled.div`
    margin-left: 10%;
    width: 80%;
    height: 10%;
    background-color: #ffffff;
    border-radius: 0 0 5px 5px;

    div {
        padding: 3% 5%;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
    } 
    

    h4 {
        color: ${props => props.positive ? '#03AC00' : '#C70000'};
    }
`;