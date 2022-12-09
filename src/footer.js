export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer className="container">
            <div className='foo'>
            {/*<p className='footer-items'>Developed by Favour</p>*/}
            <p className='footer-items'>Submitted to the Department of Computer Engineering</p>
            <p className='footer-items'>In partial fulfillment of the award of B.Eng</p>
            <p className='footer-items'>Faculty of Engineering and Technology</p>
            <p className='footer-items'>University of Ilorin, Ilorin Nigeria</p>
            <p className='footer-items'>&copy;{year} • All Rights Reserved</p>
            </div>
            </footer>

    );
}
