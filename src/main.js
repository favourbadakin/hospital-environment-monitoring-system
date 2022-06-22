export default function Main(){
    const location = 'Children Ward'
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }
;    return(
        <main className="container">
            <h2 className="let-start">Good {timeOfDay}.</h2>
            <p className='condition'>These are the current weather conditions in the {location}.</p>
            </main>
    );
}