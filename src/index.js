import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import Main from './main'
import Card from './card'
import data from  './data'
import './App.css'

function Page(){
    const card = data.map(info =>{
        return (
            
            <Card

            key = {info.id}
            {...info}
           // style = {info.style}
            //parameter = {info.weatherCondition}
            //description = {info.description}
            //icon = {info.icon}
            //value = {info.value}
            //unit ={info.unit}

            />
        )
    })
    
    
    
        return(
            <div>
                 <Header />
                 <div className='body'>
                <Main />
                 <section className='cards-list'>
                 {card}
                </section> 
                </div>
                <Footer />
            </div>

        );
}
ReactDOM.render(<Page />, document.getElementById('root'));


