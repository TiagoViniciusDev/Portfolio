import './ErrorPage.css'

function ErrorPage(){
    return(
        <div className='ErrorPage container'>
            <div className='text'>
                <h1>Error 404</h1>
                <p>Página não encontrada</p>
                <a className='btn' href="/">Voltar ao início</a>
            </div>
            <img src="/imgs/errorImg2.png" alt="errorImg" />
        </div>
    )
}

export default ErrorPage