import styled from "styled-components";

const user = { name: 'fulaninho' }
const balance = [];

function HomePage() {
    return (
        <Container>
            <span>
                <h1>Olá, {user.name}</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </span>

            <div>
                { (balance.length === 0) ?
                    <p>Não há registros de entrada ou saída</p>
                    : 'saldo'             
                }
            </div>

            <Buttons>
                <div>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </div>
                <div>
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

    div, 
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

    div {
        height: 70%;
        background-color: #ffffff;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            color: #868686;
            font-family: 'Raleway';
            font-weight: 400;
            font-size: 20px;
            text-align: center;
        }
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